let cors = require('cors')
const express = require('express');
let bodyParser = require('body-parser')
const routeUser = require('./routers/router')
require("dotenv").config();

let API_VERSION = process.env.API_VERSION || '/api/v1';

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
	next();
});

app.use(cors())

app.use(`${API_VERSION}/users`, routeUser);

module.exports = app;


