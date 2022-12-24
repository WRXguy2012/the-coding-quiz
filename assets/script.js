const questList = [{
        id: 0,
        num: "Question 1",
        quest: "Text of question 1",
        ans: [
            {A: "answer 1", isCorrect: true},
            {B: "answer 2", isCorrect: false},
            {C: "answer 3", isCorrect: false},
            {D: "answer 4", isCorrect: false},
        ]
    },
    {
        id: 1,
        num: "Question 2",
        quest: "Text of question 2",
        ans: [
            {A: "answer 1", isCorrect: false},
            {B: "answer 2", isCorrect: true},
            {C: "answer 3", isCorrect: false},
            {D: "answer 4", isCorrect: false},
        ]
    },
    {
        id: 2,
        num: "Question 3",
        quest: "Text of question 3",
        ans: [
            {A: "answer 1", isCorrect: false},
            {B: "answer 2", isCorrect: false},
            {C: "answer 3", isCorrect: true},
            {D: "answer 4", isCorrect: false},
        ]
    },
    {
        id: 3,
        num: "Question 4",
        quest: "Text of question 4",
        ans: [
            {A: "answer 1", isCorrect: false},
            {B: "answer 2", isCorrect: false},
            {C: "answer 3", isCorrect: false},
            {D: "answer 4", isCorrect: true},
        ]
    }
]

const start = document.getElementById('start');
// const questNum = document.getElementById('questNum');
// const quest = document.getElementById('question');
// const ans1 = document.getElementById('a1');
// const ans2 = document.getElementById('a2');
// const ans3 = document.getElementById('a3');
// const ans4 = document.getElementById('a4');
const results = document.getElementById('result');
const submit = document.getElementById('submit');

function buildQuiz() {
    const output = [];
    questList.forEach(
        (currentQuest, num) => {
            const ans = [];
            for (letter in currentQuest.ans) {
                ans.push(
                    `<label>
                        <input type="radio" name= "quest${num}" value="${letter}">
                        ${letter} :
                        ${currentQuest.ans[letter]}
                    </label>`
                );
            }
                output.push(
                    `<div class="question> ${currentQuest.question}</div>
                    <div class="ans"> ${ans.join('')} </div>`

                );
            }
        );
    start.innerHTML = output.join('');
};


function showResult() {
    const answer = start.querySelectorAll('ans');
    let numCorret = 0;
    questList.forEach((currentQuest, num) => {
        const answer = ans[num];
        const selector = `input[name=quest${num}]:checked`;
        const userAnswer = (answer.querySelector(selector) || {}).value;
        if( === true)
    }

    )
};

start.addEventListener('click', buildQuiz);
submit.addEventListener('click', nextQuest);

