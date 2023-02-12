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

