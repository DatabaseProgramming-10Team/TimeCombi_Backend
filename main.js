var http = require('http'); 
var fs = require('fs'); 
var url = require('url'); 
var qs = require('querystring'); 
var mainTemp = require('./lib/mainTemp.js'); 
var mypageTemp = require('./lib/mypageTemp.js'); 
var loginTemp= require('./lib/loginTemp.js');
var joinTemp= require('./lib/joinTemp.js');
var path = require('path'); 
var sanitizeHtml = require('sanitize-html'); 
var mysql = require('mysql'); 
var express = require('express');
var app = express();

const db = mysql.createConnection({
    host: 'localhost', 
    user : 'djeun', 
    password: 'password', 
    database: 'timecombiDB'
});

db.connect();

app.get('/', function(request, response){
    fs.readdir('./data', function(error, filelist){
        let menu = mainTemp.menu(undefined, undefined); 
        let html = mainTemp.mainHTML(menu); 
        response.send(html); 
    });
});

app.get('/main/:email', function(request, response){
    let email = path.parse(request.params.email).base;
    db.query(`SELECT * FROM userTBL WHERE email = '${email}'`, function(error, user){
        if(error){
            console.log(error); 
            throw error;
        }
        //let name = username[0].name;
        let menu = mainTemp.menu(user[0].email, user[0].name); 
        let html = mainTemp.mainHTML(menu); 

        response.send(html); 
    });
});

app.get('/mypage/:email', function(request, response){
    let email = path.parse(request.params.email).base;

    db.query(`SELECT * FROM userTBL WHERE email = '${email}'`, function(error, user){
        if(error){
            console.log(error); 
            throw error;
        }
        let menu = mainTemp.menu(email, user[0].name); 
        let html = mainTemp.mainHTML(menu) + mypageTemp.mypageHTML(user[0]); 

        response.send(html); 

    });
});

app.post('/mypageUpdate/:email', function(request, response){
    var body = ''; 
    request.on('data', function(data){
        body = body + data;
    }); 
    request.on('end', function(){
        let post = qs.parse(body); 
        var name = post.name;
        var email = post.email;
        var pwd = post.pw;
        var phone = post.phone;

        db.query(`UPDATE userTBL 
            SET email = '${email}', name = '${name}', pwd = '${pwd}', phone = '${phone}'
            WHERE email = '${email}'
        `, function(error, ){
            if(error){
                console.log(error);
                let alert = `
                <script>
                    alert('회원정보 수정 실패')
                    location.href="/mypage/${email}"
                </script>
                `; 
                response.send(alert); 
                throw error;
            }
            let alert = `
            <script>
                alert('회원정보 수정 완료')
                location.href="/mypage/${email}"
            </script>
            `; 
            response.send(alert);
        });
    });
});


app.get('/login', function(request, response){
    let html = loginTemp.loginHTML(); 
    response.send(html); 
});

app.post('/login_process', function(request, response){
    var body = ''; 
    request.on('data', function(data){
        body = body + data;
    }); 
    request.on('end', function(){
        let post = qs.parse(body); 
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
                /*
                let alert = `
                <script>
                    alert('로그인 성공')
                    location.href="/main/${email}"
                </script>
                `;
                */ 
                response.redirect(`/main/${email}`);
            }
        }); 
    });
});

app.get('/join', function(request, response){
    let html = joinTemp.joinHTML(); 
    response.send(html); 
});

app.post('/join_process', function(request, response){
    var body = ''; 
    request.on('data', function(data){
        body = body + data;
    }); 
    request.on('end', function(){
        let post = qs.parse(body); 
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
                location.href="/login"
            </script>
            `;
            response.send(alert); 
        }); 
    });
});

app.listen(80);
