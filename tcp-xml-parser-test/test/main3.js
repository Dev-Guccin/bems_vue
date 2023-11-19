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

const config = require("./config");

const sockets = [];

const authXmlList = [
  `<?xml version="1.0" encoding="euc-kr"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:08" dvmControlMode="individual"/><wink/></root>`,
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="command" dateTime="2022-10-25 00:50:09" dvmControlMode="individual"/><passwordAuth password="1234"/></root>`,
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="command" dateTime="2022-10-25 00:50:09" dvmControlMode="individual"/><shakeSerialNo serialNo="SNET20041209094600000"/></root>`,
  //   `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:26" dvmControlMode="individual"/><getPowerDivisionResult><date date="2022-10-24"/></getPowerDivisionResult></root>`,
  `<?xml version='1.0' encoding='UTF-8'?><root><header sa='mfc' da='dms' messageType='request' dateTime='2011-01-11T12:20:00' dvmControlMode='individual'/><getMonitoring><all/></getMonitoring></root>`,
];

// TCP 소켓의 커넥션을 연결한다.
for (let i = 0; i < config.length; i++) {
  const serverInfo = config[i];

  // 서버 연결 안되는 경우
  const socket = net.connect(
    { port: serverInfo.port, host: serverInfo.host },
    function () {
      console.log(serverInfo);
      console.log("connected");

      socket.on("data", (data) => {
        let buffer = Uint8Array.from([...buffer, ...data]);
        buffer = new Uint8Array(buffer);
        buffer = Buffer.from(buffer);

        console.log(data.toString());
        console.log("---------");
        // const jObj = Xml.xmlToObj(data.toString());
        // console.log(jObj);
        // if (jObj.root.getMonitoring !== undefined) {
        // indoor 가 존재하는 경우
        //   const indoorList = jObj.root.getMonitoring.all;
        //   console.log(indoorList);
        // }
      });

      socket.on("error", (err) => {
        console.log(err);
      });

      for (let j = 0; j < authXmlList.length; j++) {
        const xml = authXmlList[j];
        console.log("send:", xml);
        socket.write(xml);
      }

      sockets.push(socket);
    }
  );
}

// const inDoorXml = `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:26" dvmControlMode="individual"/><getPowerDivisionResult><date date="2022-10-24"/></getPowerDivisionResult></root>`;

// socket.end();
function saveIndoorInfoToDatabase(indoorResults) {
  for (let i = 0; i < indoorResults.length; i++) {
    const indoorResult = indoorResults[i];
  }
}
