const questions = [
    {
        question : "mana yang benar 'dua sepuluh, empat lima'?",
        choiceA : "A. 2222222222, 44444",
        choiceB : "B. 1010, 5555",
        choiceC : "C. 2 10, 4 5",
        choiceD : "D. Salah Semua",
        correct : "B",
    },
    {
        question : "Hujan terjadi akibat...?",
        choiceA : "A. kegundahan hati",
        choiceB : "B. cewe menangis",
        choiceC : "C. panggilan katak",
        choiceD : "D. alat doraemon",
        correct : "C",
    },
    {
        question : "siapakah nama hewan peliharaan nobita?",
        choiceA : "A. Doraemon",
        choiceB : "B. Ica",
        choiceC : "C. siro",
        choiceD : "D. ajeng",
        correct : "A",
    },
    {
        question : "apakah pengertian dari halusinasi?",
        choiceA : "A. khayalan",
        choiceB : "B. tukang bubur",
        choiceC : "C. imajin",
        choiceD : "D. melihat banteng merah",
        correct : "B",
    },
    {
        question : "mengapa beras saat sudah matang dinamakan nasi?",
        choiceA : "A. dari sono-nya",
        choiceB : "B. lapar",
        choiceC : "C. takdir",
        choiceD : "D. salah semua",
        correct : "B",
    },
    {
        question : "menanam padi sebaiknya?",
        choiceA : "A. mundur",
        choiceB : "B. maju",
        choiceC : "C. maju mundur",
        choiceD : "D. kayang",
        correct : "B",
    },
    {
        question : "jika ada yang memberi pendapat saat sidang sebaiknya?",
        choiceA : "A. mendengarkan",
        choiceB : "B. mematikan mic-nya",
        choiceC : "C. tepuk tangan",
        choiceD : "D. tidur",
        correct : "A",
    },
    {
        question : "jika melihat teman jatuh sebaiknya ?",
        choiceA : "A. menendang kepalanya hingga kritis",
        choiceB : "B. menolongnya",
        choiceC : "C. menertawakannya",
        choiceD : "D. menidurinya",
        correct : "C",
    },
];

const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choice = document.querySelectorAll(".choice");
const popup = document.getElementById("popup");
const message = document.getElementById("message");
const tryAgainButton = document.getElementById("try-again1");

window.addEventListener('DOMContentLoaded', function(){
    const view = questions[currentQuestion];
    question.textContent = view.question
    choiceA.textContent = view.choiceA;
    choiceB.textContent = view.choiceB;
    choiceC.textContent = view.choiceC;
    choiceD.textContent = view.choiceD;
    
})

function showQuestion(shwquestion){
    const view = questions[shwquestion];
    question.textContent = view.question
    choiceA.textContent = view.choiceA;
    choiceB.textContent = view.choiceB;
    choiceC.textContent = view.choiceC;
    choiceD.textContent = view.choiceD;
}


let currentQuestion = 0;

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    const isCorrect = choice === question.correct;

    if (isCorrect) {
        message.textContent = "Jawaban Anda benar!";
        popup.style.backgroundColor = "green";
        popup.style.width = "60%";
        popup.style.padding = "12px";
        popup.style.borderRadius = "20px";
        popup.style.textAlign = "center";
        popup.style.color = "white";
        popup.style.fontWeight = "bold";
        popup.style.margin = "auto";
        popup.style.marginTop = "10px";
    } else {
        message.textContent = "Jawaban Anda salah!";
        popup.style.backgroundColor = "red";
        popup.style.width = "60%";
        popup.style.padding = "12px";
        popup.style.borderRadius = "20px";
        popup.style.textAlign = "center";
        popup.style.color = "white";
        popup.style.fontWeight = "bold";
        popup.style.margin = "auto";
        popup.style.marginTop = "10px";
        
    }
    
    popup.style.display = "block";
    tryAgainButton.style.display = "block";
    tryAgainButton.style.width = "30%";
    tryAgainButton.style.margin = "auto";

}

choice.forEach(button => {
    button.addEventListener('click', function() {
        const selectedchoice = this.id;
        checkAnswer(selectedchoice);
    });
});

tryAgainButton.addEventListener('click', function () {
    popup.style.display = "none";
    currentQuestion++;
    if (currentQuestion > questions.length - 1) {
        currentQuestion = 0;
    }
    showQuestion(currentQuestion);
});