
// Array holding the quiz questions, choices, correct answers, and associated images
const quizData = [
    {
        question: "What is the capital of Ireland?",
        choices: ["New York", "Dublin", "Paris", "Abuja"],
        correct: "Dublin",
        image: "path/to/paris.jpg"
    },
    {
        question: "Who wrote romeo and juliet?",
        choices: ["Williams Shakespeare ", "J.K. Rowling", "Mark Twain", "kenneth hegan"],
        correct: "Williams Shakespeare",
        image: "path/to/book.jpg"
    },
   
];

// Variables to keep track of the current question index, score, and username
let currentQuestionIndex = 0;
let score = 0;
let username = "";

// Dom element for quiz section
const usernameSection = document.getElementById('username-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const startQuizButton = document.getElementById('start-quiz');
const nextQuestionButton = document.getElementById('next-question');
const restartQuizButton = document.getElementById('restart-quiz');
const greetingElement = document.getElementById('greeting');


// Event listeners for click buttons
startQuizButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', showNextQuestion);
restartQuizButton.addEventListener('click', restartQuiz);

function startQuiz() {
   
}

function showNextQuestion() {
   
}

function selectAnswer(choice) {
   
}

function endQuiz() {

}

function restartQuiz() {
    
}