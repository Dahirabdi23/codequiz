var container = document.getElementById("container");
var header = document.querySelector("header");
var start = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var question = document.querySelector(".question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = document.getElementById("scorecontainer");
var choice = document.querySelector(".choice");
var timecontainer = document.querySelector("#timer span");
var allquestions = [{
    question: "Commonly used data types Do Not Include",
    choiceA:"strings",
    choiceB:"alerts",
    choiceC:"Numbers",
    choiceD:"booleans",
    correct:"B"
},
{
    question:"the condition in an if/else statement is enclosed within",
    choiceA:"quotes",
    choiceB:"curly brackets",
    choiceC:"square brackets",
    choiceD:"parenthesis",
    correct:"B"
},
{
    question:"arrays in javeScript can be used to store",
    choiceA:"numbers and strings",
    choiceB:"other arrays",
    choiceC:"booleans",
    choiceD:"all of the above",
    correct:"C"
}]
var lastQuestion = allquestions.length - 1;
var runningquestion = 0;
var score = 0;

function renderQuestion(){
    
    var q = allquestions[runningquestion];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceD;

}
var choices = {choiceA, choiceB, choiceC, choiceD};

function checkAnswer(answer){
    if(allquestions[runningquestion].answer === allquestions[runningquestion].choices[answer]) {
        // answer is correct
        score++;
        answerIsCorrect();
    }else{
        // answer is wrong
        timer -= 10;
        answerIsWrong();
    }
    if(runningquestion < lastQuestion){
        runningquestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(timer);
        //scorerender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningquestion);
}
function answerIsWrong(){
    document.getElementById(runningquestion);
}

var time = 60
function startQuiz() {
    document.getElementById("header").style.visibility="hidden";
    renderQuestion();
    checkAnswer();
    quiz.style.display = "block";
var timer = setInterval(countdown, 1000);
function countdown() {
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
