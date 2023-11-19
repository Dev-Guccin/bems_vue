const { XMLParser } = require("fast-xml-parser");

const options = {
    ignoreAttributes : false
};

const parser = new XMLParser(options);

module.exports.xmlToObj = (xml)=>{
    let jObj = parser.parse(xml);
    return jObj;
}
