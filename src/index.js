var http = require("http");

const httpServer = http.createServer(handleServer);
const host = 'localhost';
const port = 8000;

function handleServer(req, res) {
  res.setHeader("Content-Type","text/html");
  res.writeHead(200);
  res.end(" Welcome to Dominos!");
}
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
module.exports = httpServer;
