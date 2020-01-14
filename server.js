const http = require("http");
const app = require("./app"); //szuka pliku na dysku, inicjalizacja app

const port = process.env.port || 3000;

const server = http.createServer(app);

server.listen(port);