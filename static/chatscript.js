function setCookie(name,value,hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var userName = "User";
var updateInterval = window.setInterval(function(){
    getMessages();
}, 2000);

function sendMessage(msg = null){
    if (msg == null){
        var data = {
            "message": document.getElementById("chatInputBox").value,
            "user": userName
        };
    }
    else{
        var data = {
            "message": msg,
            "user": ""
        };
    }
    $.ajax({
        type: "POST",
        url: "/getchat",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            console.log(data);
            chatText += "<br>" + data.user + ": " + data.message;
            chat.innerHTML = chatText;
        }
    });
    getMessages();
    document.getElementById("chatInputBox").value = "";
}

function getMessages(){
    chatText = "";
    $.ajax({
        type: "GET",
        url: "/getchat",
        dataType: "json",
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                chatText += "<br>" + data[i];
            }
            chat.innerHTML = chatText;
        }
    });
}

var randomNames = [
"Boney-M",
"Skele-tony",
"Napoleon Bone-apart",
"Bones McCoy",
"Jon Bone Jovi",
"Indiana Bones",
"Scary Potter",
"Doug Upp",
"Captain Jack Marrow",
"Thomas Deadison",
"Clarence Marrow",
"Boney-Wan Kenobi",
"Jerry Spinefeld",
"Count Scapula",
"Bona Lisa",
"Scary Poppins",
"Grace Skelly",
"Cat A. Comb",
"Scarilyn Monroe",
"Sans",
"Papyrus",
"Starvin’ Marvin",
"Boner",
"Skullbert Einstein",
"Bone-a-fide Brad Pitt",
"Rattle Gere",
"Demi Spine-more",
"Pelvis Presley",
"Skeletalina Jolie",
"Audrey Hipbone",
"Bony Depp",
"Meryl Creep",
"Shake-SPINE-a Twain",
"Skullvin Harris",
"Marrowlyn Manson",
"Ribert Downey Jr.",
"Spookira",
"Bonesy Rotten",
"Boneyoncé",
"Spine-derella",
"Bone Jangles",
"Femur Fatale",
"Calci-Yummi",
"Hipbone Hurley",
"Tibia Swinton",
"Vertebradley Cooper",
"Skeleton John",
"Bone-a-rd DiCaprio"
]

function setRandom(){
    var random = Math.floor(Math.random() * randomNames.length);
    document.getElementById("messageInput").value = randomNames[random];
}

function setUsername(){
    userName = document.getElementById("messageInput").value;
    if (getCookie("username") != null){
        sendMessage(getCookie("username") + " calcified into " + userName);
    }
    setCookie("username", userName);
}

function startUp(){
    var elem = document.getElementById("chatInputBox");
    elem.onkeyup = function(e){
        if(e.keyCode == 13){
        sendMessage();
        }
    }
    if (getCookie("username") != null){
        userName = getCookie("username");
        return;
    }
    else{
        showMessageBox(['Username'], true, setUsername, ['Set'], true);
    }
}

function showMessageBox(message, buttons = false, func = null, buttonsText = null, input = false, frame = false){
    var box = document.getElementsByClassName("messageBox")[0];
    if (input){
        inputdiv = box.children[1];
        inputdiv.value = "";
        inputdiv.style.display = "flex";
    }
    else {
        inputdiv = box.children[1];
        inputdiv.style.display = "none";
    }
    if (buttons){
        buttondivs = box.children[3];
        buttondivs.style.display = "flex";
        if (buttonsText != null){


            buttondivs.children[0].innerHTML = buttonsText[0];
            if (buttonsText.length > 1){
                buttondivs.children[1].style = "display: flex";
                buttondivs.children[1].innerHTML = buttonsText[1];
            }
            else{
                buttondivs.children[1].style = "display: none";
                buttondivs.children[1].innerHTML = "";
            }
        }
        buttondivs.children[0].onclick = function(){
            hideElement(box);
            if (func != null){
                func();
            }
        }
        buttondivs.children[1].onclick = function(){
            setRandom();
        }
    }
    else {
        buttondivs = box.children[3];
        buttondivs.style.display = "none";
        setTimeout(function(){
            box.style.display = "none";
        }, 3000);
    }
    textdiv = box.children[0];
    if (frame){
        frameBox = box.children[2];
        frameBox.style.display = "flex";
        frameBox.src = "/" + frame;
        for (var i = 0; i < textdiv.children.length; i++){
            textdiv.children[i].innerHTML = "";
        }
    }
    else {
        frameBox = box.children[2];
        frameBox.style.display = "none";
        for (var i = 0; i < message.length; i++){
            textdiv.children[i].innerHTML = message[i];
        }

    }
    box.style.display = "flex";
}
function hideElement(element){
    element.style.display = "none";
}
