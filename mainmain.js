const express = require("express");
const app = express();
const mysql = require('mysql');
const http = require('http');
const date_router = require("./routes/date_router");
const date_calculator_router = require("./routes/date_calculator_router");
const port = 80;
const qs = require('querystring');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(__dirname + "/public"));

app.use("/date", date_router);
app.use("/date_calculator", date_calculator_router);

var db = mysql.createConnection({
  host: 'localhost',
  user: 'minyoung',
  password: 'Rlaalsdudqkqh@2',
  database: 'timecombi'
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`start ${port}!`);
});
