/* let poll = {
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

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndiactor = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for(let i=0; i<tabsPane.length;i++){
    tabsPane[i].addEventListener("click", function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div").classList.add("active");

        tabIndiactor.style.left = 'calc(calc(100% / 2) * ${i})'
    });
} */

const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".contents");

tabs.forEach((tab, index) =>{
    tab.addEventListener("click", () =>{

        // To remove active class from previous tab
        tabs.forEach((tab) => tab.classList.remove("active"));

        tab.classList.add("active");

        // To Show content ccording to the selected tab

        // To hide previous tab content
        contents.forEach((c) => c.classList.remove("active"));

        contents[index].classList.add("active");
    });
});



// To run the animation intially when the page loads
tabs[0].click();
