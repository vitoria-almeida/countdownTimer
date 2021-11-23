const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const minutes1 = document.getElementById("mins");
const seconds1 = document.getElementById("secs");

const newYearsEve = "31 Dec 2021";

function countdownT(){
    const newYearsEveDate = new Date(newYearsEve);
    const currentDate = new Date();

    const totalSeconds = (newYearsEveDate - currentDate) / 1000;

    const days2 = Math.floor(totalSeconds / 3600 / 24);
    const hours2 = Math.floor(totalSeconds / 3600) % 24;
    const minutes2 = Math.floor(totalSeconds / 60) % 60;
    const seconds2 = Math.floor(totalSeconds) % 60;

    days1.innerHTML = days2;
    hours1.innerHTML = formatTime(hours2);
    minutes1.innerHTML = formatTime(minutes2);
    seconds1.innerHTML = formatTime(seconds2);  
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdownT();

setInterval(countdownT, 1000);