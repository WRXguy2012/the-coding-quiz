function buildQuiz(){
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
        }
  
        // add this question and its answers to the output
        output.push(
            `<div class="slide">
              <div class="question" id='questS'> ${currentQuestion.question} </div>
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
    resultsContainer.innerHTML = (`<div> 
                            <p> You got ${numCorrect} out of ${myQuestions.length} </p>
                            </div>`);
                          
                            if (oldScore !== null) {
                              document.getElementById("savedName").innerHTML = oldScore.name;
                              document.getElementById("savedScore").innerHTML = oldScore.score;
                              // document.getElementById("saved-date").innerHTML = oldScore.date;
                              } else {
                                return;
                              };
                            
                          

                            saveBtn.addEventListener("click", function(event) {
                              event.preventDefault();
                              // saveScore();
                              // allScore();
                              var score = {
                                name: userName.value,
                                score: numCorrect,
                                // date: date.value,
                              };
                            // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
                            localStorage.setItem("score", JSON.stringify(score));

                           
  // Check if data is returned, if not exit out of the function
                            });
                          };

                          

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    // if(currentSlide === 0){
    //   previousButton.style.display = 'none';
    // }
    // else{
    //   previousButton.style.display = 'inline-block';
    // }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
}

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.innerHTML = (`<div class='w3-row' id='timeSty'><div class="w3-center w3-card-4 w3-round-large w3-third w3-col m4 13" id='timeB'><p id='timeTxt'>Time Remaining: ${secondsLeft}</p></div></div>`);
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        questBody.style.display = 'none';
        timeEl.style.display = 'none';
        theScores.style.display = 'block';
        // Calls function to create and append image
        showResults();
      }
      else{
        theScores.style.display = 'none';
      }
  
    }, 1000);
  }

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var timeEl = document.getElementById("theTime");
const questBody = document.getElementById('questBody');
const theScores = document.getElementById("theScores");
var oldScore = JSON.parse(localStorage.getItem("score"));
// var mainEl = document.getElementById("main");
var secondsLeft = 10;
const myQuestions = [
    {
      question: "This is the first question?",
      answers: {
        a: "This",
        b: "The Other",
        c: "Maybe Not"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
  
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);


// Event listeners
submitButton.addEventListener('click', showResults);
// previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// setTimeout(showResults, 28000);
// setInterval(updateTimer, 1000);

setTime();

var userName = document.getElementById("name");
// const date = new date();
const saveBtn = document.getElementById('saveScore');

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



