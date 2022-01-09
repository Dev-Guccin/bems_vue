"use strict"

//모듈 가져오기
const DBH = require("./database.js")

const bacnet = require("node-bacnet")

//대상목록 보관할 배열(ctrl_list)생성(target객체가 들어갈 예정)
let ctrl_list = []

module.exports = function () {
  setInterval(() => {
    start()
  }, 20000)
}
async function start() {
  await get_info()
  bacnet_output()
}
function get_info() {
  //DB를 통해 데이터를 ctrl값을 수정할 station과 device를 가져온다.
  return new Promise(async function (resolve, reject) {
    let rows = await DBH.select_not_null("bacnet")
    for (const row of rows) {
      // console.log(row)
      let tmp = {}
      tmp.id = row["id"]
      tmp.object_name = row["object_name"]
      tmp.ctrl_value = row["ctrl_value"]
      tmp.network_type = row["network_type"]
      tmp.network_id = row["network_id"]

      let detail = await DBH.get_bacnet_staion(tmp.network_id) //접근할 station의 정보 가져온다.
      tmp.device_id = detail["device_id"]
      tmp.net = detail["net"]
      tmp.mac = detail["mac"]
      tmp.object = detail["object"]
      tmp.object_type = detail["object_type"]
      tmp.object_instance = detail["object_instance"]
      tmp.value_type = detail["value_type"]
      tmp.active = detail["active"]

      let address = await DBH.get_bacnet_device(detail["device_id"]) //접근할 device의 정보 가져온다.
      tmp.ip = address["address"]
      tmp.broadcast_address = address["broadcast_address"]
      tmp.port = address["port"]
      tmp.period = address["period"]
      tmp.active = address["active"]
      tmp.available = address["available"]
      if (tmp.active == 1 && tmp.available == 1) {
        ctrl_list.push(tmp)
      } else {
        //active가 죽어있거나 접근이 불가능한 경우
        console.log(
          "[-] error : active 상태가 아니거나 available상태가 아닙니다.",
          tmp
        )
      }
    }
    console.log("get_info완료")
    resolve()
  })
}

//bacnet_output함수 생성
function bacnet_output() {
  console.log("bacnet_output 시작 : ", ctrl_list)
  for (let i = 0; i < ctrl_list.length; i++) {
    let target = ctrl_list[i]
    console.log("num: ", i)
    console.log("target: ", target)

    let ip_address =
      `${target.ip}` + (target.port == 47808 ? "" : ":" + target.port)

    let client = new bacnet({
      //백넷 데이터를 보내줄 서버(로컬)
      apduTimeout: target.period,
    })
    if (target.mac != undefined) {
      const makeMac = (macString) => {
        let macArray = macString.split(/[.|:]/)
        const port = Number(macArray.pop())

        const hexString = port.toString(16) //decimal to hex
        const _hexString = hexString.padStart(4, "0")
        macArray.push(_hexString.slice(0, 2))
        macArray.push(_hexString.slice(2, 4))
        macArray = macArray.map(function (numString) {
          return parseInt(numString, 10)
        })
        //console.log(macArray)
        return macArray
      }
      ip_address = {
        address: ip_address,
        net: target.net,
        adr: makeMac(target.mac),
      }
    }
    console.log("ip_address:", ip_address)
    console.log("present:", bacnet.enum.PropertyIdentifier.PRESENT_VALUE)
    console.log("data:", {
      type: target.value_type,
      value: target.ctrl_value,
    })
    //let res = await sync_writePropertyMultiple(ip_address, target)
    //console.log(res)
    // type에 따른 형태를 정해주어야한다.
    client.writeProperty(
      ip_address,
      { type: target.object_type, instance: target.object_instance },
      bacnet.enum.PropertyIdentifier.PRESENT_VALUE,
      [
        {
          type: target.value_type,
          value: target.ctrl_value,
        },
      ],
      (err, value) => {
        if (err) {
          console.log(err)
        }
        console.log(value)
        DBH.recover_realtime(
          target.id,
          target.object_name,
          target.network_type,
          target.network_id
        )
      }
    )
  }
  ctrl_list = []
}
function sync_writePropertyMultiple(ip_address, target) {
  return new Promise((resolve, reject) => {
    try {
      client.writeProperty(
        ip_address,
        { type: target.object_type, instance: target.object_instance },
        bacnet.enum.PropertyIdentifier.PRESENT_VALUE,
        [
          {
            type: target.value_type,
            value: target.ctrl_value,
          },
        ],
        (err, value) => {
          if (err) {
            console.log(err)
            resolve()
          }
          console.log(value)
          DBH.recover_realtime(
            target.id,
            target.object_name,
            target.network_type,
            target.network_id
          )
          resolve(value)
        }
      )
    } catch (err) {}
  })
}
