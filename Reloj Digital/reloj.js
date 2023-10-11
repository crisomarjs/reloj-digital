//funcion donde determinaremos la hora y fecha
function startTime(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //determinamos se es am o pm
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    //al ser fromato solo 12hrs si llega a este numero va ir restando 12
    hr = (hr > 12) ? hr - 12: hr;
    //aseguramos que todos los digitos sena de 2 ejemplo "4" pase a "04"
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function() {startTime()}, 500);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}