const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, "localhost", () => {    //La función server.listen espera una dirección de IP válida o un nombre de host, no un mensaje de prueba.
  console.log("Server running at http://localhost:3000/");
});
