//Questions List

let question = [
    {
        id: 1,
        category:"Sports",
        type:"multiple",
        difficulty:"easy",
        question:"The Rio 2016 Summer Olympics held closing ceremony on what date?",
        answers:[
            {text: "August 23", isCorrect: false},
            {text: "August 21", isCorrect: true},
            {text: "August 19", isCorrect: false},
            {text: "August 17", isCorrect: false}
        ]
    },
    {
        id: 2,
        category:"Sports",
        type:"multiple","difficulty":"easy",
        question:"When was the first official international game played?",
        answers:[
            {text: "1880", isCorrect: false},
            {text: "1872", isCorrect: true},
            {text: "1863", isCorrect: false},
            {text: "1865", isCorrect: false}
        ]
    },
    {   
        id: 3,
        category:"Sports",
        type:"multiple",
        difficulty:"easy",
        question:"Which African American is in part responsible for integrating  Major League baseball?",
        answers:[
            {text: "Curt Flood", isCorrect: false},
            {text: "Jackie Robinson", isCorrect: true},
            {text: "Roy Campanella", isCorrect: false},
            {text: "Satchell Paige", isCorrect: false}
        ]
    },
    {
        id: 4,
        category:"Sports",
        type:"multiple",
        difficulty:"easy",
        question:"What is the name of Manchester United home stadium?",
        answers:[
            {text: "Anfield", isCorrect: false},
            {text: "Old Trafford", isCorrect: true},
            {text: "City of Manchester Stadium", isCorrect: false},
            {text: "St James Park", isCorrect: false}
        ]
    },
    {
        id: 5,
        category:"Sports",
        type:"multiple",
        difficulty:"easy",
        question:"Who did Steven Gerrard win the Champions League with?",
        answers:[
            {text: "Real Madrid", isCorrect: false},
            {text: "Liverpool", isCorrect: true},
            {text: "Chelsea", isCorrect: false},
            {text: "Man City", isCorrect: false}
        ]
    }
]

// Function

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const quizInfoContainer = document.getElementById('quiz-info')
const quizQuestionContainer = document.getElementById('quiz-question')

const quizCategory = document.querySelector('#quiz-category span')
const quizType = document.querySelector('#quiz-type span')
const quizDifficulty = document.querySelector('#quiz-difficulty span')
const quizQuestion = document.querySelector('#question h2')
const answerButtonElement = document.getElementById('answer-button')

let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuest()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizInfoContainer.classList.remove('hide')
    quizQuestionContainer.classList.remove('hide')
    setNextQuest()
}

function setNextQuest() {
    reset()
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    quizQuestion.innerText = question.question
    quizCategory.innerText = question.category
    quizType.innerText = question.type
    quizDifficulty.innerText = question.difficulty

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.isCorrect) {
            button.dataset.isCorrect = answer.isCorrect
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    });
}

function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.isCorrect
    setStatusClass(document.body, isCorrect)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.isCorrect)
    })
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, isCorrect) {
    clearStatusClass(element)
    if (isCorrect) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}