const cells = document.querySelectorAll(`.row >div`);

let winningText = document.querySelector(`h2`);

const resetButton = document.getElementById("reset-button");

let playerTurn = "playerOne";

let turnCount = 0;

resetButton.addEventListener("click", resetGame);

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', onClick);
};

function checkWin() {
    if (cells[0].textContent + cells[1].textContent + cells[2].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[3].textContent + cells[4].textContent + cells[5].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[6].textContent + cells[7].textContent + cells[8].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[0].textContent + cells[3].textContent + cells[6].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[1].textContent + cells[4].textContent + cells[7].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[2].textContent + cells[5].textContent + cells[8].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[0].textContent + cells[4].textContent + cells[8].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[2].textContent + cells[4].textContent + cells[6].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[0].textContent + cells[1].textContent + cells[2].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[3].textContent + cells[4].textContent + cells[5].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[6].textContent + cells[7].textContent + cells[8].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[0].textContent + cells[3].textContent + cells[6].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[1].textContent + cells[4].textContent + cells[7].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[2].textContent + cells[5].textContent + cells[8].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[0].textContent + cells[4].textContent + cells[8].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (cells[2].textContent + cells[4].textContent + cells[6].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
       resetButton.style.display = "block";
    } else if (turnCount === 9) {
        winningText.textContent = "DRAW";
        resetButton.style.display = "block";
    }
};

function onClick() {
    turnCount++
    if ((event.target.textContent === "") && (playerTurn === "playerOne")) {
        event.target.textContent = "X";
        playerTurn = "playerTwo";
        checkWin();
    } else if (event.target.textContent === "" && playerTurn === "playerTwo") {
        event.target.textContent = "O";
        playerTurn = "playerOne";
        checkWin();
    }
};

function resetGame() {
    turnCount = 0;
    playerTurn = "player1";
    cells.forEach(function (cell) {
        cell.textContent = "";    
    })
    winningText.textContent = "";
    resetButton.style.display  = "none";
};