function displayTimer() {
    let dateTime= new Date();
    let hours= dateTime.getHours();
    let min= dateTime.getMinutes();
    let second= dateTime.getSeconds();
    let session = document.getElementById("session");
if(hours>=12){
    session.innerHTML="PM";
}else{
    session.innerHTML="AM";
}

if (hours>12) {
    hours=hours-12;
}
if (hours <10){
    hours= "0"+hours;
}







    
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=second;

}
setInterval(displayTimer,10);
