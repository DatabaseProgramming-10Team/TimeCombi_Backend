let template = {
    menu: function (
      heading,
      container,
      userName,
      userImage = "default_profile.png"
    ) {
      return `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/css/reset.css">
    <link rel="stylesheet" href="../public/css/menu.css">
    <link rel="stylesheet" href="../public/css/main.css">
    <link rel="stylesheet" href="../public/css/mypage.css">
    <link rel="stylesheet" href="../public/css/calendar.css">
    <link rel="stylesheet" href="../public/css/calculator.css">
    <link rel="stylesheet" href="../public/css/friends.css">
    <link rel="stylesheet" href="../public/css/mypage.css">
    <title>${heading} : 타임 콤비</title>
  </head>
  <body>
    <input type="checkbox" id="menu" class="main_menu">
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
          <button class="logout" onclick="location.href='/account/logout'"></button>
        </div>
      </div>
      <div class="header_menu">
        <ul>
          <li>
            <a href="/date">내 일정</a>
          </li>
          <li>
            <a href="/date_calculator">일정 계산기</a>
          </li>
          <li>
            <a href="/friends">친구</a>
          </li>
          <li>
            <a href="/account/mypage/${userName}">마이 페이지</a>
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
        <div class="container">
          ${container}
        </div>
      </div>
    </section>
    <script src="../public/js/main.js"></script>
    <script type="text/JavaScript" src="../public/js/app.js"></script>

    <script>
  // Get the modal
  var modal = document.getElementById('myModal');
  var modal2 = document.getElementById('groupModal');
  var modal3 = document.getElementById('setModal');

// 친구추가버튼
var btn = document.getElementById('addfriend');

//그룹 추가 버튼
var addgroup = document.getElementById('addgroup');

//선택 삭제 버튼
var DeleteSel = document.getElementById('DeleteSel');

//친구 관리 버튼
var setfriend = document.getElementById('setfriend');

//친구 관리 메뉴1,2
var send = document.getElementById("send");
var send2 = document.getElementById("send2");
var sendbtn = document.getElementById("sendbtn"); //친구 신청 취소, 신청 수락 버튼

//친구 추가- 검색 버튼
var searchbtn = document.getElementById("searchbtn")

//보낸 친구 클릭
send.onclick = function() {
  send.style.backgroundColor="white";     
  send2.style.backgroundColor="#aecefd";
  sendbtn.value = "취소";
}

//받은 친구 클릭
send2.onclick = function() {
    send2.style.backgroundColor="white";
    send.style.backgroundColor="#aecefd";
    sendbtn.value = "승인";
}

sendbtn.onclick = function(){
    if(sendbtn.value == "승인"){
        ${confirmfReq}
    }else if(sendbtn.value == "취소"){
        ${cancelfReq}
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]; 
// var search = document.getElementsByClassName("add")[0]; 
var span2 = document.getElementsByClassName("add")[0]; 

var save = document.getElementsByClassName("addd")[0]; 
var groupclose = document.getElementsByClassName("close")[1]; 

var setclose = document.getElementsByClassName("close")[2]; 


 //편집 버튼 눌렀을 때
  function ck(){
    document.getElementById('setfriend').style.display="none";
    document.getElementById('fix').style.display="none";
    document.getElementById('addfriend').style.display="";
    document.getElementById('addgroup').style.display="";
    document.getElementById('DeleteSel').style.display="";

    var list = document.getElementById("listBody"); // listBody에 접근
    var chkbox=document.querySelectorAll("#listBody .btn-chk"); // listBody 그룹 하위의 체크박스 모두 선택

    for (var i in chkbox){
      chkbox[i].style.display="inline-block";
  
    }
  }                              

      //친구 추가 버튼
      btn.onclick = function() {
          modal.style.display = "block";
          ${this.sendfReq}
      }

      //그룹 추가 버튼
      addgroup.onclick = function() {
          modal2.style.display = "block";
      }

      // 친구 추가창 닫기
      span.onclick = function() {
          modal.style.display = "none";
      }
      //친구 추가창 친구 추가 버튼
      span2.onclick = function() {
          modal.style.display = "none";
      }


      //그룹추가 창 닫기
      groupclose.onclick = function() {
          modal2.style.display = "none";
      }

      //그룹 추가창 저장 버튼
      save.onclick = function() {
          modal2.style.display = "none";
      }

      //친구 추가-검색 버튼 눌렀을 때
      searchbtn.onclick = function() {
        
      }

       //친구 관리 버튼(팝업창 열기)
      setfriend.onclick = function() {
          modal3.style.display = "block";
      }

       //친구관리 창 닫기
       setclose.onclick = function() {
          modal3.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
</script>


  </body>
  </html>
      `;
    },
    date: function (datelist = "") {
      return `
      <div class="calendar">
      <div class="title">
        <button class="cal_Lbtn" onclick="prevMonth()">&lt;</button>
        <div class="ym">
          <div class="year"></div>
          <div class="month"></div>
          <div class="monthtxt"></div>
        </div>
        <button class="cal_Rbtn" onclick="nextMonth()">&gt;</button>
      </div>
      <div class="main">
        <div class="days">
          <div class="day">S</div>
          <div class="day">M</div>
          <div class="day">T</div>
          <div class="day">W</div>
          <div class="day">T</div>
          <div class="day">F</div>
          <div class="day">S</div>
        </div>
        <div class="dates">
          
        </div>
      </div>
    </div>
    <div class="diary">
      <span class="today"></span>
      <button class="plus_btn"></button>
      <div class="schedules">
        ${datelist}
      </div>
    </div>
  
    <div class="popup_add_date">
      <h4>일정</h4>
      <form class="add_date" action="/date_process" method="post">
        <fieldset class="name">
          <div class="color_box">
            <input type="radio" id="color1" name="color" value="color1" checked>
            <label for="color1" class="color1" ></label>
            <input type="radio" id="color2" name="color" value="color2">
            <label for="color2" class="color2" ></label>
            <input type="radio" id="color3" name="color" value="color3">
            <label for="color3" class="color3" ></label>
            <input type="radio" id="color4" name="color" value="color4">
            <label for="color4" class="color4" ></label>
          </div>
          <input type="text" name="" id="" placeholder="일정 이름 입력">
        </fieldset>
        <fieldset class="diary_date">
          <input type="date" name="start_date" id="start_date"> ~
          <input type="date" name="last_date" id="last_date">
        </fieldset>
        <fieldset class="time">
          <input type="checkbox" id="allday" name="종일" class="allday">
          <label for="allday">종일</label>
          <input type="time" name="start_time" id="start_time"> ~
          <input type="time" name="last_time" id="last_time">
        </fieldset>
        <fieldset class="day">
          <input type="checkbox" id="mon" name="월">
          <label for="mon">월</label>
          <input type="checkbox" id="tue" name="화">
          <label for="tue">화</label>
          <input type="checkbox" id="wed" name="수">
          <label for="wed">수</label>
          <input type="checkbox" id="thu" name="목">
          <label for="thu">목</label>
          <input type="checkbox" id="fri" name="금">
          <label for="fri">금</label>
          <input type="checkbox" id="sat" name="토">
          <label for="sat">토</label>
          <input type="checkbox" id="sun" name="일">
          <label for="sun">일</label>
        </fieldset>
        <fieldset class="add_date_btn">
          <button type="submit">확인</button>
          <button type="button" class="cancel">취소</button>
        </fieldset>
      </form>
      
    </div>
    <script src="../public/js/calendar.js"></script>
      `;
    },
    datelist: function (dates) {
      let list = '<ul class="schedules_list">';
      for (let i = 0; i < dates.length; i++) {
        list += `
          <li>
            <div class="schedule">
              <div class="schedule_color ${dates[i].color}"></div>
              <p class="schedule_time">${dates[i].time}</p>
              <p class="schedule_info">${dates[i].dateName}</p>
              <a href="/update?id=${dates[i].id}" class="schedule_edit"></a>
              <form action="delete_process" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
                 <input type="hidden" name="id" value="${dates[i].id}">
                 <input type="submit" value="" class="schedule_delete">
               </form>
            </div>
            <div class="schedule_underline"></div>
          </li>
        `;
      }
      return list + "</ul>";
    },
    mypage: function(userInfo){
        return `
        <div class="box">
            <div class="profile">
                <img src="../public/images/profile.png" alt="프로필 사진">
            </div>
            <form name="mypageform" method="post" action="/account/mypageUpdate">
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
        `; 
    }, 
    friends: function(friendList, groupList){
      return `
      <div class="btn">
                    <button id="setfriend" >친구 관리</button>  
                    <button id="fix" onclick="ck();">편집</button>    
            
                    <button id="addfriend" style="display: none;">친구 추가</button>                
                    <button id="addgroup" style="display: none;">그룹 추가</button>
                    <button id="DeleteSel" style="display: none;">선택 삭제</button>
                </div>



                <!--친구 추가 팝업-->
                <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>     
                    <button type="submit" id="searchbtn" name="searchbtn" class="srhbtn2">검색</button>
                    <div class="search">
                        <input type="text" name="email"  placeholder="이메일 검색">            
                        <div class="setting_list">
                            ${findfReq}
                        </div>
                        
                    <span class="add"> 
                        <div class="addbtn" onclick="alert('친구 추가가 정상적으로 완료되었습니다.');" style="cursor:pointer;">
                        친구 추가
                        </div>
                    </span>
                    </div> 
                </div>
                </div>


                <!--그룹 추가 팝업-->
                <div id="groupModal" class="group-modal">
                <div class="group-content">
                    <span class="close">&times;</span>     
                    <div class="search2">
                    <span class="addd"> 
                        <div class="srhbtn" onclick="alert('그룹 추가가 정상적으로 완료되었습니다.');">
                        추가
                        </div>
                    </span>
                    
                    <div class="groupfile">
                        <img src="../public/images/profile.png" alt="프로필 사진">
                        <input type="text" name="name"  placeholder="그룹명 작성" >
                    </div>
                        <div class="box box1">
                            <p>그룹에 추가할 친구를 선택하세요.</p>
                            <div class="setting_list">
                            <ul class="friends">
                                ${friendList}
                            </ul>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
            

                <!--친구 관리 팝업-->
                <div id="setModal" class="setmodal">
                <!-- Modal content -->
                <div class="setmodal-content">
                    <span class="close">&times;</span>     
                    <div class ="set2">
                        <button  id="send">보낸 친구</button>
                    </div>
                    <div class="set" >
                    <button  id="send2">받은 친구</button>
                    </div>
                        <div class="setting_list">
                        ${allfReq}
                        </div>
                    <span class="addd"> 
                        <input class="sendbtn" id="sendbtn" value= "취소" type="button" >
                        </span>
                    </div> 
                </div>


        <!--친구 목록-->
            <div class="friend_list">
            <ul class="groups">
            ${groupList}
            </ul>
            <ul class="friends">
            ${friendList}
            </ul>
            </div>                
                </div>
                </div>
            </div>
      </div>
      `;

    }, 
    friendList: function(friendEmail){
      return `
        <li>
            <input type="checkbox" name="friend" value="${friendEmail}">
            <img src="../images/profile.png" alt="profile">
            <p>${friendEmail}</p>
        </li>
        `; 
    }, 
    groupList: function(groupId){
      return `
        <li>
            <input type="checkbox">
            <img src="../images/profile.png" name="group" alt="profile">
            <p>${groupId}</p>
        </li>
        `; 
    }, 
    findfReq: function (userprofile, username) {  //친구 요청(친구 검색 버튼)
        return `
        <ul class="friends" id="findfReq">';
        <li>
            <input type="checkbox" name="friend">
            <img src="../images/profile.png" alt="profile">
            <p>${username}</p>
        </li>
    </ul>`;
    },
    sendfReq: function (email) {  //친구 요청(친구 추가 버튼)
       // 친구 신청 목록으로 DB 추가
    },
    allfReq: function (userprofile, username) {  //모든 요청 조회
        return `
        <ul class="friends" id="allfReq">';
        <li>
            <input type="checkbox" name="friend">
            <img src="../images/profile.png" alt="profile">
            <p>${username}</p>
        </li>
    </ul>`;
    },
    confirmfReq:function(email){  //친구요청 승인(받은 친구)
       //승인 버튼 누를 시, 해당 친구는 친구목록에 추가됨
    },
    cancelfReq:function(email){  //친구요청 취소(보낸 친구)
        //취소 버튼 누를시, 친구 요청 목록에서 제거됨.
    }
  };
  
  module.exports = template;
