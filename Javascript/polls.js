let poll = {
    quiz: "What is your favorite Platform?",
    answers: [
        "PC", "Playstation", "XBox", "Nintendo", "Mobile"
    ],
    pollCount: 200,
    answersWeight: [40, 40, 20, 10],
    selectedAnswer: -1
};

let pollDOM = {
    quiz: document.querySelector(".poll .quiz"),
    answers: document.querySelector(".poll .answers")
};

pollDOM.quiz.innerText = poll.quiz;