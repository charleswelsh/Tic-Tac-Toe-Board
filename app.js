let cells = document.querySelectorAll(`.row >div`);

let winningText = document.querySelector(`h2`);

let playerTurn = "playerOne";

let btnDiv = document.getElementById('buttonDiv')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', onClick);
};

function checkWin() {
    if (cells[0].textContent + cells[1].textContent + cells[2].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[3].textContent + cells[4].textContent + cells[5].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[6].textContent + cells[7].textContent + cells[8].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[0].textContent + cells[3].textContent + cells[6].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[1].textContent + cells[4].textContent + cells[7].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[2].textContent + cells[5].textContent + cells[8].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[0].textContent + cells[4].textContent + cells[8].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[2].textContent + cells[4].textContent + cells[6].textContent === "XXX") {
        winningText.textContent = "X WINS!!!";
        showButton()
    } else if (cells[0].textContent + cells[1].textContent + cells[2].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[3].textContent + cells[4].textContent + cells[5].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[6].textContent + cells[7].textContent + cells[8].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[0].textContent + cells[3].textContent + cells[6].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[1].textContent + cells[4].textContent + cells[7].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[2].textContent + cells[5].textContent + cells[8].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[0].textContent + cells[4].textContent + cells[8].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    } else if (cells[2].textContent + cells[4].textContent + cells[6].textContent === "OOO") {
        winningText.textContent = "O WINS!!!";
        showButton()
    };
};

function showButton() {
    let btn = document.createElement('button')
    btn.className += 'restart-btn'
    btnDiv.appendChild(btn)
    btn.innerText = 'Rematch?'
    btn.addEventListener('click', function () {
        restart()
    })
}

function restart() {
    cells.forEach(cell => {
        cell.textContent = ''
        playerTurn = 'playerOne'
        winningText.textContent = ''
    })
}

function onClick() {
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