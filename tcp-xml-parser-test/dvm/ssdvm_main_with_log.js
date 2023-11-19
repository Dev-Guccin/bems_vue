"use strict";
/**
 * 소켓 xml 통신 작업 내용
 * 1. xml 데이터 요청
 * 2. 인증 데이터 요청
 * 3. 인증 완료후 환경 데이터 응답받기
 * 4. xml 에서 지정된 데이터만 파싱
 */
const net = require("net");
const Xml = require("./xml_parser.js");
const configAll = require("./config.js");
const Database = require("./databaseModule.js");
const { setCtrlValue } = require("./ctrlModule.js");

var { GMStructor } = require("./GMStructure.js");
const { log } = require("console");

const config = configAll.deviceConfigs;

const authXmlList = [
  `<?xml version="1.0" encoding="euc-kr"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:08" dvmControlMode="individual"/><wink/></root>`,
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="command" dateTime="2022-10-25 00:50:09" dvmControlMode="individual"/><passwordAuth password="1234"/></root>`,
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="command" dateTime="2022-10-25 00:50:09" dvmControlMode="individual"/><shakeSerialNo serialNo="SNET20041209094600000"/></root>`,
];

const getPowerDivisionResult = `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:26" dvmControlMode="individual"/><getPowerDivisionResult><date date="2022-10-24"/></getPowerDivisionResult></root>`;
const getMonitoringXml = `<?xml version='1.0' encoding='UTF-8'?><root><header sa='mfc' da='dms' messageType='request' dateTime='2011-01-11T12:20:00' dvmControlMode='individual'/><getMonitoring><all/></getMonitoring></root>`;
const getStatusUploadXml = `<?xml version='1.0' encoding=U'TF-8'?><root><header sa='mfc' da='dms' messageType="request" dateTime="2022-10-25 00:50:18" dvmControlMode="individual"/><getStatusUpload/></root>`;

const gmsKey = [
  "addr",
  "power",
  "setTemp", // int
  "roomTemp", // int
  "opMode",
  "remoconEnable",
  "fanSpeed",
  "error",
  "useMode",
  "controlMode",
  "upperTemperatureLimit",
  "lowerTemperatureLimit",
  "upperTemperature", // int
  "lowerTemperature", // int
  "isTempLimited",
];

// TCP 소켓의 커넥션을 연결한다.
const sockets = [];
const buffers = [];
const isSending = [];
const indoorName = {}; // "11.05.07": "체련단련실2" 의 데이터가 저장된다.
let packet = 0;

for (let i = 0; i < config.length; i++) {
  const serverInfo = config[i];
  buffers[i] = Buffer.alloc(0);
  isSending[i] = false;

  // 서버 연결 안되는 경우
  const socket = net.connect(
    { port: serverInfo.port, host: serverInfo.host },
    function () {
      console.log(serverInfo);
      console.log("connected");

      socket.on("data", (data) => {
        packet += 1;
        try {
          let totalLength = buffers[i].length + data.length;
          buffers[i] = Buffer.concat([buffers[i], data], totalLength);
          let xObj;
          try {
            console.log(buffers[i].toString());
            xObj = Xml.xmlToObj(buffers[i].toString());
          } catch (err) {
            console.log("[*] 데이터 받는중...");
            console.log("받고 있는 데이터");
            console.log(buffers[i].toString());
            return;
          }

          if (xObj.root.getPowerDivisionResult != undefined) {  
            const results = xObj.root.getPowerDivisionResult.date.result;
            if(results !== undefined){
              console.log(results);
              for (let j = 0; j < results.length; j++) {
                const result = results[j];
                indoorName[result["@_indoorID"]] = result["@_indoorName"];
              }
              console.log(indoorName);
            }
          } else if (xObj.root.getMonitoring != undefined) {
            saveGetMonitoring(xObj, config[i]);
            console.log("[+] getMonitoring 파싱 및 DB 저장 완료");
            isSending[i] = false; // 모든 indoor id에 대해서 전송을 마치면 완료 설정을 해준다.
          } else if (xObj.root.getStatusUpload != undefined) {
            console.log(xObj);
          } else if (xObj.root.setControl != undefined) {
            console.log(xObj);
          }

          // 문제없이 XML 파싱이 완료되면 버퍼를 비워준다.
          buffers[i] = Buffer.alloc(0); // 버퍼 초기화
        } catch (err) {
          console.log(err);
        }
        console.log(packet);
      });

      socket.on("error", (err) => {
        console.log(err);
      });

      console.log("[+] 인증 데이터를 전송합니다.");
      for (let j = 0; j < authXmlList.length; j++) {
        const xml = authXmlList[j];
        console.log("send:", xml);
        socket.write(xml);
      }
      socket.write(getPowerDivisionResult);

      setInterval(() => {
        // 데이터를 보낸다.
        if (isSending[i] == true) {
          console.log("[*] 아직 데이터를 받는중...");
          return;
        }
        isSending[i] = true;
        socket.write(getMonitoringXml);
      }, 1000 * 10); // 10초에 한번씩 데이터를 받아옴

      setInterval(() => {
        setCtrlValue((xml) => {
          socket.write(xml);
          console.log("[+] SEND CTRL!!!", xml);
        });
      }, 1000 * 13);
      sockets.push(socket);
    }
  );
}

function saveGetMonitoring(xObj, config) {
  const indoorList = xObj.root.getMonitoring.all.indoor;
  for (let ii = 0; ii < indoorList.length; ii++) {
    const indoor = indoorList[ii];
    indoor.config = config;
    indoor.indoorDetail["@_addr"] = indoor["@_addr"];
    var gms = new GMStructor(indoor.indoorDetail);

    gms.setObjectName(indoorName[gms.getAddress()]);
    // 데이터베이스에 차례로 저장하기
    for (let gi = 1; gi < gmsKey.length; gi++) {
      const key = gmsKey[gi];
      Database.realtimeUpsert(gms, key);
    }
  }
}

// for (let si = 0; si < sockets.length; si++) {
//   const socket = sockets[si];
//   socket.end();
// }
