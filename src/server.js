const http = require("http");
const app = require("./app");
const mongoDB = require("./lib/mongoDB/initConnect")
const server = http.createServer(app);
require("dotenv").config();

let PORT = process.env.PORT_SERVER || 3000;

mongoDB.connect()

server.listen(PORT, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})