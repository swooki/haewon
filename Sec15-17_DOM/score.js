// alert("connected");

let btn_one = document.querySelector("#btn-player1");
let btn_two = document.getElementById("btn-player2");
let btn_reset = document.getElementById("btn-reset");
let numInput = document.querySelector("input[type='number']")
let winningScoreDisplay = document.getElementById("winning-score");
let p1_score = 0;
let p2_score = 0;
let winningScore = 5;
let gameOver = false;

let p1_score_display = document.getElementById("player1");
let p2_score_display = document.getElementById("player2");
numInput.value = winningScore;

numInput.addEventListener("change", function() {
  winningScore = Number(numInput.value);
  reset();
})

btn_one.addEventListener("click", scorePlayer1);
p1_score_display.addEventListener("click", scorePlayer1);

btn_two.addEventListener("click", scorePlayer2);
p2_score_display.addEventListener("click", scorePlayer2);

btn_reset.addEventListener("click", reset)

function reset() {
    p1_score = 0;
    p2_score = 0;
    p1_score_display.innerHTML = p1_score;
    p2_score_display.innerHTML = p2_score;
    p1_score_display.classList.remove("winner");
    p2_score_display.classList.remove("winner");
    gameOver = false;
}

function scorePlayer1(){
    if (!gameOver) {
        p1_score++;
        if (p1_score === winningScore) {
            gameOver = true;
            p1_score_display.classList.add("winner");
        }
        p1_score_display.innerHTML = p1_score;
    }
}
function scorePlayer2() {
    if (!gameOver) {
        p2_score++;
        if (p2_score === winningScore) {
            gameOver = true;
            p2_score_display.classList.add("winner");
        }
        p2_score_display.innerHTML = p2_score;
    }
}