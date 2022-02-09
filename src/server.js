const http = require("http");
const app = require("./app");
const mongoDB = require("./lib/mongoDB/initConnect")
const server = http.createServer(app);
require("dotenv").config();

let PORT = process.env.PORT_SERVER || 3000;

let HOST = process.env.HOST_SERVER || '127.0.0.1';

mongoDB.connect()

server.listen(PORT, HOST, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})