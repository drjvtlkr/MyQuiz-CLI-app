var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Dheeraj? ");

var highscore = [{
        name: "Dheeraj",
        score: 6
    },
    {
        name: "lola",
        score: 5
    }
]


function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("right!!");
        score++;

    } else {
        console.log("wrong!")
    }
    console.log("current score is: ", score);
    console.log("------------------------------")
}

var questions = [{
        question: "which city do I live in? ",
        answer: "Hubli"
    },
    {
        question: "who is my favourite super hero ",
        answer: "Dr Strange"
    },
    {
        question: "who is my favourite anime protagonist? ",
        answer: "Eren Yeager"
    },
    {
        question: "what is my longing dream? ",
        answer: "Entreprenuere"
    },
    {
        question: "What is it that i belive can change the world? ",
        answer: "JavaScript"
    },
    {
        question: "Which is my favourite anime? ",
        answer: "Attack on Titan"
    }
];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your total score is: ", score);

console.log("check out the highscore: ", highscore);