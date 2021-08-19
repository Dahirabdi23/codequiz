var container = document.getElementById("container");
var start = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var questionsEl = document.getElementsByClassName("Question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var timecontainer = document.querySelector("#timer span");
var header = document.querySelector("header");
var questions = [{
    questionsEl: "Commonly used data types Do Not Include",
    choiceA:"strings",
    choiceB:"alerts",
    choiceC:"Numbers",
    choiceD:"booleans",
},
{
    questionsEl:"the condition in an if/else statement is enclosed within",
    choiceA:"quotes",
    choiceB:"curly brackets",
    choiceC:"square brackets",
    choiceD:"parenthesis",
},
{
    questionsEl:"arrays in javeScript can be used to store",
    choiceA:"numbers and strings",
    choiceB:"ether arrays",
    choiceC:"booleans",
    choiceD:"all of the above",
}]
var time = 60
function startQuiz() {
    quiz.style.display = "block";
var timer = setInterval(countdown, 1000);
function countdown(params) {
    if(time > 0) {
        time-=1
        timecontainer.textContent = time;
    //console.log(time);
    } else {
        clearInterval(timer);
    }

}
}

start.addEventListener("click", startQuiz);