// Array holding the quiz questions, answers and images
const quizData = [
    {
        question: "What is the capital of Ireland?",
        choices: ["New York", "Dublin", "Paris", "Abuja"],
        correct: "Dublin",
        image: "path/to/dublin.jpg"
    },
    {
        question: "Who wrote romeo and juliet?",
        choices: ["Williams Shakespeare", "J.K. Rowling", "Mark Twain", "kenneth hegan"],
        correct: "Williams Shakespeare",
        image: "path/to/book.jpg"
    },
];

// Variables to keep track of questions and username
let currentQuestionIndex = 0;
let score = 0;
let username = "";
let wrong = 0;
let right = 0;



// DOM elements for quiz section
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
const correctElement = document.getElementById('right');
const incorrectElement = document.getElementById('wrong');


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
    greetingElement.innerText = `Hello, ${username}! Good luck with the quiz.`; 
    currentQuestionIndex = 0; 
    score = 0; 
    scoreElement.innerText = score; 
    wrong = 0;
    incorrectElement.innerText = wrong; 
    right = 0;
    correctElement.innerText = right; 
    nextQuestionButton.style.display = 'none'; 
    showNextQuestion(); 
}

// Function to show the next question
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

// Function to handle answer selection
function selectAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex]; 
    if (choice === currentQuestion.correct) { 
        score++;
        right++; 
        feedbackElement.innerHTML = `Correct! <img src="${currentQuestion.image}" alt="correct image">`; 
    } else {
        feedbackElement.innerHTML = `Incorrect! The correct answer was ${currentQuestion.correct}. <img src="${currentQuestion.image}" alt="incorrect image">`;
        wrong++; 
    }
    scoreElement.innerText = score; 
    incorrectElement.innerText = wrong; 
    correctElement.innerText = right; 
    currentQuestionIndex++; 
    nextQuestionButton.style.display = 'block'; 
}

// Function to end the quiz
function endQuiz() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden'); 
    finalScoreElement.innerText = `${username}, your final score is ${score} out of ${quizData.length}.`; 
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0; 
    username = ""; 
    wrong = 0;
    right = 0;
    scoreElement.innerText = score;
    usernameSection.classList.remove('hidden'); 
    resultSection.classList.add('hidden'); 
    quizSection.classList.add('hidden'); 
    document.getElementById('username').value = ''; 
    nextQuestionButton.style.display = 'none'; // Ensure the next question button is hidden
    feedbackElement.innerHTML = ''; // Clear feedback on restart
}


