//countdown timer

window.onload = function(){ 
    
var h1 = document.getElementsByTagName('h1')[0];
var h2 = document.getElementsByTagName('h2')[0];
var start = document.getElementById('startbutton');
var stop = document.getElementById('stopbutton');
var reset = document.getElementById('resetbutton');
var doubletime = document.getElementById('doubleup');
var seconds = 0;
var minutes = 0; 
var hours = 0;
var time;

function up() {
    seconds = seconds +1;
    if (seconds >= 60) {
        seconds = 0;
        minutes = minutes +1;
        if (minutes >= 60) {
            minutes = 0;
            hours = hours +1;
        }
    }
    
   //h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
    refresh();
    display();
    //speed();
}
    
function refresh() {
        h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);  
    
}
    
function display() {
    h2.textContent = "0" +(hours) + ":" + "0" + (minutes) + ":" + "0" +(seconds);  
}


function timer() {
    time = setTimeout(up, 1000); // instructs function to run every 1000 milliseconds
}
timer();
    
function speed() {
    time = setTimeout(up, 2000); // this function delays the function from refresh to every two sections - it doesnt speed up!
}
//speed();


// start
start.onclick = timer;
    
// doublespeed
//doubletime.onclick = speed;

// stop
stop.onclick = function() {
    clearTimeout(time);
}

// reset
reset.onclick = function() {
    seconds = 0; minutes = 0; hours = 0;
    refresh();
}


}