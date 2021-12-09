module.exports = {
    loginHTML: function(){
        return `
        <!DOCTYPE html>
        <html lang="kor">
        <head>
            <title>타임콤비</title>
            <link rel="stylesheet" href="../css/login.css">
        </head>
        <body>
                <form method="post"  class="form" action="/login_process">         //action추가 
                    <input type="text" class="email" name="email" placeholder="이메일"><br><br>
                    <input type="password" class="pw" name="pw" placeholder="비밀번호"><br><br><br>   //class="email"에서 "pw"로 변경 
                    <div class="btn">
                        <button class="button" type="submit"><strong>로그인</strong></button>                //로그인속성변경 
                    </div>
                </form>
                <a href="/join">회원가입</a>          <!--ahref 경로변경, type:submit 삭제 ->
        </body>
        </html>
        `;
    }
}
