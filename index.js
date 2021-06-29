function sayHello(name) {
    console.log(name);
}

sayHello("Hello");

const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`${totalMemory}, ${freeMemory}`);

const fs = require("fs");
fs.readdir("./", function (error, files) {
  if (error) console.log("error", error);
  else console.log("Files", files);
});

console.log(fs.readdirSync("./"));

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

logger.on("logger", (arg) => {
    console.log("listener", arg)
});

logger.log("hello")

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello");
    res.end();
  }
  if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("port 3000");


