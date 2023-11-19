/**
 * 소켓 xml 통신 작업 내용
 * 1. xml 데이터 요청
 * 2. 인증 데이터 요청
 * 3. 인증 완료후 환경 데이터 응답받기
 * 4. xml 에서 지정된 데이터만 파싱
 */
const net = require("net");
const Xml = require("./xml_parser.js");

var client = new net.Socket();
// client.setEncoding("utf-8");

client.connect({ port: 2222, host: "localhost" }, function () {
  console.log("client -> connected to server");
  client.write("getData");
});
i = 0;

let buffer = Buffer.alloc(0);

client.on("data", function (data) {
  i += 1;
  console.log(i, data.length);
  console.log(data);
  console.log(typeof data);
  // xml 검사
  // 괜찮으면 처리하고 데이터 비움
  try {
    totalLength = buffer.length + data.length;
    buffer = Buffer.concat([buffer, data], totalLength);
    console.log(buffer.length);
    xObj = Xml.xmlToObj(buffer.toString());
    /**
     * 여기서 필요한 코드를 작성함
     */
    console.log(xObj);
    buffer = Buffer.alloc(0); // 버퍼 초기화
  } catch (err) {
    console.log("xml파싱 안됨 다음 버퍼를 기다리겠습니다.");
  }
});

// client.end();
