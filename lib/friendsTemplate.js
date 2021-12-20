let template = {
    menu: function(
        heading, 
        container, 
        userName, 
        userImage = "default_profile.png"
    ){
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../public/css/menu.css">
            <link rel="stylesheet" href="../public/css/main.css">
            <link rel="stylesheet" href="../public/css/friends.css">
            <title>${heading} : 타임 콤비</title>
        </head>
        <body>
        <input type="checkbox" id="menu">             
        <label for="menu">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div class="background_black"></div>

        <header id="header">
            <div class="logo">
            <img src="../public/images/timecombi_logo.png" alt="타임콤비 로고">
            <h1>타임콤비</h1>
            </div>
            <div class="profile">
            <img src="../public/userImages/${userImage}" alt="${userImage}">
            <div class="name">
                <span class="user_name">${userName}</span>
                <button class="logout"></button>
            </div>
            </div>
            <div class="header_menu">
            <ul>
                <li>
                <a href="#">내 일정</a>
                </li>
                <li>
                <a href="#">일정 계산기</a>
                </li>
                <li>
                <a href="/friends">친구</a>
                </li>
                <li>
                <a href="/account/mypage">마이 페이지</a>
                </li>
            </ul>
            </div>
            <div class="copyright">
            <p>ⓒTimeCombi</p>
            </div>
        </header>
        <section>
        <div class="mobile_header">
        <div class="logo">
            <img src="../public/images/timecombi_logo.png" alt="타임콤비 로고">
            <h1>타임콤비</h1>
        </div>
        </div>
        <div class="content">
            <div class="heading">
                ${heading}
            </div>
            ${container}
        </div>
        </section>
        <script type="text/JavaScript" src="../public/js/app.js"></script>
        <script type="text/JavaScript" src="../public/js/friends.js"></script>
        </body>
        </html>
        `; 
    }, 
    friendsMain: function(groupList, friendsList){
        return `
        <div class="btn">
            <button id="setfriend" onClick="location.href='/friends/sentReq'">친구 관리</button>  
            <button id="fix" onclick="ck();">편집</button>    
      
            <button id="addfriend" style="display: none;" onClick="location.href='/friends/addFriends'">친구 추가</button>                
            <button id="addgroup" style="display: none;" onClick="location.href='/friends/addGroup'">그룹 추가</button>
            <button id="DeleteSel" style="display: none;" onClick="location.href='/friends/delSelected'">선택 삭제</button>
        </div>

        <form method="post"  class="form" action="/friends/delSelected">
            <div class="friend_list">
                <ul class="groups">
                    ${groupList}
                </ul>
                <ul class="friends">
                    ${friendsList}
                </ul>
            </div>
            <button id="DeleteSel" style="display: none;" type="submit">
                선택 삭제
            </button>       
        </form>
        `;
    },
    groupList: function(g_id, g_name){
        return `
        <li>
            <input type="checkbox" name="group" value="${g_id}">
            <img src="../public/images/profile.png" name="group" alt="profile">
            <p>${g_name}</p>
        </li>
        `;
    },
    friendsList: function(f_email, f_name){
        return `
        <li>
            <input type="checkbox" name="friend" value="${f_email}">
            <img src="../public/images/profile.png" alt="profile">
            <p>${f_name}</p>
        </li>
        `;
    }, 
    addFriend: function(friendsList){
        return `
        <div class="box">
        <form method="post"  class="form" action="/friends/findFriends">
            <input type="text" name="email"  id='email' onchange='pname()' placeholder="이메일 검색">        
            <button class="addbtn" type="submit" id="searchbtn" >검색</button>
        </form>

        <form method="post"  class="form" action="/friends/reqFriends">
            <div class="setting_list">
            <ul class="friends" id="findFriends">
                ${friendsList}
            </ul>

            <span class="add"> 
            <button class="addbtn" type="submit" style="cursor:pointer;">
                친구 추가
            </button>
            </span>
        </form>
        </div>
        `;
    }, 
    addGroup: function(friendsList){
        return `
        <form method="post"  class="form" action="/friends/addGroup_process">          
            <div class="groupfile">
            <img src="../public/images/profile.png" alt="프로필 사진">
            <input type="text" name="name"  placeholder="그룹명 작성" >
            <button class="srhbtn" type="submit">
                추가
            </button>
            </div>

            <div class="box">
            <p>그룹에 추가할 친구를 선택하세요.</p>
            <div class="setting_list">
                <ul class="friends">
                ${friendsList}
                </ul>
            </div>
        </form>
        `;
    }, 
    sentReq: function(friendsList){
        //기본 : 보낸 친구요청 화면 표시 
        //오른쪽에 받은 친구요청 버튼 있음, 버튼 onClick="location.href='/friends/receivedReq'")
        //form으로 리스트, 버튼 감싸야함 -> method="post" action="/friends/cancelReq"
        //보낸 친구요청 리스트 부분 -> 예시 대신 ${friendsList} 삽입
        //취소 버튼 -> 위의 form submit (type="submit")
    }, 
    receivedReq: function(friendsList){
        //기본 : 받은 친구요청 화면 표시
        //왼쪽에 보낸 친구요청 버튼 있음, 버튼 onClick="location.href='/friends/sentReq'")
        
        //1.if(승인버튼 1개만)
        //form으로 리스트, 버튼 감싸야함 -> method="post" action="/friends/confirmReq"
        //받은 친구요청 리스트 부분 -> 예시 대신 ${friendsList} 삽입 
        //승인 버튼 -> 위의 form submit (type="submit")

        //2.if(승인, 거절버튼 모두)
        //form으로 리스트, 버튼 감싸야함 -> method="post" action="/friends/req_process"
        //받은 친구요청 리스트 부분 -> 예시 대신 ${friendsList} 삽입 
        //승인 버튼 -> input type="submit" name="process" value="승인"
        //거절 버튼 -> input type="submit" name="process" value="거절"
    }
}

module.exports = template;
