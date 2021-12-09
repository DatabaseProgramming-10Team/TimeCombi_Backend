module.exports = {
    mainHTML: function (menu) {
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../css/menu.css">
        <link rel="stylesheet" href="../css/main.css">
        <link rel="stylesheet" href="../css/calendar.css">
        <link rel="stylesheet" href="../css/calculator.css">
        <title>내 일정 : 타임 콤비</title>
        </head>
        <body>
        ${menu}
        <section>
            <div class="mobile_header">
            <div class="logo">
                <img src="../images/timecombi_logo.png" alt="타임콤비 로고">
                <h1>타임콤비</h1>
            </div>
            </div>
            <div class="content">
            <div class="heading">
                내 일정
            </div>
            <div class="container">
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
                    <div class="dates"></div>
                </div>
                </div>
                <div class="diary">
                <span class="today"></span>
                <button class="plus_btn"></button>
                <div class="schedules">
                    <ul class="schedules_list">
                    <li>
                        <div class="schedule">
                        <div class="schedule_color"></div>
                        <p class="schedule_time">19:00~21:00</p>
                        <p class="schedule_info">저녁 약속</p>
                        <div class="schedule_edit"></div>
                        <div class="schedule_delete"></div>
                        </div>
                        <div class="schedule_underline"></div>
                    </li>
                    </ul>
                </div>
            
                </div>
            
                <div class="popup_add_date">
                <h4>일정</h4>
                <form class="add_date" action="" method="post">
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
                <script src="../js/calendar.js"></script>
            </div>
            </div>
        </section>
        <script src="../js/main.js"></script>
        </body>
        </html>
        `;
    },
    menu: function(email, name){
        let menu = `
        <input type="checkbox" id="menu" class="main_menu">
        <label for="menu">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div class="background_black"></div>

        <header id="header">
            <div class="logo">
            <img src="../images/timecombi_logo.png" alt="타임콤비 로고">
            <h1>타임콤비</h1>
            </div>
            <div class="profile">
            <img src="../images/profile.png" alt="프로필 사진">
            <div class="name">
            `

            let i = 0; 
            if(email == undefined){
                menu = menu + `<a href="/login">로그인</a>`;   //ahref 경로변경 

            }else{
                menu = menu + `<span class="user_name">${name}</span>`;
            }

            menu = menu + 
            `      
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
                <a href="/friend/${email}">친구</a>                       //ahref 경로수정
                </li>
                <li>
                <a href="/mypage/${email}">마이 페이지</a>           //ahref 경로수정 
                </li>
            </ul>
            </div>
            <div class="copyright">
            <p>ⓒTimeCombi</p>
            </div>
        </header>
        `; 
        return menu;
    }
}       
