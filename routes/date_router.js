const express = require("express");
const router = express.Router();
const template = require("../lib/template");
const mysql = require('mysql'); 
const qs = require('querystring'); 

// var url = require("url");

const db = mysql.createConnection({
  host: 'localhost', 
  user : 'djeun', 
  password: 'password', 
  database: 'timecombiDB'
});

db.connect();

router.get("/", function (request, response) {
  db.query(`SELECT * FROM userTBL WHERE email = '${request.session.email}'`, function(error, user){
    let name = user[0].name; 
    let html = template.menu(
      "내 일정", 
      template.date(
        template.datelist([
          {color: "color1", dateName: "저녁약속", time: "12:00~13:00"}, 
        ])
      ), 
      name); 
      response.send(html); 
  }); 
});

module.exports = router;
