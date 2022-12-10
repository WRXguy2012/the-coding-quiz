const qList = [{
        id: 0,
        num: "Question 1",
        q: "Text of question 1",
        a: [
            {text1: "answer 1", isCorrect: true},
            {text2: "answer 2", isCorrect: false},
            {text3: "answer 3", isCorrect: false},
            {text4: "answer 4", isCorrect: false},
        ]
    },
    {
        id: 1,
        num: "Question 2",
        q: "Text of question 2",
        a: [
            {text1: "answer 1", isCorrect: false},
            {text2: "answer 2", isCorrect: true},
            {text3: "answer 3", isCorrect: false},
            {text4: "answer 4", isCorrect: false},
        ]
    },
    {
        id: 2,
        num: "Question 3",
        q: "Text of question 3",
        a: [
            {text1: "answer 1", isCorrect: false},
            {text2: "answer 2", isCorrect: false},
            {text3: "answer 3", isCorrect: true},
            {text4: "answer 4", isCorrect: false},
        ]
    },
    {
        id: 3,
        num: "Question 4",
        q: "Text of question 4",
        a: [
            {text1: "answer 1", isCorrect: false},
            {text2: "answer 2", isCorrect: false},
            {text3: "answer 3", isCorrect: false},
            {text4: "answer 4", isCorrect: true},
        ]
    }
]

const startQuiz = function() {
    console.log(quest)
    const questNum = document.getElementById('questNum');
    const question = document.getElementById('question');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');
    const a4 = document.getElementById('a4');
    questNum.textContent = qList.num;
    question.textContent = qList.q;
    a1.textContent = qList.a.text1;
    a2.textContent = qlist.a.text2;
    a3.textContent = qlist.a.text3;
    a4.textContent = qlist.a.text4;

}
