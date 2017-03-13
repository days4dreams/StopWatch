//countdown timer

window.onload = function(){ 
    
var h2 = document.getElementsByTagName('h2')[0];
var start = document.getElementById('startbutton');
var stop = document.getElementById('stopbutton');
var reset = document.getElementById('resetbutton');
var doubletime = document.getElementById('doubletime');
var seconds = 0;
var minutes = 0; 
var hours = 0;
var time;
//var secondsOutput = 0;
//var minutesOutput = 0;
//var hoursOutput = 0;

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
    display(); 
}


function refreshSeconds()
{
    var secondsOutput = "";
    
    if (seconds <= 9){
        secondsOutput = "0" + seconds;
    }
    
    else {
        secondsOutput = seconds;
    }
    return secondsOutput;
}

function refreshMinutes()
{
    var minutesOutput = "";
    
    if (minutes >1 && minutes <9){
        minutesOutput = "0" + minutes;
    }
    
    else if (minutes >9){
        minutesOutput = minutes;
    }
    else {
        minutesOutput = "00"
    }
    return minutesOutput;
}

function refreshHours()
{
    var hoursOutput = "";
    if (hours >1 && hours <9){
        hoursOutput = "0" + hours;
    }
    
    else if (hours >9){
        hoursOutput = hours;
    }
    
    else {
        hoursOutput = "00"
    }
    return hoursOutput;
}
    
function display() {
    h2.textContent = refreshHours() + ":" + refreshMinutes() + ":" + refreshSeconds();  
}


function timer() {
    time = setTimeout(up, 1000); // instructs function to run every 1000 milliseconds
}
timer();
    
// start button
start.onclick = timer;

// stop button
stop.onclick = function() {
    clearTimeout(time);
}

// reset button
reset.onclick = function() {
    seconds = 0; minutes = 0; hours = 0;
    display();
}

// speed up button
doubletime.onclick = function () {
    time = setTimeout(up, 500); // this function delays the function from refresh to every two sections - it doesnt speed up!
}



}