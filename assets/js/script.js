
const possiboleWines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let player1 = {
    name: "Player 1",
    value: "X",
    score: 0,
    squers: []
};
let player2 = {
    name: "coumputer",
    value: "O",
    score: 0,
    squers: []
};
let currentPlayer = player1;
let gameOver = false;
let board = document.querySelectorAll('.cell');
//add event listener to each cell

board.forEach((cell,index) => {
    cell.setAttribute('name', index);
      
cell.addEventListener('click', () => {
    if (cell.innerHTML === "" && !gameOver) {
        cell.innerHTML = currentPlayer.value;
        currentPlayer.squers.push(cell.getAttribute('name'));
       
        if (currentPlayer === player1) {
            cell.classList.add('cellX');
            currentPlayer = player2;

        }else {
            cell.classList.add('cellO');
            currentPlayer = player1;
        }

       
    }
    });
});
//add event listener to reset button
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    board.forEach((cell) => {
        cell.innerHTML = "";
        cell.classList.remove('cellX');
        cell.classList.remove('cellO');
    });
    player1.squers = [];
    player2.squers = [];
    currentPlayer = player1;
    gameOver = false;
});
console.log(player1);
console.log(player2);

