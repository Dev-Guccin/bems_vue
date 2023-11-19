/**
 * 소켓 xml 통신 작업 내용
 * 1. xml 데이터 요청
 * 2. 인증 데이터 요청
 * 3. 인증 완료후 환경 데이터 응답받기
 * 4. xml 에서 지정된 데이터만 파싱
 */
const net = require("net");
const Xml = require("./xml_parser.js");

// TCP 소켓의 커넥션을 연결한다.
const socket = net.connect({ port: 11000, host: "192.168.7.100" }, function () {
  console.log("connected");
});

function writeXML(xml, callback) {
  socket.write(xml);
  socket.on("data", (data) => {
    callback(null, data);
  });
  socket.on("error", (err) => {
    callback(err, null);
  });
}

//1. xml 데이터 요청
writeXML(
  `<?xml version="1.0" encoding="euc-kr"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:08" dvmControlMode="individual"/><wink/></root>`,
  (err, res) => {
    console.log(1);
    const jObj = Xml.xmlToObj(res.toString());
    console.log(jObj);
  }
);
// 2. 인증 데이터 요청
writeXML(
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="command" dateTime="2022-10-25 00:50:09" dvmControlMode="individual"/><passwordAuth password="1234"/></root>`,
  (err, res) => {
    console.log(2);
    const jObj = Xml.xmlToObj(res.toString());
    console.log(jObj);
  }
);
// 3. 인증 완료후 환경 데이터 응답받기
writeXML(
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="command" dateTime="2022-10-25 00:50:09" dvmControlMode="individual"/><shakeSerialNo serialNo="SNET20041209094600000"/></root>`,
  (err, res) => {
    console.log(3);
    const jObj = Xml.xmlToObj(res.toString());
    console.log(jObj);
  }
);
// 4. xml 에서 지정된 데이터만 파싱
writeXML(
  `<?xml version="1.0"?><root><header sa="guest" da="dms" messageType="request" dateTime="2022-10-25 00:50:18" dvmControlMode="individual"/><getStatusUpload/></root>`,
  (err, res) => {
    console.log(4);
    const jObj = Xml.xmlToObj(res.toString());
    console.log(jObj);
  }
);

socket.end();
