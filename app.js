var http = require("http");

function f(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
}
// ...
http.createServer(f).listen(8081);
console.log("Server is listening");
