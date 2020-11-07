

var quizBlock = document.getElementById("quiz");
var resultsBlock = document.getElementById("results");
var submitButton = document.getElementById("submit");

function theQuiz() {
    var output = [];
    questions.forEach(currentQ, qNumber); {
        
quizBlock.innerHTML = output.join("");


function showResults() {

}

theQuiz();

submitButton.addEventListener("click", showResults);

var questions = [ {
    question: "What year was javascript created?",
    answers: {
        a: "1999",
        b: "1985",
        c: "1995",
        d: "1989"
    },
    correctAnswer: "c"
    },
{   question: "What does API stand for?",
    answers:{
        a: "Associated Press Institute",
        b: "Application Programming Interface",
        c: "Angular Precision Index",
        d: "Application Plus Interface"
    },
    correctAnswer: "b"
    },
{   question: "What does Peter Piper pack?",
    answers: {
        a: "Sandwiches",
        b: "Popcorn",
        c: "Pineapple",
        d: "Pickles"
    },
    correctAnswer: "d"
    },
{   question: "What is the name of our class instructor?",
    answers: {
        a: "Calvin",
        b: "Brennan",
        c: "Fernando",
        d: "Daniel",
    },
    correctAnswer: "a"
    }
]}