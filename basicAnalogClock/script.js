const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();

let hrPosition = date.getHours()*360/12 + date.getMinutes()*360/60/12;
let minPosition = date.getMinutes()*360/60 + date.getSeconds()*360/3600;
let secPosition = date.getSeconds()*360/60;

function runTheClock(){

  hrPosition = hrPosition + 30/3600;
  minPosition = minPosition + 6/60;
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate("+hrPosition+"deg)"
  MINUTEHAND.style.transform = "rotate("+minPosition+"deg)"
  SECONDHAND.style.transform = "rotate("+secPosition+"deg)"
}

var interval = setInterval(runTheClock,1000);
