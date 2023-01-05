const allBtn = document.getElementByClass("theBtns");
function start() {
  // const startMenu = getElementById('startMenu'
  const allBtn = document.getElementByClass("theBtns");
  if (allBtn.style.display === "none") {
    allBtn.style.display = "block";
  } else {
    allBtn.style.display = "none";
    };
function buildQuiz(){
    // const startMenu = document.getElementById('startMenu');
    // startMenu.style.display = 'none';
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        };
  
        // add this question and its answers to the output
        output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  };

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  };

function showSlide(n) {
    slide[currentSlide].classList.remove('active-slide');
    slide[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slide.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  };
// const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    showSlide(currentSlide + 1);
  };
  
function showPreviousSlide() {
    showSlide(currentSlide - 1);
  };

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// const startMenu = document.getElementById('startMenu');
// const slides = document.querySelectorAll(".slide");

const myQuestions = [
  {
        question: "Text of question 1",
        answers: {
            A: "answer 1",
            B: "answer 2",
            C: "answer 3",
            D: "answer 4",
        },
        correctAnswer: "A",
    },
    {
        question: "Text of question 2",
        answers: {
            A: "answer 1",
            B: "answer 2",
            C: "answer 3",
            D: "answer 4",
        },
        correctAnswer: "B",
    },
    {
        question: "Text of question 3",
        answers: {
            A: "answer 1",
            B: "answer 2",
            C: "answer 3",
            D: "answer 4",
        },
        correctAnswer: "C",
    },
    {
        question: "Text of question 4",
        answers: {
            A: "answer 41",
            B: "answer 42",
            C: "answer 43",
            D: "answer 44",
        },
        correctAnswer:"D",
    },
];
// const startButton = document.getElementById("start");
// startButton.addEventListener('click', buildQuiz);
buildQuiz();
// const startMenu = document.getElementById("startMenu");
// const startButton = document.getElementById("start");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slide = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// startButton.addEventListener('click', buildQuiz);
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
}