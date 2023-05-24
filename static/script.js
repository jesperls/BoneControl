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

function setSkeletonKey(){
    var key = document.getElementById("messageInput").value;
    setCookie("skeletonKey", key);
    location.reload();
}

function sendPost(url){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send();
}

function upStatus(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/status", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var status = xhr.responseText;
            if (status == "Computer is on"){
                document.getElementById("status").innerHTML = status;
                document.getElementById("status").style.color = "#1eff00";
            } else {
                document.getElementById("status").innerHTML = status;
                document.getElementById("status").style.color = "red";
            }
        }
    }
}

var magic8BallResonses = [
    // Positive responses
    "You've got a spine-tingling yes.",
    "It's a rib-tickling certainty.",
    "Bone-afide affirmative.",
    "Skeletons agree, it's a yes.",
    "No bones about it, yes.",
    "A marrow-thumping yes.",
    "As certain as bones rattle.",
    "Skull says yes, no doubt.",
    "Your future's looking bone-dry positive.",
    "The bones have aligned for a yes.",
    "A humerus response: yes!",
    "You've got the skeletal key to success.",
    "The answer is in the bones: yes.",
    "It's a jaw-dropping yes.",
    "A spine-shivering yes.",
    "Bone up on your success, it's a yes.",
    "Skeletons concur, affirmative.",
    "As solid as a skeleton, yes.",
    "No bone of contention, it's a yes.",
    "The marrow of truth says yes.",
    "As sure as bones support us.",
    "It's a bone-rattling yes.",
    "The skeletal stars align for a yes.",
    "Yes, just don't become boneheaded.",
    "A humerus twist: yes!",
    "Skeletal certainty, it's a yes.",
    "Bones whisper the answer: yes.",
    "A skull-nodding affirmative.",
  
    // Negative responses
    "A spine-chilling no.",
    "The bones say no.",
    "Skeletons cringe, it's a no.",
    "A marrow-draining negative.",
    "It's a bone-cold no.",
    "As certain as bones break.",
    "The bones are crossed, it's a no.",
    "Skull's shaking, answer's no.",
    "It's a bony no.",
    "A humerus response: no!",
    "Your future's looking bone-bare negative.",
    "Beware the skeletal no.",
    "The answer is in the bones: no.",
    "It's a jaw-dropping no.",
    "The bones have a bone to pick, it's a no.",
    "A skeletal frown, it's a no.",
    "As brittle as a broken bone, no.",
    "The marrow of truth says no.",
    "Skeletons shake their heads, no.",
    "As sure as bones can crack.",
    "It's a bone-jarring no.",
    "Skulls frown upon this, no.",
    "The skeletal stars misalign, it's a no.",
    "No, don't let it make you bone-weary.",
    "A humerus twist: no!",
    "Skeletal certainty, it's a no.",
    "Bones whisper the answer: no.",
    "A skull-shaking negative.",
  
    // Uncertain responses
    "The bones are rattling, try again.",
    "As uncertain as a spineless skeleton.",
    "The skeletal jury is still out.",
    "Bones can't decide.",
    "I'm just a skull, ask someone with a brain.",
    "A humerus response: maybe!",
    "The bones are jumbled, try again.",
    "It's a bone-chilling maybe.",
    "Spine says yes, skull says no.",
    "Your future's a skeletal blur.",
    "A skeletal stalemate, ask again.",
    "The bones are silent.",
    "It's a rib-tickling toss-up.",
    "Uncertain as a boneless chicken.",
    "The bones are creaking, try again.",
    "As vague as a boneless wonder.",
    "The skeletal balance is uncertain.",
    "Bones waver in their decision.",
    "A skull's shrug, ask again.",
    "A humerus twist: maybe!",
    "The bones murmur uncertainty.",
    "It's a bone-tingling uncertainty.",
    "Bones sway in indecision.",
    "Your future's skeletal uncertainty.",
    "A bony conundrum, ask again.",
    "The bones hesitate.",
    "It's a rib-tickling enigma.",
    "As uncertain as a ghostly apparition.",
];

var skeletonJokes = [
"Why did the skeleton go to the party alone? He had no-body to dance with!",
"What do you call a pile of skeletons? A boneyard!",
"Why did the skeleton cross the road? To get to the body shop!",
"What did the skeleton say to the bartender? \"I\'ll have a brew, you hold the body!\"",
"How does a skeleton order a drink? \"Bone-appetit!\"",
"What's a skeleton's favorite instrument? The trom-bone!",
"What do you call a skeleton who won't stop talking? A chatter-bone!",
"Why did the skeleton go to the beach? To get some sun-bone!",
"What did the skeleton say when he was asked to explain his job? \"I\’m the back-bone of the company\"",
"Why did the skeleton go to the gym? To work on his bone-density!",
"What do you call a skeleton who's always late? A tardy-bone!",
"Why did the skeleton go to the doctor? He had a bone to pick!",
"What do you call a skeleton who's always telling jokes? A rib-tickler!",
"What's a skeleton's favorite type of dance? The skull-duggery!",
"How did the skeleton know it was going to rain on Halloween? He could feel it in his bones!",
"Why are skeletons so calm? Because nothing gets under their skin.",
"Why can’t skeletons play church music? Because they have no organs.",
"How do French skeletons say hello? \"Bone-jour!\"",
"Why did the skeleton go to the dance? He had a bone to pick with his date!",
"Who won the skeleton beauty contest? No body.",
"What did one skeleton say to the other skeleton? \"You’re dead to me.\"",
"Why did the skeleton go to jail? Because he was bad to the bone.",
"What do you call a skeleton who’s always late? A tardy-bone.",
"What did the skeleton say to his girlfriend? \"Will you marrow me?\"",
"Why do skeletons hate the cold? It sends chills up their spine.",
"What type of candy sent the skeleton to the hospital? Jawbreakers.",
"Why did the skeleton go to the party alone? He had no-body to dance with!",
"What do you call a pile of skeletons? A boneyard!",
"Why did the skeleton cross the road? To get to the body shop!",
"What did the skeleton say to the bartender? \"I\'ll have a brew, you hold the body!\"",
"How does a skeleton order a drink? \"Bone-appetit!\"",
"What's a skeleton's favorite instrument? The trom-bone!",
"What do you call a skeleton who won't stop talking? A chatter-bone!",
"Why did the skeleton go to the beach? To get some sun-bone!",
"What did the skeleton say when he was asked to explain his job? \"I\’m the back-bone of the company\"",
"Why did the skeleton go to the gym? To work on his bone-density!",
"What do you call a skeleton who's always late? A tardy-bone!",
"Why did the skeleton go to the doctor? He had a bone to pick!",
"What do you call a skeleton who's always telling jokes? A rib-tickler!",
"What's a skeleton's favorite type of dance? The skull-duggery!",
"How did the skeleton know it was going to rain on Halloween? He could feel it in his bones!",
"Why are skeletons so calm? Because nothing gets under their skin.",
"Why can’t skeletons play church music? Because they have no organs.",
"How do French skeletons say hello? \"Bone-jour!\"",
"Why did the skeleton go to the dance? He had a bone to pick with his date!",
"Who won the skeleton beauty contest? No body.",
"What did one skeleton say to the other skeleton? \"You’re dead to me.\"",
"Why did the skeleton go to jail? Because he was bad to the bone.",
"What do you call a skeleton who’s always late? A tardy-bone.",
"What did the skeleton say to his girlfriend? \"Will you marrow me?\"",
"Why do skeletons hate the cold? It sends chills up their spine.",
"What type of candy sent the skeleton to the hospital? Jawbreakers.",
];

function skeletonHumor(){
    var index = Math.floor(Math.random() * skeletonJokes.length);
    showMessageBox([skeletonJokes[index]], true, [skeletonHumor], null, ["Another one", "Close"]);
}

function magic8Ball(){
    var index = Math.floor(Math.random() * magic8BallResonses.length);
    showMessageBox([magic8BallResonses[index]], true, [magic8Ball], null, ["Ask again", "Close"]);
}

function hideNoAccess(){
    var data;
    data = {
        "password": getCookie("skeletonKey")
    };
    $.ajax({
        type: "POST",
        url: "/access",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            toHide = data["access"];
            for (var i = 0; i < toHide.length; i++){
                var id = toHide[i];
                var element = document.getElementById(id);
                if (element != null)
                    element.style.display = "none";
            }
        }
    });
}

function boneSearch() {
    const bones = ["B", "O", "N", "E", "S"];
    const boneList = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null));
    const occupiedSlots = new Set();
    const directions = ["down", "right"];
    let placedBones = 0;
  
    while (placedBones < 15) {
      const spot = getRandomSpot();
      const dir = getRandomDirection(spot);
  
      if (!canPlaceBone(dir, spot)) {
        continue;
      }
  
      placeBone(dir, spot);
      placedBones++;
    }
  
    for (let i = 0; i < boneList.length; i++) {
      boneList[i] = boneList[i].join(" ");
    }
  
    showMessageBox(boneList, true, [boneSearch], null, ["Search again", "Close"]);
  
    function getRandomSpot() {
      const validSpots = [];
  
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const slot = [i, j];
  
          if (!occupiedSlots.has(slot)) {
            validSpots.push(slot);
          }
        }
      }
  
      return validSpots[Math.floor(Math.random() * validSpots.length)];
    }
  
    function getRandomDirection(spot) {
      const [y, x] = spot;
      const validDirections = [];
  
      if (y + bones.length <= 10) {
        validDirections.push("down");
      }
  
      if (x + bones.length <= 10) {
        validDirections.push("right");
      }
  
      return validDirections[Math.floor(Math.random() * validDirections.length)];
    }
  
    function canPlaceBone(dir, spot) {
      const [y, x] = spot;
  
      for (let i = 0; i < bones.length; i++) {
        const slot = dir === "down" ? [y + i, x] : [y, x + i];
  
        if (occupiedSlots.has(slot)) {
          return false;
        }
  
        if (boneList[slot[0]][slot[1]] !== null && boneList[slot[0]][slot[1]] !== bones[i]) {
          return false;
        }
      }
  
      return true;
    }
  
    function placeBone(dir, spot) {
      const [y, x] = spot;
  
      for (let i = 0; i < bones.length; i++) {
        const slot = dir === "down" ? [y + i, x] : [y, x + i];
  
        boneList[slot[0]][slot[1]] = bones[i];
        occupiedSlots.add(slot);
      }
    }
}

function sendMessage(){
    var data;
    data = {
        "message": document.getElementById("messageInput").value,
        "password": getCookie("skeletonKey")
    };
    $.ajax({
        type: "POST",
        url: "/action/9",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    });
}

function setImages(){
    var images = document.getElementsByClassName("img");
    var valuesGotten = [];
    for (var i = 0; i < images.length; i++){
        images[i].src = "static/Banners/" + Math.floor(Math.random() * 8) + ".png";
        if (valuesGotten.includes(images[i].src)){
            i--;
        } else {
            valuesGotten.push(images[i].src);
        }
    }
    var images = document.getElementsByClassName("simg");
    var valuesGotten = [];
    for (var i = 0; i < images.length; i++){
        images[i].src = "static/Skulls/" + Math.floor(Math.random() * 7) + ".png";
        if (valuesGotten.includes(images[i].src)){
            i--;
        } else {
            valuesGotten.push(images[i].src);
        }
    }
    setTarot();
}

function setTarot(){
    var cookie = getCookie("day");
    if (cookie == null || cookie != new Date().getDay() || getCookie("seed") == null){
        setCookie("day", new Date().getDay(), 24);
        setCookie("seed", new Date().getTime());
    }
    Math.seedrandom(getCookie("seed"));
    var images = document.getElementsByClassName("tarot");
    var valuesGotten = [];
    for (var i = 0; i < images.length; i++){
        images[i].src = "static/Arkana/Arkana (" + Math.floor(Math.random() * 78) + ").png";
        if (valuesGotten.includes(images[i].src)){
            i--;
        } else {
            valuesGotten.push(images[i].src);
        }
    }
    var tarotText = document.getElementsByClassName("tarotText");
    for (var i = 0; i < tarotText.length; i++){
        if (Math.floor(Math.random() * 2) == 0){
            tarotText[i].innerHTML = "UPRIGHT";
        } else {
            tarotText[i].innerHTML = "REVERSED";
        }
    }
    Math.seedrandom(new Date().getTime());
}

function showMessageBox(
    message,
    buttons = false,
    func = [],
    funcvals = [],
    buttonsText = [],
    input = false,
    frame = false,
    hideAfter = false,
    inputType = "text"
) {
    const box = document.getElementsByClassName("messageBox")[0];
    const inputdiv = box.children[1];
    const buttondivs = box.children[3];
    const textdiv = box.children[0];
    const frameBox = box.children[2];

    inputdiv.type = inputType;
    inputdiv.style.display = input ? "flex" : "none";


    if (input) {
        inputdiv.value = "";
    }

    if (buttons) {
        buttondivs.style.display = "flex";

        if (buttonsText) {
            for (let i = 0; i < buttonsText.length; i++) {
                if (i > buttondivs.children.length - 1) {
                    const newButton = document.createElement("div");
                    newButton.className = "messageButton";
                    buttondivs.appendChild(newButton);
                }

                buttondivs.children[i].innerHTML = buttonsText[i];
                buttondivs.children[i].style = "display: flex";

                if (func && func.length > i) {
                    (function (i) {
                        const f = func[i];
                        let fvals;

                        if (funcvals && funcvals.length > i) {
                            fvals = [...funcvals[i]];
                        }

                        buttondivs.children[i].onclick = function () {
                            if (hideAfter) {
                                hideElement(box);
                            }

                            if (fvals) {
                                f(...fvals);
                            } else {
                                f();
                            }

                            if (frame) {
                                frameBox.src = "";
                            }
                        };
                    })(i);
                } else {
                    buttondivs.children[i].onclick = function () {
                        hideElement(box);

                        if (frame) {
                            frameBox.src = "";
                        }
                    };
                }
            }

            for (let i = buttonsText.length; i < buttondivs.children.length; i++) {
                buttondivs.children[i].style = "display: none";
                buttondivs.children[i].innerHTML = "";
            }
        }
    } else {
        buttondivs.style.display = "none";
        setTimeout(function () {
            box.style.display = "none";
        }, 3000);
    }

    if (frame) {
        frameBox.style.display = "flex";
        frameBox.src = "/" + frame;

        for (let i = 0; i < textdiv.children.length; i++) {
            textdiv.children[i].innerHTML = "";
        }
    } else {
        frameBox.style.display = "none";

        for (let i = 0; i < message.length; i++) {
            if (i > textdiv.children.length - 1) {
                const newdiv = document.createElement("div");
                newdiv.className = "messageText";
                textdiv.appendChild(newdiv);
            }

            textdiv.children[i].innerHTML = message[i];
            textdiv.children[i].style = "display: flex";
        }

        for (let i = message.length; i < textdiv.children.length; i++) {
            textdiv.children[i].innerHTML = "";
            textdiv.children[i].style = "display: none";
        }
    }

    box.style.display = "flex";
}

function submitColorForm(id, url) {
    const input = document.getElementById("messageInput");
    // Get the value from the input but ignore the # at the start
    const color = input.value.substring(1);

    if (isValidHex(color)) {
        submitForm(id, url, { color: color });
    } else {
        alert("Please enter a valid hex value (e.g FFC533).");
    }
}

function isValidHex(hex) {
    const regex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(hex);
}

function submitForm(id, url = null, extraData = {}) {
    let data;

    if (url === null) {
        data = {
            password: getCookie("skeletonKey"),
        };
    } else {
        data = {
            password: getCookie("skeletonKey"),
            url: url,
        };
    }

    // Merge extraData into the data object
    data = { ...data, ...extraData };

    $.ajax({
        type: "POST",
        url: "/action/".concat([id]),
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        statusCode: {
            401: function (response) {
                showMessageBox(["Skeleton key doesn't fit!"], true, null, null, ["OK"]);
            },
        },
    });
}

function hideElement(element){
    element.style.display = "none";
}
