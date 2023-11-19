/**
 * 소켓 xml 통신 작업 내용
 * 1. xml 데이터 요청
 * 2. 인증 데이터 요청
 * 3. 인증 완료후 환경 데이터 응답받기
 * 4. xml 에서 지정된 데이터만 파싱
 */
const { WriteStream } = require("fs");
const net = require("net");
const { Stream } = require("stream");
const Xml = require("./xml_parser.js");

// TCP 소켓의 커넥션을 연결한다.
const socket = net.connect({ port: 2222, host: "localhost" }, function () {
  console.log("connected");
});
i = 0;
socket.set;
socket.on("data", (data) => {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log(data);
  console.log(data.toString());
  const jObj = Xml.xmlToObj(data.toString());
  i += 1;
  console.log(i);
});
let success = socket.write("getData", (res) => {
  console.log(res);
});
console.log("success:" + success);

socket.end();
