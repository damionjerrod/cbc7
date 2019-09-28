/*
Create A Countdown Timer:
1. countdown from a number to 0
1. it needs to be visible counts
*/
var deadline = new Date("Nov 27, 2019").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = deadline - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance %(1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) /1000);
    document.getElementById("time").innerHTML = hours + "h" + minutes + "m" + seconds + "s";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("time").innerHTML = "Final Countdown";
        }
    }, 1000);