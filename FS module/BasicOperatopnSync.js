const fs = require('fs');
fs.writeFileSync("./FS module/temp.txt", "what are you doing ");
fs.appendFileSync("./FS module/temp.txt", " what are you doing and how are you");
const data = fs.readFileSync("./FS module/temp.txt", "utf8");
console.log(data);
