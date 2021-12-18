var express = require("express");
var router = express.Router();
var template = require("../lib/template");
var startTemplate = require("../lib/startTemplate"); 
var mysql = require("mysql");
var qs = require('querystring'); 
var url = require("url");

const db = mysql.createConnection({
    host: 'localhost', 
    user : 'djeun', 
    password: 'password', 
    database: 'timecombiDB'
});

db.connect();


router.get('/account/join', function(request, response){
    let html = startTemplate.joinHTML(); 
    response.send(html); 
});

router.post('/account/join_process', function(request, response){
    let post = request.body; 
    let email = post.email; 
    let name = post.name;
    let pwd = post.pw; 
    let phone = post.phone;
    
    db.query(`INSERT INTO userTBL VALUES ('${email}', '${name}', '${pwd}', '${phone}')`, function(error, newUser){
        if(error){
            console.log(error); 
            throw error; 
        }
        let alert = `
        <script>
            alert('회원가입 성공')
            location.href="/"
        </script>
        `;
        response.send(alert); 
    }); 
});

router.post('/account/login_process', function(request, response){
    let post = request.body; 
    let email = post.email;
    let pwd = post.pw; 

    db.query(`SELECT * FROM userTBL WHERE email = '${email}' AND pwd = '${pwd}''`, function(error, checkUser){
        if(error){
            console.log(error); 
            let alert = `
            <script>
                alert('로그인 실패')
                location.href="/"
            </script>
            `; 
            response.send(alert); 
            throw error;
        }
        if(checkUser[0] != undefined){
            response.redirect(`/`);
        }
    }); 
});

module.exports = router;
