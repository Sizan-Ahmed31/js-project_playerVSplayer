const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDisplay = document.getElementById('p2Score');
const wScoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');
let p1Score = 0;
let p2Score = 0;
const winningScore = 5;
let gameOver = false;

p1Btn.addEventListener("click", () => {
    // data change
    p1Score++;
    if (p1Score === winningScore) {
        // gameOver
        p1Btn.setAttribute("disabled", "disabled")
        p2Btn.setAttribute("disabled", "disabled")
    }
    // show change data
    p1ScoreDisplay.textContent = p1Score;

})

p2Btn.addEventListener("click", () => {
    // data change
    p2Score++;
    if (p2Score === winningScore) {
        // gameOver
        p1Btn.setAttribute("disabled", "disabled")
        p2Btn.setAttribute("disabled", "disabled")
    }
    // show change data
    p2ScoreDisplay.textContent = p2Score;

})

// pBtn1.addEventListener("click", function() {
//     if (!gameOver) {
//         p1Score++;
//         player1.textContent = p1Score;
//         winner(p1Score, winningScore)

//     }

// })

// pBtn2.addEventListener("click", function() {
//     if (!gameOver) {
//         p2Score++;
//         player2.textContent = p2Score;
//         winner(p2Score, winningScore)
//     }

// })

// function winner(oldScore, winningScore) {
//     if (oldScore === winningScore) {
//         gameOver = true;
//         console.log("game over");
//         pBtn1.setAttribute('disabled', 'disabled');
//         pBtn2.setAttribute('disabled', 'disabled');
//     }
// }

// resetBtn.addEventListener("click", function() {
//     p1Score = 0;
//     p2Score = 0;
//     gameOver = false;
//     player1.textContent = p1Score;
//     player2.textContent = p2Score;
//     pBtn1.removeAttribute('disabled');
//     pBtn2.removeAttribute('disabled');

// })