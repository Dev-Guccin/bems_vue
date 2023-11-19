var net = require("net");
sockets = [];

// tcp 서버를 생성하는데 여러 요청이 들어올때마다 배열에 담아 저장한다.
var server = net.createServer(function (client) {
  client.setEncoding("utf8");
  client.setTimeout(500);
  client.on("data", function (data) {
    console.log(data);
    if (data === "getData") {
      console.log("getData!!!");
      client.write(
        `<?xml version='1.0' encoding='UTF-8'?>
        <root>
        <header sa='dms' da='guest' messageType='response' dateTime='2022-10-25 00:50:21' dvmControlMode='individual'/>
        <getPowerDivisionResult>
        <date date='2022-10-24'>
        <result indoorID='11.01.01' indoorName='ê°ë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.01.02' indoorName='ê°ë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.03' indoorName='ìêµ¬ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.04' indoorName='ìêµ¬ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.05' indoorName='ì¬ë¬´ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.02.06' indoorName='IT êµì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.01' indoorName='ìë¹ì¡°ë¦¬ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.07' indoorName='ìë¹1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.08' indoorName='ìë¹2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.09' indoorName='ìë¹3' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.03.10' indoorName='ìë¹4' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.04.02' indoorName='ë³µë1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.04.03' indoorName='ë³µë2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.04.04' indoorName='2Fìíìì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.04.05' indooName='ë°©ì¡ì¤' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.05.06' indoorName='ì²´ë ¥ë¨ë ¨ì¤1' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.05.07' indoorName='ì²´ë ¥ë¨ë ¨ì¤2' kilowattHour='0.0' powerOnTime='0'/>
        <result indoorID='11.05.08' indoorName='ì²´ë ¥ë¨ë ¨ì¤3' kilowattHour='0.0' powerOnTime='0'/>
        </date></getPowerDivisionResult></root>
        `
      );
    }
  });
  client.on("error", function () {
    //console.log(`error`);
  });
  client.on("close", function () {
    sockets.pop();
    console.log("close ㅂㅂ");
  });
  client.on("timeout", function () {});
  // client.write('hihi');
  sockets.push(client);
});

server.on("error", function (error) {});

// 지정된 서버의 커넥션 연결을 진행한다.
server.listen(2222, function () {
  var serverInfo = server.address();
  var serverInfoJson = JSON.stringify(serverInfo);
  console.log("listen server : " + serverInfoJson);
  server.on("close", function () {
    console.log("server closed.");
  });
  server.on("connection", function () {
    console.log(`누가드르와따`);
  });
});
