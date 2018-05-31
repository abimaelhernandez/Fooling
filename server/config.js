const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

module.exports = app;

 
