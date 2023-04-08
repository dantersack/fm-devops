const http = require("http");

process.on("SIGINT", () => process.exit(0));

http
  .createServer((req, res) => {
    console.log("request received");
    res.end("hello world", "utf-8");
  })
  .listen(3000);

console.log("server started");
