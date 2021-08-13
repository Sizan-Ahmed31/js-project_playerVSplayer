const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDisplay = document.getElementById('p2Score');
const wScoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
let resetBtn = document.getElementById('resetBtn');
let p1Score = 0;
let p2Score = 0;
const winningScore = 5;
let gameOver = false;

p1Btn.addEventListener("click", () => {

    if (!gameOver) {
        p1Score++;
        winner(p1Score, winningScore)
        p1ScoreDisplay.textContent = p1Score;
    }


})

p2Btn.addEventListener("click", () => {

    if (!gameOver) {
        p2Score++;
        winner(p2Score, winningScore)
        p2ScoreDisplay.textContent = p2Score;
    }

})

resetBtn.addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
})

function winner(oldScore, winningScore) {
    if (oldScore === winningScore) {
        gameOver = true
        p1Btn.setAttribute("disabled", "disabled")
        p2Btn.setAttribute("disabled", "disabled")
    }
}