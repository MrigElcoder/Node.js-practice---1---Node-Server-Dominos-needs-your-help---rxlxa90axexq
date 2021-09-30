var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  res.setHeader("Content-Type","text/html");
  res.writeHead(200);
  res.end(" Welcome to Dominos!");
}
server.listen(8081);
module.exports = httpServer;
