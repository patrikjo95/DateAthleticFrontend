const Dagar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // månaderna

const printArray = ['<div id="nivå"><h2>Betygsätt din nivå</h2> </div>'];

let sports = [
    {
        id: "gym",
        name: "Gym",
        icon: "fitness_center"
    },
    {
        id: "padel",
        name: "Padel",
        icon: "sports_cricket"
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
        id: "tennis",
        name: "Tennis",
        icon: "sports_tennis"
    },
    {
        id: "golf",
        name: "Golf",
        icon: "golf_course"
    }
    ,
    {
        id: "crossfit",
        name: "Crossfit",
        icon: "fitness_center"
    },
    {
        id: "fotboll",
        name: "Fotboll",
        icon: "sports_soccer"
    },
    {
        id: "dans",
        name: "Dans",
        icon: "emoji_people"
    },
    {
        id: "badminton",
        name: "Badminton",
        icon: "sports_tennis"
    }
    ,
    {
        id: "pingis",
        name: "Pingis",
        icon: "sports_tennis"
    },
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
];

let liveImg;

let int;
let intLetter;


/**
 * Inehåller populering av år, månad, dag felt. Samt visa-lösenord knappen aktiveras här.
 */
$(document).ready(function(){
    let i;
    let val = '<option selected value="dag">dag</option>';
    const väljDag = "dag";
    for (i = 1; i <= Dagar[0]; i++){ //add option days
        val += '<option selected value="'+ i + '">' + i + '</option>';
    }
    $('#dag').append(val);
    $('#dag').val(väljDag);

    val = '<option selected value="månad">månad</option>';
    let väljMånad = "månad";
    for (i = 1; i <= 12; i++){
        val += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#månad').append(val);
    $('#månad').val(väljMånad);

    let datum = new Date();
    val = '<option selected value="år">år</option>';
    selectedYear ="år";
    for (i = 1930; i <= datum.getFullYear(); i++){// years start i
        val += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#år').append(val);
    $('#år').val(selectedYear);

    $("#visa-lösenord").click(function(){
        let type = $("#lösenord1").attr("type") == "password" ? "text" : "password";
        $("#lösenord1").prop("type", type);
        $("#lösenord2").prop("type", type);
    });
});
function isLeapYear(år) {
    år = parseInt(år);
    if (år % 4 != 0) {
        return false;
    } else if (år % 400 == 0) {
        return true;
    } else if (år % 100 == 0) {
        return false;
    } else {
        return true;
    }
}

function change_year(vald)
{
    if( isLeapYear( $(vald).val() ) )
    {
        Dagar[1] = 29;

    }
    else {
        Dagar[1] = 28;
    }
    if( $("#månad").val() == 2)
    {
        const dag = $('#dag');
        let val = $(dag).val();
        $(dag).empty();
        let val2 = '<option selected value="dag">dag</option>';
        for (let i=1; i <= Dagar[1]; i++){ //add option days
            val2 += '<option value="'+ i + '">' + i + '</option>';
        }
        $(dag).append(val2);
        if( val > Dagar[ månad ] )
        {
            val = 1;
        }
        $(dag).val(val);
    }
}

function change_month(select) {
    let dag = $('#dag');
    let val = $(dag).val();
    $(dag).empty();
    let option = '<option selected="dag value="dag">dag</option>';
    let månad = parseInt( $(select).val() ) - 1;
    for (let i=1;i <= Dagar[ månad ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(dag).append(option);
    if( val > Dagar[ månad ] )
    {
        val = 1;
    }
    $(dag).val(val);
}

$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        if($(this).attr('id') == 'anpassat') {
            $('#pronomen').show();
        }
        else {
            $('#pronomen').hide();
        }
    });
});

    function printCheckedSport(thisID) {


        let checkBox = document.getElementById(thisID);
        console.log(thisID + "1")
        thisID = thisID.charAt(0).toUpperCase() + thisID.slice(1);
        console.log(thisID + "2")

        let gridItem = checkBox.closest(".grid-item");
        console.log(gridItem + "3")
        let thisIdPlusCheck = thisID + "check";
        console.log(thisIdPlusCheck + "4")
        let idf = thisID + "rangeValue";
        console.log(idf + "5")
        let fullArrayItem = '<label id ="sliderLabel"> ' + thisID + ' </label> '+ '<br> <input type="range" min="1" max="10" value="5" class="slider" oninput="'+ idf +'.innerText = this.value "> <p id="' + idf + '" class="sliderValue">5</p>'
        let removeAndCompressArray = '<div id="' + thisIdPlusCheck + '">' + fullArrayItem + '</div>';

        if (checkBox.checked === true) {
            gridItem.classList.add("dark-bg");

            printArray.push(removeAndCompressArray)

            let arrayRes;
            for (let i = 0; i < printArray.length; i++) {
                if (printArray[i].length >= 1) {
                    if (arrayRes === undefined) {
                        arrayRes = printArray[i];
                    } else
                        arrayRes += printArray[i];
                } else {
                    break;
                }
            }

            document.getElementById("slidecontainer").innerHTML = arrayRes;

        } else {
            gridItem.classList.remove("dark-bg");
            document.getElementById(thisIdPlusCheck).remove();

            let int = printArray.indexOf(removeAndCompressArray, 0)

            printArray.splice(int, 1)

            if (printArray.length <= 1){
                document.getElementById("nivå").remove();
            }
        }

    }

function buttonHiVi(n) {
    console.log(n)
        if (n===1){
            document.getElementById('modal-body').style.display = 'block';
            document.getElementById('modalBodyBackdrop').style.display = 'block';
        }
        else {
           document.getElementById('modal-body').style.display = 'none';
            document.getElementById('modalBodyBackdrop').style.display = 'none';
        }
}

function nextStep(n) {
        if (n === 1) {
            document.getElementById('stegTvå').style.display = "block";
            document.getElementById('stegEtt').style.display = "none";
        }
        if (n === 2) {
            document.getElementById('stegTre').style.display = "block";
            document.getElementById('stegTvå').style.display = "none";
        }
        if (n===3){
            document.getElementById('stegTvå').style.display = "none";
            document.getElementById('stegEtt').style.display = "block";
        }
        if (n===4){
            document.getElementById('stegTre').style.display = "none";
            document.getElementById('stegTvå').style.display = "block";
        }
}

function kontrolleraLösenord() {
    let password1 = document.getElementById("lösenord1").value;
    let password2 = document.getElementById("lösenord2").value;



    if(password1 !== password2){
        event.preventDefault();
        return 1;
    }

    if(password1.length < 6){
        event.preventDefault(); // förhindra formuläret från att skickas
        return 2;
    }
    // Kolla om det innehåller både bokstäver och siffror
    if(!password1.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)){
        event.preventDefault();
        return 3;
    }
    else {
        return true;
    }
}

function validateForm(event, n) {
        event.preventDefault();
    let year = document.getElementById("år").value;
    let month = document.getElementById("månad").value;
    let day = document.getElementById("dag").value;
    if(year === "år" || month === "månad" || day === "dag"){
        alert("Please select a valid date");
        return false;
    }

    let koll = kontrolleraLösenord();

    if (koll === true){
        nextStep(n)
    }
    if (koll === 1){
        alert("Lösenordet och bekräfta lösenordet matchar inte!");
        return false;
    }
    if (koll === 2){
        alert("Lösenordet måste vara minst 6 tecken långt!");
        return false;
    }
    if (koll === 3){
        alert("Lösenordet måste innehålla både bokstäver och siffror!");
        return false;
    }


}

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


    function checkIfCheckboxes(){
        if($('#sportCheckboxes input[type="checkbox"]:checked').length === 0)
            alert("Please select at least one sport.");
        if($('#preferensCheckboxes input[type="checkbox"]:checked').length === 0)
            alert("Du måste välja preferens på vilka du vill träffa");

        else{
            return true;
        }
    }

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

    let buttons = document.querySelectorAll("button:not(#webbContiner button)");
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
    imagecontiner.style.background = 'black';
    imagecontiner.append(image)

    document.getElementById(fileToUpload).style.visibility ="hidden";
    document.getElementById(knappTillFoto).style.visibility ="hidden";
    document.getElementById(upload).style.visibility ="hidden";
    document.getElementById(deleteBild).style.display = "block";



}

function startWebcam(n, intLetterLive) {
    document.getElementById("webbContiner").style.visibility = "visible";



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

    let buttons = document.querySelectorAll("button:not(#webbContiner button)");
    buttons.forEach(function(button) {
        button.disabled = true;
        button.classList.add("disabled");
    });

    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        let video = document.getElementById('webcam');
        let button = document.getElementById('taBild')
        video.srcObject = stream;
        video.style.display = 'block';
        button.style.display = 'block';
        video.play();

        int = n;
        intLetter = intLetterLive;


    });
}


let countdownInterval;

function takePicture(event) {
    event.preventDefault();
    let count = 3;
    let countdown = document.getElementById('countdown');
    let stegtre = document.getElementById('webcam')
    let taBild = document.getElementById('taBild')
    let taOmBild = document.getElementById('taOmBild')
    let check = document.getElementById('check')
    let close  = document.getElementById('close')
    taBild.style.visibility = "hidden"
    countdown.innerHTML = count;
    countdownInterval = setInterval(() => {
        count--;
        countdown.innerHTML = count;
        if (count === 0) {
            document.body.classList.add('flash-screen');
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
            stegtre.classList.add("flash-screen");
            countdown.style.visibility = "hidden"
            check.style.display = 'block'
            taOmBild.style.display = 'block'
            close.style.display = 'block'
            let stream = video.srcObject;
            stream.getTracks().forEach(track => track.stop());
        }
    }, 1000);
}

function retake (event, close){
    event.preventDefault();

    let content = '<video id="webcam" style="display:none;"></video><p id="countdown"></p> <button id="check" style="display:none" onclick="displayImageFromKamera(event)"><span class="material-symbols-outlined checkIcon" style="color: green">check_circle</span></button><button id="taBild" onclick="takePicture(event)" style="display:none;"><span class="material-symbols-outlined" style="color: white">add_circle</span></button> <button id="taOmBild" style="display:none;" onclick="retake(event)"><span class="material-symbols-outlined" style="color: white">sync</span></button> <button id="close" style="display:none;" onclick="retake(event, \'close\')"><span class="material-symbols-outlined" style="color: red">cancel</span></button>'
    $("#webbContiner").html(content);

   // document.getElementById("webbContiner").style.visibility = "hidden";

    if (close !== "close"){
        startWebcam(int, intLetter)
        takePicture(event)

    }

    let inputs = document.querySelectorAll("input[type='file']");
    inputs.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("disabled");
    });

    let buttons = document.querySelectorAll("button:not(#webbContiner button)");
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

function countChars(target) {
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;
    document.getElementById('counter').innerHTML = `${currentLength}/${maxLength}`;
}

function hide() {
    let iframe = window.parent.document.getElementById("modal-body");
    let iframemodel = window.parent.document.getElementById("modalBodyBackdrop")
    iframe.style.display = "none";
    iframemodel.style.display = "none";
}


window.onload = function(){
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
    }
}







