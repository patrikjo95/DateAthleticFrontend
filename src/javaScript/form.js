const dagar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // månaderna
const printArray = ['<div id="nivå"><h2>Betygsätt din nivå</h2> </div>'];
const sports = [
    {
        id: "styrcketräning",
        name: "Styrcketräning",
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
        id: "surfa",
        name: "Surfa",
        icon: "surfing"
    },
    {
        id: "snowboarding",
        name: "Snowboarding",
        icon: "snowboarding"
    }
];

let liveImg;
let int;
let intLetter;
let countdownInterval;



//--------------------------Datum--------------------------------------------------

/**
 * Inehåller populering av år, månad, dag felt. Samt visa-lösenord knappen aktiveras här och gör att man kan sortera bilderna.
 */
$(document).ready(function(){
    let i;
    let val = '<option selected value="dag">dag</option>';
    const väljDag = "dag";
    for (i = 1; i <= dagar[0]; i++){ //add option days
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

    // Gör bilderna dragbara

    // Gör bilderna droppbara
        $('#containerBild').sortable({
            items: '.foto',
            update: function(event, ui) {
                // Hämta det nya indexet för båda bilderna
                let img1Id = ui.item.attr("id");
                let img2Id = $('#containerBild .bild').not(ui.item).eq(ui.item.index()).attr("id");
                // Byt id:n för bilderna
                $("#" + img1Id).attr("id", img2Id);
                $("#" + img2Id).attr("id", img1Id);
            }
        });
});



/**
 Den här functionen fixer en drop down list som håller reda på månad, år och dag
 */
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

/**
 Den här functionen fixer en drop down list som håller reda på månad, år och dag
 */
function change_year(vald)
{
    if( isLeapYear( $(vald).val() ) )
    {
        dagar[1] = 29;

    }
    else {
        dagar[1] = 28;
    }
    if( $("#månad").val() == 2)
    {
        const dag = $('#dag');
        let val = $(dag).val();
        $(dag).empty();
        let val2 = '<option selected value="dag">dag</option>';
        for (let i=1; i <= dagar[1]; i++){ //add option days
            val2 += '<option value="'+ i + '">' + i + '</option>';
        }
        $(dag).append(val2);
        if( val > dagar[ månad ] )
        {
            val = 1;
        }
        $(dag).val(val);
    }
}

/**
 Den här functionen fixer en drop down list som håller reda på månad, år och dag
 */
function change_month(select) {
    let dag = $('#dag');
    let val = $(dag).val();
    $(dag).empty();
    let option = '<option selected="dag value="dag">dag</option>';
    let månad = parseInt( $(select).val() ) - 1;
    for (let i=1;i <= dagar[ månad ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(dag).append(option);
    if( val > dagar[ månad ] )
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

//------------------------------CheckBox Sport--------------------------------------------

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


/**
 Denna populera alla checkboxes och alla sport iconer som finns i arrayen sports
 */
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

//------------------------------Fönster byte--------------------------------------------

/**
 Modalfönster kommer upp på skärmen
 */
function buttonHiVi(n) {
        if (n===1){
            document.getElementById('modal-body').style.display = 'block';
            document.getElementById('modalBodyBackdrop').style.display = 'block';
        }
        else {
           document.getElementById('modal-body').style.display = 'none';
            document.getElementById('modalBodyBackdrop').style.display = 'none';
        }
}

/**
 Gör satt man kan hoppa mellan de olika stegen i form-html filen
 */
function nextStep(n) {
        if (n===1) {
            document.getElementById('stegTvå').style.display = "block";
            document.getElementById('stegEtt').style.display = "none";
        }
        else if (n===2) {
            document.getElementById('stegTre').style.display = "block";
            document.getElementById('stegTvå').style.display = "none";
        }
        else if (n===3){
            document.getElementById('stegTvå').style.display = "none";
            document.getElementById('stegEtt').style.display = "block";
        }
        else if(n===4){
            document.getElementById('stegTre').style.display = "none";
            document.getElementById('stegTvå').style.display = "block";
        }
}

/**
 Gör att modalfönstret försvinner när man klickar på klar knappen
 */
function hide() {
    let iframe = window.parent.document.getElementById("modal-body");
    let iframemodel = window.parent.document.getElementById("modalBodyBackdrop")
    iframe.style.display = "none";
    iframemodel.style.display = "none";


    alert("Du har registrerat dig, nu är det dax att hitta den ultimata träningspartnern!!!! ")
}


//------------------------------Validering--------------------------------------------

/**
Kollar satt bekräfta lösenord och lösenord matchar med varandra
 kollar satt längden på lösenordet är 8 character eller längre
 kollar också ifall lösenordet har både bokstäver och siffror
 */

function kontrolleraLösenord() {
    let password1 = document.getElementById("lösenord1").value;
    let password2 = document.getElementById("lösenord2").value;



    if(password1 !== password2){
        event.preventDefault();
        return 1;
    }

    if(password1.length < 8){
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

/**
kollar satt månad, år och dag inte är invalid.
 samt ger alert för all ogiltig validering
 */
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
        if($('#preferensCheckboxes input[type="checkbox"]:checked').length === 0)
            alert("Du måste välja preferens på vilka du vill träffa");

        else{
            return true;
        }
    }


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
    imagecontiner.style.background = 'black';
    imagecontiner.appendChild(imgTag);

    document.getElementById(fileToUpload).style.visibility ="hidden";
    document.getElementById(knappTillFoto).style.visibility ="hidden";
    document.getElementById(upload).style.visibility ="hidden";
    document.getElementById(deleteBild).style.display = "block";

    let content = '<video id="webcam" style="display:none;"></video><p id="countdown"></p> <button id="check" style="display:none" onclick="displayImageFromKamera(event)"><span class="material-symbols-outlined checkIcon" style="color: green">check_circle</span></button><button id="taBild" onclick="takePicture(event)" style="display:none;"><span class="material-symbols-outlined" style="color: white">add_circle</span></button> <button id="taOmBild" style="display:none;" onclick="retake(event)"><span class="material-symbols-outlined" style="color: white">sync</span></button><button id="close" style="display:none;" onclick="retake(event, \'close\')"><span class="material-symbols-outlined" style="color: red">cancel</span></button>'
    $("#webbContainer").html(content);

    document.getElementById("webbContainer").style.visibility = "hidden";
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
    image.style.position = ' relative';
    image.setAttribute("draggable", "true");
    imagecontiner.style.background = 'black';
    imagecontiner.append(image)

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
    let stegtre = document.getElementById('webcam')
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

/**
 Gör satt vi kan ta om bilden och stänga ner bilden om vi inte vill ta en bild
 */
function retake (event, close){
    event.preventDefault();

    let content = '<video id="webcam" style="display:none;"></video><p id="countdown"></p> <button id="check" style="display:none" onclick="displayImageFromKamera(event)"><span class="material-symbols-outlined checkIcon" style="color: green">check_circle</span></button><button id="taBild" onclick="takePicture(event)" style="display:none;"><span class="material-symbols-outlined" style="color: white">add_circle</span></button> <button id="taOmBild" style="display:none;" onclick="retake(event)"><span class="material-symbols-outlined" style="color: white">sync</span></button> <button id="close" style="display:none;" onclick="retake(event, \'close\')"><span class="material-symbols-outlined" style="color: red">cancel</span></button>'
    $("#webbContainer").html(content);

   // document.getElementById("webbContiner").style.visibility = "hidden";

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

    document.getElementById(lett).style.background = 'orange';
    document.getElementById(fileToUpload).style.visibility ="visible";
    document.getElementById(knappTillFoto).style.visibility ="visible";
    document.getElementById(upload).style.visibility ="visible";
    document.getElementById(deleteBild).style.display = "none";
}


//-----------------------Övrigt-----------------------------

/**
Printar live längden på hur många character man skrivit i textarean
 */
function countChars(target) {
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;
    document.getElementById('counter').innerHTML = `${currentLength}/${maxLength}`;
}




