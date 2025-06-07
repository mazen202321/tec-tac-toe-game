const possiboleWines = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
];

let player1 = {
  name: "Player 1",
  value: "X",
  score: 0,
  squers: [],
};
let player2 = {
  name: "coumputer",
  value: "O",
  score: 0,
  squers: [],
};
let currentPlayer = player1;
let gameOver = false;
let board = document.querySelectorAll(".cell");
//add event listener to each cell

board.forEach((cell, index) => {
  cell.setAttribute("name", index);

  cell.addEventListener("click", () => {
    if (cell.innerHTML === "" && !gameOver) {
      cell.innerHTML = currentPlayer.value;
      currentPlayer.squers.push(cell.getAttribute("name"));

      if (currentPlayer === player1) {
        cell.classList.add("cellX");
      } else {
        cell.classList.add("cellO");
      }
      checkWinner(currentPlayer);
      currentPlayer == player1? (currentPlayer = player2): (currentPlayer = player1);
    }
  });
});
updateScore();

//add event listener to reset button
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  board.forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("cellX");
    cell.classList.remove("cellO");
  });
  player1.squers = [];
  player2.squers = [];
  currentPlayer = player1;
  player1.score = 0;
    player2.score = 0;
  gameOver = false;
  updateScore();

});
console.log(player1);
console.log(player2);

function checkWinner(currentPlayer) {
  console.log("checking winner of " + currentPlayer.name);

  if (currentPlayer.squers.length >= 3) {
    possiboleWines.forEach((wine) => {
      console.log("Pwins = " + wine);
      let squers = currentPlayer.squers;
      console.log("squers = " + squers);
      if (
        currentPlayer.squers.includes(wine[0]) &&
        currentPlayer.squers.includes(wine[1]) &&
        currentPlayer.squers.includes(wine[2])
      ) {
        console.log("winner");
        gameOver = true;
        alert(currentPlayer.name + " wins!");
        currentPlayer.score++;

        board.forEach((cell) => {
          cell.innerHTML = "";
          cell.classList.remove("cellX");
          cell.classList.remove("cellO");
        });
        player1.squers = [];
        player2.squers = [];
        currentPlayer = player1;
        gameOver = false;
       updateScore();
      }
    });
  }
}
function updateScore() {
     document.querySelector("#plyer1").innerHTML = player1.name;
        document.querySelector("#player1_result").innerHTML = player1.score;
        document.querySelector("#player2").innerHTML = player2.name;
        document.querySelector("#player2_result").innerHTML = player2.score;
}