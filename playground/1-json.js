const fs = require('fs');
                                            
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const parsedData = JSON.parse(dataJSON);

parsedData.name = "raj"
parsedData.age = 2222

const user = JSON.stringify(parsedData);

fs.writeFileSync('1-json.json', user);
