
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

