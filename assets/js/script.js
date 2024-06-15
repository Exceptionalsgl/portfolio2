
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
        return; 
    }
    usernameSection.classList.add('hidden'); 
    quizSection.classList.remove('hidden'); 
    greetingElement.innerText = `Hello, ${username}! Good luck with the quiz.`; // Display a greeting message
    showNextQuestion(); 
}


//  Show the next question function
function showNextQuestion() {
    if (currentQuestionIndex >= quizData.length) { 
        endQuiz();
        return;
    }

    feedbackElement.innerHTML = ''; 
    const currentQuestion = quizData[currentQuestionIndex]; 
    questionElement.innerText = currentQuestion.question; 
    choicesElement.innerHTML = ''; 
    currentQuestion.choices.forEach(choice => { 
        const button = document.createElement('button'); 
        button.innerText = choice; 
        button.addEventListener('click', () => selectAnswer(choice)); 
        choicesElement.appendChild(button); 
    });
}


// Answer selection function
function selectAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex]; 
    if (choice === currentQuestion.correct) { 
        score++;
        feedbackElement.innerHTML = `Correct! <img src="${currentQuestion.image}" alt="correct image">`; // Display correct feedback with image
    } else {
        feedbackElement.innerHTML = `Incorrect! The correct answer was ${currentQuestion.correct}. <img src="${currentQuestion.image}" alt="incorrect image">`; // Display incorrect feedback with image
    }
    scoreElement.innerText = score; 
    currentQuestionIndex++; 
    nextQuestionButton.style.display = 'block'; 
}


// End the quiz function
function endQuiz() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden'); 
    finalScoreElement.innerText = `${username}, your final score is ${score} out of ${quizData.length}.`; // Display the final score
}

function restartQuiz() {
    
}