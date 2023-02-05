const printArray = [];


let isDark = false;
let labels = document.querySelectorAll('.label');
let darkModeValue = sessionStorage.getItem("darkMode");



/**
 Printar ut en rating label satt man kan ge ett betyg på hur bar man är på sporten
 */
function printCheckedSport(thisID) {

    let checkBox = document.getElementById(thisID);
    thisID = thisID.charAt(0).toUpperCase() + thisID.slice(1);
    let gridItem = checkBox.closest(".grid-item");
    let thisIdPlusCheck = thisID + "check";
    let idf = thisID + "rangeValue";
    let fullArrayItem = '<label id ="sliderLabel"> ' + thisID + ' </label> '+ '<br> <input type="range" min="1" max="10" value="5" class="slider" oninput="'+ idf +'.innerText = this.value "> <p id="' + idf + '" class="sliderValue">5</p>'
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
 Denna populera alla checkboxes och alla sport iconer som finns i arrayen sports
 */



/**
 Kollar satt minst en checkbox är ifyllt
 */
function validateCheckBoxes(event, n){
    event.preventDefault();
    let boolean = checkIfCheckboxes();
    if (boolean === true){
        nextStep(n)
    }
    else{
        return false;
    }

}

/**
 Ger alert ifall man inte valt en sport eller inte valt en preferens
 */
function checkIfCheckboxes(){
    if($('#sportCheckboxes input[type="checkbox"]:checked').length === 0)
        alert("Välj minst en sport");
    else if($('#preferensCheckboxes input[type="checkbox"]:checked').length === 0)
        alert("Du måste välja preferens på vilka du vill träffa");

    else{
        return true;
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

$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        if($(this).attr('id') == 'anpassat2') {
            $('#pronomen2').show();
        }
        else {
            $('#pronomen2').hide();
        }
    });
});

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

$(document).ready(function() {
    // Get the modal
    let modal = $("#myModal");

    // Get the button that opens the modal
    let btns = $("#myBtn");

    // Get the <span> element that closes the modal
    let span = $(".close");

    // When the user clicks on the button, open the modal
    btns.click(function() {
        modal.show();
    });

    // When the user clicks on <span> (x), close the modal
    span.click(function() {
        modal.hide();
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });
});


//-----------------------------------Webcam------------------------------------------


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
 Gör satt man kan genom webcam och sätta in en bild i griden
 */
function displayImageFromKamera(event){
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
    imgTag.id = int;
    imgTag.className = "bild";
    imgTag.style.width = '100%';
    imgTag.style.height = '100%';
    imgTag.style.borderRadius = '10%';
    imgTag.style.objectFit = "cover";
    imagecontiner.style.background = 'black';
    imagecontiner.appendChild(imgTag);

    document.getElementById(fileToUpload).style.visibility ="hidden";
    document.getElementById(knappTillFoto).style.visibility ="hidden";
    document.getElementById(upload).style.visibility ="hidden";
    document.getElementById(deleteBild).style.display = "block";


    let content = '<video id="webcam" style="display:none;"></video><p id="countdown"></p> <button id="check" style="display:none" onclick="displayImageFromKamera(event)"><span class="material-symbols-outlined checkIcon" style="color: green">check_circle</span></button><button id="taBild" onclick="takePicture(event)" style="display:none;"><span class="material-symbols-outlined" style="color: white">add_circle</span></button> <button id="taOmBild" style="display:none;" onclick="retake(event)"><span class="material-symbols-outlined" style="color: white">sync</span></button><button id="close" style="display:none;" onclick="retake(event, \'close\')"><span class="material-symbols-outlined" style="color: red">cancel</span></button>'
    $("#webbContainer").html(content);

    document.getElementById("webbContainer").style.visibility = "hidden";

    let firstChild = document.querySelector("#containerBild :first-child");
    if (firstChild.id === imagecontiner.id && firstChild.id != null){
        let copyImage = new Image()
        copyImage.src = imgTag.src;

        copyImage.style.borderRadius= "50%"


        document.getElementById("preview").style.backgroundImage = "url('" + copyImage.src + "')";
        document.getElementById("preview").style.backgroundSize = "200px 200px"

    }
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
    imagecontiner.style.background = 'black';
    imagecontiner.append(image)


    let firstChild = document.querySelector("#containerBild :first-child")
    if (firstChild.id === imagecontiner.id && firstChild.id != null){
        let copyImage = new Image()
        copyImage.src = image.src;

        copyImage.style.borderRadius= "50%"


        document.getElementById("preview").style.backgroundImage = "url('" + copyImage.src + "')";
        document.getElementById("preview").style.backgroundSize = "200px 200px"

    }

    document.getElementById(fileToUpload).style.visibility ="hidden";
    document.getElementById(knappTillFoto).style.visibility ="hidden";
    document.getElementById(upload).style.visibility ="hidden";
    document.getElementById(deleteBild).style.display = "block";


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

    profilBild()

    document.getElementById(lett).style.background = 'orange';
    document.getElementById(fileToUpload).style.visibility ="visible";
    document.getElementById(knappTillFoto).style.visibility ="visible";
    document.getElementById(upload).style.visibility ="visible";
    document.getElementById(deleteBild).style.display = "none";

}
$(document).ready(function() {

    $('#containerBild').sortable({
        items: '.foto',
        update: function(event, ui) {
            profilBild()

        }
    });
});


function profilBild(){
    let firstChild = document.querySelector("#containerBild :first-child img");

    if (firstChild === null){
        document.getElementById("preview").style.background = "none";
    }
    else {
        let copyImage = new Image()
        copyImage.src = firstChild.src;

       /* copyImage.style.borderRadius= "50%"*/

        document.getElementById("preview").style.backgroundImage = "url('" + copyImage.src + "')";
        document.getElementById("preview").style.backgroundSize = "200px 200px"
        document.getElementById("preview").style.backgroundSize = "cover";
    }



}

