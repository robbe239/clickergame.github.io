//Wenn Button geklickt wird, öffnet sich neuer Text und löscht eine Zeile
function myfunction() {
    //document.getElementById("button0").innerHTML = "Here's a button and you have clicked it!"
    document.getElementById("button1").innerHTML = "and you have clicked it!";
    //document.getElementById("button2").innerHTML = "";
}

// Variablen definiert
var score = 0; 
var clickingpower = 1;
var scorepersecond = 0;

//clicker
var clickercost = 5;
var clickers = 0;

//cursor
var cursorcost = 15;
var cursors = 0;

//cursor2
var cursor2cost = 100;
var cursors2 = 0;

//click function main button
function addToScore(amount) {
    score = score + amount;  
    document.getElementById("score").innerHTML = score;

    var T = document.getElementById("clickerbutton");
    var U = document.getElementById("clickertext");

    T.style.display = "block";
    U.style.display = "block";
}

//buy function clicker
function buyclicker() {
    if (score >= clickercost) {
        score = score - clickercost;
        clickers = clickers + 1;
        clickingpower = clickers + 1; 

        clickercost = Math.round(clickercost * 1.2);

        document.getElementById("score").innerHTML = score;
        document.getElementById("clickercost").innerHTML = clickercost;
        document.getElementById("clickers").innerHTML = clickers;
        document.getElementById("clickingpower").innerHTML = clickingpower;

        var T = document.getElementById("cursorbutton");
        var U = document.getElementById("cursortext");
        var V = document.getElementById("power");

        T.style.display = "block";
        U.style.display = "block";
        V.style.display = "block";
    }
}

//buy function Cursor
function buycursor() {
    if (score >= cursorcost) {
        score = score - cursorcost;
        cursors = cursors + 1;

        cursorcost = Math.round(cursorcost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorcost").innerHTML = cursorcost;
        document.getElementById("cursors").innerHTML = cursors;
        updateScorePerSecond();

        var T = document.getElementById("cursor2button");
        var U = document.getElementById("cursor2text");
        var V = document.getElementById("cursor2text2");
        var W = document.getElementById("textgone");
        var X = document.getElementById("textgone2");

        T.style.display = "block";
        U.style.display = "block";
        V.style.display = "block";  
        W.style.display = "none";
        X.style.display = "none";     
    }
}

//buy function Cursor2
function buycursor2() {
    if (score >= cursor2cost) {
        score = score - cursor2cost;
        cursors2 = cursors2 + 1;

        cursor2cost = Math.round(cursor2cost * 1.25);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cursor2cost").innerHTML = cursor2cost;
        document.getElementById("cursors2").innerHTML = cursors2;
        updateScorePerSecond();

        //var T = document.getElementById("cursor3button");
        var U = document.getElementById("cursor3text");

        //T.style.display = "block";
        U.style.display = "block";
    }
}

//function of all cursors over time
setInterval(function(){
    score = score + cursors;
    score = score + cursors2 * 5;
    document.getElementById("score").innerHTML = score
}, 1000); // 1000ms = 1 second

//score per second 
function updateScorePerSecond() {
    scorepersecond = cursors + cursors2 * 5;
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
}

//save and load function
function savegame() {
    var gameSave = {
        score: score,
        clickingpower: clickingpower,
        cursorcost: cursorcost,
        cursors: cursors,
        clickercost: clickercost,
        clickers: clickers,
        cursor2cost: cursor2cost,
        cursors2: cursors2
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    window.alert("game Saved");
}

function loadgame() {
    var gamesave = JSON.parse(localStorage.getItem(gameSave));
    if (typeof savegame.score !== "undefined") score = savegame.score;
    if (typeof savegame.clickingpower !== "undefined") clickingpower = savegame.clickingpower;
    if (typeof savegame.cursorcost !== "undefined") cursorcost = savegame.cursorcost;
    if (typeof savegame.cursors !== "undefined") cursors = savegame.clickingpower;
    if (typeof savegame.clickercost !== "undefined") clickercost = savegame.clickingpower;
    if (typeof savegame.clickers !== "undefined") clickers = savegame.clickingpower;
    if (typeof savegame.cursor2cost !== "undefined") cursor2cost = savegame.clickingpower;
    if (typeof savegame.cursors2 !== "undefined") cursors2 = savegame.clickingpower;
}

setInterval(function() {
    savegame();
}, 30000); // 30000ms = 30 seconds

window.onload = function() {
    loadgame();
    updateScorePerSecond();
    document.getElementById("score").innerHTML = score;
    document.getElementById("clickercost").innerHTML = clickercost;
    document.getElementById("clickers").innerHTML = clickers;
    document.getElementById("clickingpower").innerHTML = clickingpower;
    document.getElementById("cursorcost").innerHTML = cursorcost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("cursor2cost").innerHTML = cursor2cost;
    document.getElementById("cursors2").innerHTML = cursors2;
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) { // ctrl +s
        event.preventDefault();
        savegame();
        }
    }, false)