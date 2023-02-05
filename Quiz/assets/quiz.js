// Functions

// start quiz 
function buildQuiz() {
  const output = [];

  // pull question and answers from data
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
      );
    }

    // add HTML with specific question info
    output.push(
      `<div class="slide">
              <div class="question" id='questS'> ${
                currentQuestion.question
              } </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

// retrieve and display user results
function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  // check and keep track of user score
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
    }
  });

  // show results in HTML
  resultsContainer.innerHTML = `<div class="w3-row w3-center w3-mobile w3-margin"> 
                            <p id="con"> Good Job! </p>
                            <p id="resSty"> You got ${numCorrect} out of ${myQuestions.length} correct!</p>
                            </div>`;

  // save user score in local storage
  if (oldScore !== null) {
    document.getElementById("savedName").innerHTML = oldScore.name;
    document.getElementById("savedScore").innerHTML = oldScore.score;
  } else {
    return;
  }

    saveBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var score = {
        name: userName.value,
        score: numCorrect,
     };
    
    localStorage.setItem("score", JSON.stringify(score));
  });
}

// advance through questions
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

// timer
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.innerHTML = `<div class='w3-row' id='timeSty'><div class="w3-center w3-card-4 w3-round-large w3-third w3-col m4 13 w3-ios-gray"><p id='timeTxt'>Time Remaining: ${secondsLeft}</p></div></div>`;

    // hide timer
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      questBody.style.display = "none";
      timeEl.style.display = "none";
      theScores.style.display = "block";
      showResults();
    } else {
      theScores.style.display = "none";
    }
  }, 1000);
}

// Variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
var timeEl = document.getElementById("theTime");
const questBody = document.getElementById("questBody");
const theScores = document.getElementById("theScores");
var oldScore = JSON.parse(localStorage.getItem("score"));
var secondsLeft = 10;
const myQuestions = [
  {
    question: "This is the first question?",
    answers: {
      a: "This",
      b: "The Other",
      c: "Maybe Not",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// Event listeners
submitButton.addEventListener("click", showResults);
// previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// setTimeout(showResults, 28000);
// setInterval(updateTimer, 1000);

setTime();

var userName = document.getElementById("name");
// const date = new date();
const saveBtn = document.getElementById("saveScore");

// function saveScore() {
//   // Save related form data as an object
//   var score = {
//     name: userName.value,
//     score: numCorrect.value,
//     date: date.value,
//   };
//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("score", JSON.stringify(score));
// }

// function allScore() {
// Use JSON.parse() to convert text to JavaScript object
// var oldScore = JSON.parse(localStorage.getItem("score"));
// // Check if data is returned, if not exit out of the function
// if (oldScore !== null) {
// document.getElementById("saved-name").innerHTML = oldScore.name;
// document.getElementById("saved-score").innerHTML = oldScore.score;
// // document.getElementById("saved-date").innerHTML = oldScore.date;
// } else {
//   return;
// }
