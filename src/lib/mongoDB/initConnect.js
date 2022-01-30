var mongoose = require('mongoose');
require("dotenv").config();

const HOST_DB = process.env.HOST_DB;
const PORT_DB = process.env.PORT_DB;
const DB_NAME = process.env.DB_NAME;

const mongoURL = `mongodb://${HOST_DB}:${PORT_DB}/${DB_NAME}`

//Connect to database
function connect() {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));
}

module.exports = {
    connect
}

