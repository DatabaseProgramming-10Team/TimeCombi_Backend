module.exports = {
    friendHTML: function(friendList, groupList){
        return `
        <section>

            <div class="mobile_header">
            <div class="logo">
                <img src="../images/timecombi_logo.png" alt="타임콤비 로고">
                <h1>타임콤비</h1>
            </div>
            </div>

            <div class="content">
            <div class="heading">
                친구 목록
            </div>

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
                    <!--<div class="srhbtn2">
                    <button type="submit" id="searchbtn" name="searchbtn" style="display:none"></button>
                    검색           
                    </div> -->
                    
                    <div class="search">
                        <input type="text" name="email"  placeholder="이메일 검색">
                    
                    
                        <div class="setting_list">
                            <ul class="friends" id="zip_codeList">
                            <!-- <li>
                                <input type="checkbox" name="friend" value="홍길동">
                                <img src="../images/profile.png" alt="profile">
                                <p>홍길동</p>
                            </li>
                            -->
                            </ul>
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
                        <img src="../images/profile.png" alt="프로필 사진">
                        <input type="text" name="name"  placeholder="그룹명 작성" >
                    </div>

                        <div class="box box1">
                            <p>그룹에 추가할 친구를 선택하세요.</p>
                            <div class="setting_list">
                            <ul class="friends">
                                <li>
                                <input type="checkbox" name="friend" value="홍길동">
                                <img src="../images/profile.png" alt="profile">
                                <p>홍길동</p>
                                </li>
                                <li>
                                <input type="checkbox" name="friend" value="가나다">
                                <img src="../images/profile.png" alt="profile">
                                <p>가나다</p>
                                </li>
                                <li>
                                <input type="checkbox" name="friend" value="라마바">
                                <img src="../images/profile.png" alt="profile">
                                <p>라마바</p>
                                </li>
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
                        <ul class="friends">
                            <li>
                            <input type="checkbox" name="friend" value="홍길동">
                            <img src="../images/profile.png" alt="profile">
                            <p>홍길동</p>
                            </li>
                            <li>
                            <input type="checkbox" name="friend" value="가나다">
                            <img src="../images/profile.png" alt="profile">
                            <p>가나다</p>
                            </li>
                            <li>
                            <input type="checkbox" name="friend" value="라마바">
                            <img src="../images/profile.png" alt="profile">
                            <p>라마바</p>
                            </li>
                        </ul>
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

        </section>
        <script type="text/JavaScript" src="../js/app.js"></script>
        </body>

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
                e.preventDefault();

                $.ajax({
                type: "POST",
                url: "/",
                data: $('#addform').serialize(),
                dataType : "json",

                success: function (response) {
                    $("#zip_codeList").empty();
                        var html = "";
                        if(result.errorCode != null && result.errorCode != ""){
                            html += "<li>";
                            html += "</li>";
                        }
                        else{
                            // 검색결과를 list에 담는다.
                            var list = result.list;
                            
                            for(var i = 0; i < list.length; i++){
                                // 친구 검색한 결과(친구이름)
                                var fname = list[i].fname;

                                // 친구 검색한 결과(친구사진)
                                var fprofile = list[i].fname;

                                html += "<li>";
                                html += '    <input type="checkbox" name="friend" value="'+list[i].fname+'"">';
                                html += '    <img src="'+list[i].fprofile+'" alt="profile">';
                                html += "    <p>";
                                html +=         list[i].fname;
                                html += "    </p>";
                                html += "</li>";
                            }
                        }
                        // 완성된 html을 zip_codeList밑에 append
                        $("#zip_codeList").append(html);
                },
                error: function(error) {
                    console.log(error)
                }
                });   
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

        </html>
        `;
    },

    friendListHTML: function(friendName){
        return `
        <li>
            <input type="checkbox" name="friend" value="${friendName}">
            <img src="../images/profile.png" alt="profile">
            <p>${friendName}</p>
        </li>
        `; 
    }, 

    groupListHTML: function(groupName){
        return `
        <li>
            <input type="checkbox">
            <img src="../images/profile.png" name="group" alt="profile">
            <p>${groupName}</p>
        </li>
        `; 
    }   
};


