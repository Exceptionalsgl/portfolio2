
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

// Function to start the quiz
function startQuiz() {
    username = document.getElementById('username').value.trim(); 
    if (username === "") { 
        alert("Please enter a username.");
        return; // Exit the function if no username is entered
    }
    usernameSection.classList.add('hidden'); 
    quizSection.classList.remove('hidden'); 
    greetingElement.innerText = `Hello, ${username}! Good luck with the quiz.`; // Display a greeting message
    showNextQuestion(); 
}


// Function to show the next question
function showNextQuestion() {
    if (currentQuestionIndex >= quizData.length) { // Check if all questions have been answered
        endQuiz(); // End the quiz if all questions are answered
        return; // Exit the function
    }

    feedbackElement.innerHTML = ''; // Clear any previous feedback
    const currentQuestion = quizData[currentQuestionIndex]; // Get the current question
    questionElement.innerText = currentQuestion.question; // Display the current question
    choicesElement.innerHTML = ''; // Clear previous choices
    currentQuestion.choices.forEach(choice => { // Loop through the choices
        const button = document.createElement('button'); // Create a button for each choice
        button.innerText = choice; // Set the button text to the choice
        button.addEventListener('click', () => selectAnswer(choice)); // Add an event listener to the button
        choicesElement.appendChild(button); // Append the button to the choices element
    });
}

function showNextQuestion() {
   
}

function selectAnswer(choice) {
   
}

function endQuiz() {

}

function restartQuiz() {
    
}