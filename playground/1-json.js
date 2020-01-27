const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');

const dataJSON = dataBuffer.toString();

const parsedData = JSON.parse(dataJSON);

parsedData.name = "total";

parsedData.age = 74747;

const user = JSON.stringify(parsedData);

fs.writeFileSync("1-json.json" , user);

