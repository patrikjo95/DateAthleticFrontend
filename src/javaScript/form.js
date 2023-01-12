const Dagar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];// index => month [0-11]


console.log("Hej")
$(document).ready(function(){
    let i;
    let option = '<option value="dag">dag</option>';
    const selectedDay = "dag";
    for (i = 1; i <= Dagar[0]; i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#dag').append(option);
    $('#dag').val(selectedDay);

    option = '<option value="månad">månad</option>';
    let selectedMon = "månad";
    for (i = 1; i <= 12; i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#månad').append(option);
    $('#månad').val(selectedMon);

    let d = new Date();
    option = '<option value="år">år</option>';
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
        let option = '<option value="dag">dag</option>';
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
    let option = '<option value="dag">dag</option>';
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