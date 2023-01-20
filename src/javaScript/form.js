const Dagar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // månaderna

const printArray = ['<div id="nivå"><h2>Betygsätt din nivå</h2> </div>'];



$(document).ready(function(){
    let i;
    let option = '<option selected value="dag">dag</option>';
    const selectedDay = "dag";
    for (i = 1; i <= Dagar[0]; i++){ //add option days
        option += '<option selected value="'+ i + '">' + i + '</option>';
    }
    $('#dag').append(option);
    $('#dag').val(selectedDay);

    option = '<option selected value="månad">månad</option>';
    let selectedMon = "månad";
    for (i = 1; i <= 12; i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#månad').append(option);
    $('#månad').val(selectedMon);

    let d = new Date();
    option = '<option selected value="år">år</option>';
    selectedYear ="år";
    for (i = 1930; i <= d.getFullYear(); i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#år').append(option);
    $('#år').val(selectedYear);

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

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
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
        let option = '<option selected value="dag">dag</option>';
        for (let i=1; i <= Dagar[1]; i++){ //add option days
            option += '<option value="'+ i + '">' + i + '</option>';
        }
        $(dag).append(option);
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

function buttonHiVi(n) {
    console.log(n)
        if (n===1){
            document.getElementById('modal-body').style.visibility = 'visible';
            document.getElementById('modalBodyBackdrop').style.visibility = 'visible';
        }
        else {
           document.getElementById('modal-body').style.visibility= 'hidden';
        }
}

function nextStep(n) {
        if (n === 1) {
            document.getElementById('stegTvå').style.visibility = 'visible';
            document.getElementById('stegEtt').style.visibility = 'hidden';
        }
        if (n === 2) {
            document.getElementById('stegTre').style.visibility = 'visible';
            document.getElementById('stegTvå').style.visibility = 'hidden';
        }
        if (n===3){
            document.getElementById('stegTvå').style.visibility = 'hidden';
            document.getElementById('stegEtt').style.visibility = 'visible';
        }
        if (n===4){
            document.getElementById('stegTre').style.visibility = 'hidden';
            document.getElementById('stegTvå').style.visibility = 'visible';
        }
}

function kontrolleraLösenord() {
    let password1 = document.getElementById("lösenord1").value;
    let password2 = document.getElementById("lösenord2").value;


    if (password1 === password2) {
        return true;
    } else {
        return false;
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

    if (kontrolleraLösenord() === true){
        nextStep(n)
    }
    else{
        alert("Lösenorden matchar ej!");
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

        let input = document.getElementById(fileToUpload)
    let imagecontiner = document.getElementById(har)


    let image = new Image();
        image.src = URL.createObjectURL(input.files[0])
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.borderRadius = '10%';
    image.style.position = ' relative';
    imagecontiner.style.background = 'black';
    imagecontiner.append(image)

    document.getElementById(fileToUpload).style.display ="none";
    document.getElementById(knappTillFoto).style.display ="none";
    document.getElementById(upload).style.display ="none";


}







