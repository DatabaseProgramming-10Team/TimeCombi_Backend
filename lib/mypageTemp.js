module.exports = {
    mypageHTML: function (userInfo) {
        return `
        <section>

            <script>
                function check_pw(){
                    var p1 = document.getElementById('pw').value;
                    var p2 = document.getElementById('pwCheck').value;

                    if(p1.length < 6) {
                        alert('입력한 글자가 6글자 이상이어야 합니다.');
                        p1.focus();
                        return false;
                    }
                        
                    if( p1 != p2 ) {
                        document.getElementById('check').innerHTML="<font color=red>비밀번호가 불일치합니다.</font>"
                        return false;
                    } else{
                        document.getElementById('check').innerHTML="<font color=#65a2ff>비밀번호가 일치합니다.</font>"
                        return true;
                    }
                }
            </script>

            <div class="mobile_header">
            <div class="logo">
                <img src="../images/timecombi_logo.png" alt="타임콤비 로고">
                <h1>타임콤비</h1>
            </div>
            </div>

            <div class="content">

            <div class="heading">
                마이페이지
            </div>
            <div class="container">

                <div class="box">
                    <div class="profile">
                        <img src="../images/profile.png" alt="프로필 사진">
                    </div>

                    <form name="mypageform" method="post" action="/mypageUpdate/${userInfo.email}">
                            <table>
                            <tr>
                                <th class="name">이름</th>  
                                <td><input type="text" value="${userInfo.name}" name="name" class="pwchk"></td>
                            </tr>
                            <tr>
                                <th class="name">이메일</th>
                                <td><input class="pwchk" type="text" name="email" value="${userInfo.email}"></td>
                            </tr>
                            <tr>
                                <th class="name">비밀번호</th>
                                <td><input class="pwchk" type="password" id="pw" name="pw" onchange="check_pw()" value="${userInfo.pwd}"></td>
                            </tr>
                            <tr>
                                <th class="name ">비밀번호 확인</th>
                                <td><input class="pwchk" type="password" id="pwCheck" onchange="check_pw()" value="${userInfo.pwd}"></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th id="check" class="chk">비밀번호가 불일치합니다.</th>
                                </tr>
                                <tr>
                                    <th class="name">연락처</th>
                                    <td> <input class="pwchk" type="text" name="phone" value="${userInfo.phone}"></td>
                                </tr>
                            </table>
                            <br>
                            <div class="btn">
                                <input class="button"  value= "수정하기" type="submit">
                            </div>
                    </form>
                </div>
            </div>
        </section>
    </body>
    </html>
    `;
    }
}
