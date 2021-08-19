var container = document.getElementById("container");
var start = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var questions = document.getElementsByClassName("Question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var time = 60
var timer = setInterval(countdown, 1000);
function countdown(params) {
    if(time > 0) {
        time-=1
    console.log(time);
    } else {
        clearInterval(timer);
    }

}
