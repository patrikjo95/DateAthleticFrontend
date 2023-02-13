let dagarManader = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // månaderna

/**
 * Inehåller populering av år, månad, dag felt. Samt visa-lösenord knappen aktiveras här och gör att man kan sortera bilderna.
 */
$(document).ready(function(){
    let i;
    let val = '<option selected value="dag">dag</option>';
    const väljDag = "dag";
    for (i = 1; i <= dagarManader[0]; i++){ //add option days
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

        $('#containerBild').sortable({
            items: '.foto',
            update: function(event, ui) {
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
        dagarManader[1] = 29;

    }
    else {
        dagarManader[1] = 28;
    }
    if( $("#månad").val() == 2)
    {
        const dag = $('#dag');
        let val = $(dag).val();
        $(dag).empty();
        let val2 = '<option selected value="dag">dag</option>';
        for (let i=1; i <= dagarManader[1]; i++){ //add option days
            val2 += '<option value="'+ i + '">' + i + '</option>';
        }
        $(dag).append(val2);
        if( val > dagarManader[ månad ] )
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
    for (let i=1;i <= dagarManader[ månad ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(dag).append(option);
    if( val > dagarManader[ månad ] )
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





//------------------------------Fönster byte--------------------------------------------

/**
 Modalfönster kommer upp på skärmen
 */


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
 Gör att moralfönstret försvinner när man klickar på klar knappen
 */
function hide() {

    if (checkIfFirstChildImg()){
        createUser()
        location.reload();
        window.parent.location.reload();

        alert("Du har registrerat dig, nu är det dax att hitta den ultimata träningspartnern!!!! ")

    }
    else{
        event.preventDefault()
        alert("Du måste lägga till en Profilbild")
    }

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
        alert("Välj ett giltigt födelsedatum");
        return false;
    }

    let koll = kontrolleraLösenord();

    if (koll === true){
        //checkUserAndEmail(n)
        nextStep(n)
    }
    if (koll === 1){
        alert("Lösenordet och bekräfta lösenordet matchar inte!");
        return false;
    }
    if (koll === 2){
        alert("Lösenordet måste vara minst 8 tecken långt!");
        return false;
    }
    if (koll === 3){
        alert("Lösenordet måste innehålla både bokstäver och siffror!");
        return false;
    }


}


//-----------------------Övrigt-----------------------------


function toggleTextFunction() {
    let first = document.getElementById('första');
    let andra = document.getElementById('andra');
    if (first.style.display === "none") {
       first.style.display = 'block'
       andra.style.display = 'none'
    } else {
        first.style.display = 'none'
        andra.style.display = 'block'
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
    else if($('#preferensCheckboxes input[type="checkbox"]:checked').length === 0)
        alert("Du måste välja preferens på vilka du vill träffa");

    else{
        return true;
    }
}


function checkIfFirstChildImg(){
    let bild = document.querySelector("#containerBild :first-child img")

    if (bild != null)
        return true;
    else{
        return false;
    }
}








