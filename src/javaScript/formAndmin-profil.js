const printArray = [];
let darkModeValue = sessionStorage.getItem("darkMode");
let labels = document.querySelectorAll('.label');
let liveImg;
let int;
let intLetter;
let countdownInterval;
let color = getComputedStyle(document.documentElement).getPropertyValue('color');

let isDark = false;
const sports = [
    {
        id: "styrketräning",
        name: "Styrketräning",
        icon: "fitness_center"
    },
    {
        id: "löpning",
        name: "Löpning",
        icon: "sprint"
    },
    {
        id: "kampsport",
        name: "Kampsport",
        icon: "sports_martial_arts"
    }
    ,
    {
        id: "esport",
        name: "E-sport",
        icon: "sports_esports"
    },
    {
        id: "klättring",
        name: "Klättring",
        icon: "altitude"
    },
    {
        id: "basket",
        name: "Basket",
        icon: "sports_basketball"
    },

    {
        id: "racketsport",
        name: "Racketsport",
        icon: "sports_tennis"
    },
    {
        id: "golf",
        name: "Golf",
        icon: "golf_course"
    }
    ,
    {
        id: "fotboll",
        name: "Fotboll",
        icon: "sports_soccer"
    },
    {
        id: "dans",
        name: "Dans",
        icon: "emoji_people"
    }
    ,
    {
        id: "volleyboll",
        name: "Volleyboll",
        icon: "sports_volleyball"
    },
    {
        id: "hockey",
        name: "Hockey",
        icon: "sports_hockey"
    },
    {
        id: "simning",
        name: "Simning",
        icon: "pool"
    }
    ,
    {
        id: "cyklning",
        name: "Cyklning",
        icon: "directions_bike"
    },
    {
        id: "biljard",
        name: "Biljard",
        icon: "sports_bar"
    },
    {
        id: "skidåkning",
        name: "Skidåkning",
        icon: "downhill_skiing"
    },
    {
        id: "fiske",
        name: "Fiske",
        icon: "phishing"
    },
    {
        id: "vandring",
        name: "Vandring",
        icon: "hiking"
    },
    {
        id: "handboll",
        name: "Handboll",
        icon: "sports_handball"
    },
    {
        id: "skateboarding",
        name: "Skateboarding",
        icon: "skateboarding"
    }
    ,
    {
        id: "yoga",
        name: "Yoga",
        icon: "self_improvement"
    },
    {
        id: "segling",
        name: "Segling",
        icon: "sailing"
    },
    {
        id: "surfing",
        name: "Surfing",
        icon: "surfing"
    },
    {
        id: "snowboarding",
        name: "Snowboarding",
        icon: "snowboarding"
    }
    ,
    {
        id: "skridskor",
        name: "Skridskor",
        icon: "ice_skating"
    },
    {
        id: "kayak",
        name: "Kayak",
        icon: "kayaking"
    },
    {
        id: "brännboll",
        name: "Brännboll",
        icon: "sports_baseball"
    },
    {
        id: "rullskridskor",
        name: "Rullskridskor",
        icon: "roller_skating"
    }
];

window.onload = function() {
    let gridContainer = document.querySelector(".grid-container");

    for (let sport of sports) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.onclick = function(){
            document.getElementById(this.querySelector('input').id).checked = document.getElementById(this.querySelector('input').id).checked ? false : true;
            printCheckedSport(this.querySelector('input').id);
        };

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = sport.id;
        checkbox.classList.add("checkbox");
        checkbox.classList.add("sportCheck");
        checkbox.value = sport.id;
        checkbox.onclick = function (){
            document.getElementById(this.id).checked = document.getElementById(this.id).checked ? false : true;
        }

        let label = document.createElement("label");
        label.htmlFor = sport.id;
        label.innerText = " " + sport.name + " ";
        label.onclick = function(){
            document.getElementById(this.parentNode.querySelector('input').id).checked = document.getElementById(this.parentNode.querySelector('input').id).checked ? false : true;
            printCheckedSport(this.parentNode.querySelector('input').id);

        };


        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerText = sport.icon;


        gridItem.appendChild(checkbox);
        gridItem.appendChild(label);
        gridItem.appendChild(icon);

        gridContainer.appendChild(gridItem);

        gridItem.onmouseover = function() {
            if (!this.querySelector("input").checked){
                this.querySelector("span").style.color = "orange";
                this.querySelector("label").style.color = "orange";
            }
        }

        gridItem.onmouseout = function() {
            if (this.querySelector("input").checked) {
                this.querySelector("span").style.color = "white";
                this.querySelector("label").style.color = "white";
            }
            else{
                this.querySelector("span").style.color = "black";
                this.querySelector("label").style.color = "black";
            }
        }


    }

}

/**
 Gör att du kan ta bort bilderna från griden i bild continern
 */
function removeBild(n, event, lett){
    event.preventDefault();

    let fileToUpload = "fileToUpload" + n;
    let knappTillFoto = "knappTillFoto" + n;
    let upload = "file-upload" + n;
    let deleteBild = "deleteBild" + n;

    let imagecontiner = document.getElementById(n)
    imagecontiner.remove()

    document.getElementById(lett).style.background = 'orange';
    document.getElementById(fileToUpload).style.visibility ="visible";
    document.getElementById(knappTillFoto).style.visibility ="visible";
    document.getElementById(upload).style.visibility ="visible";
    document.getElementById(deleteBild).style.display = "none";
}

/**
 Gör satt vi kan ta om bilden och stänga ner bilden om vi inte vill ta en bild
 */
function retake (event, close){
    event.preventDefault();

    let content = '<video id="webcam" style="display:none;"></video><p id="countdown"></p> <button id="check" style="display:none" onclick="displayImageFromKamera(event)"><span class="material-symbols-outlined checkIcon" style="color: green">check_circle</span></button><button id="taBild" onclick="takePicture(event)" style="display:none;"><span class="material-symbols-outlined" style="color: white">add_circle</span></button> <button id="taOmBild" style="display:none;" onclick="retake(event)"><span class="material-symbols-outlined" style="color: white">sync</span></button> <button id="close" style="display:none;" onclick="retake(event, \'close\')"><span class="material-symbols-outlined" style="color: red">cancel</span></button>'
    $("#webbContainer").html(content);

    if (close !== "close"){
        startWebcam(int, intLetter, false)
        takePicture(event)
    }

    let inputs = document.querySelectorAll("input[type='file']");
    inputs.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    let buttons = document.querySelectorAll("button:not(#webbContainer button)");
    buttons.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    let texta = document.querySelectorAll("textarea");
    texta.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

}


/**
 Tar en bild med webcam
 */
function takePicture(event) {
    event.preventDefault();
    let count = 3;
    let countdown = document.getElementById('countdown');
    let taBild = document.getElementById('taBild')
    let taOmBild = document.getElementById('taOmBild')
    let check = document.getElementById('check')
    let close  = document.getElementById('close')

    close.style.display = 'none';
    taBild.style.visibility = "hidden";
    countdown.innerHTML = count;
    countdownInterval = setInterval(() => {
        count--;
        countdown.innerHTML = count;
        if (count === 0) {
            clearInterval(countdownInterval);
            let video = document.getElementById('webcam');
            let canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            let img = document.createElement('img');
            img.src = canvas.toDataURL();
            liveImg = img.src
            img.style.borderRadius = '20%';
            img.style.border =  '10px solid black';
            img.style.position = 'static';
            video.parentNode.replaceChild(img, video);
            countdown.style.visibility = "hidden"
            check.style.display = 'block'
            taOmBild.style.display = 'block'
            close.style.display = 'block'
            let stream = video.srcObject;
            stream.getTracks().forEach(track => track.stop());


        }
    }, 1000);
}



/**
 Gör satt man kan genom file systemet sätta in en bild i griden
 */
function displayImage(n, har){

    let fileToUpload = "fileToUpload" + n;
    let knappTillFoto = "knappTillFoto" + n;
    let upload = "file-upload" + n;
    let deleteBild = "deleteBild" + n;

    let inputs = document.querySelectorAll("input[type='file']");
    inputs.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    let buttons = document.querySelectorAll("button:not(#webbContainer button)");
    buttons.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    let input = document.getElementById(fileToUpload)
    let imagecontiner = document.getElementById(har)



    let image = new Image();
    image.src = URL.createObjectURL(input.files[0])
    image.id = n;
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.borderRadius = '10%';
    image.style.position = ' relative';
    image.style.objectFit = "cover";
    image.value = image.src;
    imagecontiner.style.background = 'black';
    imagecontiner.append(image)

    document.getElementById(fileToUpload).style.visibility ="hidden";
    document.getElementById(knappTillFoto).style.visibility ="hidden";
    document.getElementById(upload).style.visibility ="hidden";
    document.getElementById(deleteBild).style.display = "block";

}


/**
 Startar webcam och ser till att den är längst fram på skärmen
 */
function startWebcam(n, intLetterLive, boolean) {
    document.getElementById("webbContainer").style.visibility = "visible";


    let texta = document.querySelectorAll("textarea");
    texta.forEach(function(button) {
        button.disabled = true;
        button.classList.add("disabled");
    });

    let inputs = document.querySelectorAll("input[type='file']");
    inputs.forEach(function(button) {
        button.disabled = true;
        button.classList.add("disabled");
    });

    let buttons = document.querySelectorAll("button:not(#webbContainer button)");
    buttons.forEach(function(button) {
        button.disabled = true;
        button.classList.add("disabled");
    });

    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        let video = document.getElementById('webcam');
        let button = document.getElementById('taBild')
        let close  = document.getElementById('close')

        video.srcObject = stream;
        video.style.display = 'block';
        button.style.display = 'block';

        if(boolean){
            close.style.display = 'block';
        }

        video.play();

        int = n;
        intLetter = intLetterLive;


    });
}




/**
 Printar ut en rating label satt man kan ge ett betyg på hur bar man är på sporten
 */
function printCheckedSport(thisID) {

    let checkBox = document.getElementById(thisID);
    thisID = thisID.charAt(0).toUpperCase() + thisID.slice(1);
    let gridItem = checkBox.closest(".grid-item");
    let thisIdPlusCheck = thisID + "check";
    let idf = thisID + "rangeValue";
    console.log(idf + "##")
    let fullArrayItem = '<label class="sliderLabel"> ' + thisID + ' </label> '+ '<br> <input type="range" min="1" max="10" value="5" class="slider"oninput="'+ idf +'.innerText = this.value "> <p id="' + idf + '" class="sliderValue">5</p>'
    let removeAndCompressArray = '<div id="' + thisIdPlusCheck + '">' + fullArrayItem + '</div>';

    if (checkBox.checked === true) {
        gridItem.classList.add("dark-bg");
        printArray.push(removeAndCompressArray)


        if (printArray.length === 1){
            let newElementText = document.createElement('div');
            newElementText.innerHTML = '<div id="nivå"><h2>Betygsätt din nivå</h2> </div>';
            document.getElementById("slidecontainer").appendChild(newElementText);
        }
        let newElement = document.createElement('div');
        newElement.innerHTML = removeAndCompressArray;
        document.getElementById("slidecontainer").appendChild(newElement);

    } else {
        gridItem.classList.remove("dark-bg");
        document.getElementById(thisIdPlusCheck).remove();

        let int = printArray.indexOf(removeAndCompressArray, 0)

        printArray.splice(int, 1)

        if (printArray.length < 1){
            document.getElementById("nivå").remove();
        }
    }

}


/**
 Printar live längden på hur många character man skrivit i textarean
 */
function countChars(target) {
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;
    document.getElementById('counter').innerHTML = `${currentLength}/${maxLength}`;
}


/**
 Gör att man kan göra program till dark mode
 */
function darkMode(){
    if(isDark) {
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.add("dark-mode");
        }
        document.body.classList.toggle('dark-mode');
        document.documentElement.style.setProperty('color', 'white');
        document.documentElement.style.setProperty('--background-color',  '#252323');
        //document.querySelector('iframe').classList.toggle('dark-mode');
        sessionStorage.setItem("darkMode", "enabled");
    } if(!isDark) {
        document.body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('color', 'black');
        document.documentElement.style.setProperty('--background-color', 'whitesmoke');
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove("dark-mode");
        }
        sessionStorage.setItem("darkMode", "disabled");
    }
    isDark = !isDark;

}

window.addEventListener('popstate', function(event) {
    if (sessionStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add('dark-mode');
        document.documentElement.style.setProperty('color', 'white');
        document.documentElement.style.setProperty('--background-color',  '#252323');
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.add("dark-mode");
        }
        isDark = true;
    }
})


$(document).ready(function(){
    if(darkModeValue === "enabled") {
        isDark = true;
        darkMode();
    }if(darkModeValue === "disabled"){
        isDark = false;
        darkMode();
    }
})


/**
 Gör satt man kan genom webcam och sätta in en bild i griden
 */

function displayImageFromKamera(event,tru){
    event.preventDefault();
    let buttons = document.querySelectorAll("button:not(#webbContainer button)");
    let inputs = document.querySelectorAll("input[type='file']");
    let texta = document.querySelectorAll("textarea");

    inputs.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    buttons.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    texta.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    let fileToUpload = "fileToUpload" + int;
    let knappTillFoto = "knappTillFoto" + int;
    let upload = "file-upload" + int;
    let deleteBild = "deleteBild" + int;
    let imagecontiner = document.getElementById(intLetter)
    let imgTag = document.createElement('img');

    imgTag.src = liveImg;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', imgTag.src, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            let blob = this.response;
            imgTag = blob;
            // Du har nu en Blob-objekt i variabeln blob.
        }
    };
    xhr.send();
    imgTag.id = int;
    imgTag.className = "bild";
    imgTag.style.width = '100%';
    imgTag.style.height = '100%';
    imgTag.style.borderRadius = '10%';
    imgTag.style.objectFit = "cover";
    imgTag.value = imgTag.src;
    imagecontiner.style.background = 'black';
    imagecontiner.appendChild(imgTag);

    document.getElementById(fileToUpload).style.visibility ="hidden";
    document.getElementById(knappTillFoto).style.visibility ="hidden";
    document.getElementById(upload).style.visibility ="hidden";
    document.getElementById(deleteBild).style.display = "block";


    let content = '<video id="webcam" style="display:none;"></video><p id="countdown"></p> <button id="check" style="display:none" onclick="displayImageFromKamera(event)"><span class="material-symbols-outlined checkIcon" style="color: green">check_circle</span></button><button id="taBild" onclick="takePicture(event)" style="display:none;"><span class="material-symbols-outlined" style="color: white">add_circle</span></button> <button id="taOmBild" style="display:none;" onclick="retake(event)"><span class="material-symbols-outlined" style="color: white">sync</span></button><button id="close" style="display:none;" onclick="retake(event, \'close\')"><span class="material-symbols-outlined" style="color: red">cancel</span></button>'
    $("#webbContainer").html(content);

    document.getElementById("webbContainer").style.visibility = "hidden";

    if (tru === 1){
        let firstChild = document.querySelector("#containerBild :first-child");
        if (firstChild.id === imagecontiner.id && firstChild.id != null){
            let copyImage = new Image()
            copyImage.src = imgTag.src;

            copyImage.style.borderRadius= "50%"


            document.getElementById("preview").style.backgroundImage = "url('" + copyImage.src + "')";
            document.getElementById("preview").style.backgroundSize = "200px 200px"

        }
    }
}

