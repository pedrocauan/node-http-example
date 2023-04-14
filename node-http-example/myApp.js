const http = require("http");
const displayContent = require("./routes.js");
const server = http.createServer(displayContent);
const colors = require("colors");
server.listen(3001);

console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('98Noot Here')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.america('Run the trap')); // Drops the bass
