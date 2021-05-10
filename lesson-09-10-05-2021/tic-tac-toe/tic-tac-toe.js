let board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

let player = 1;
let time = true;

run(player, board);

function run(player, board) {
  console.log("Player " + player);

  let draw = checkDraw(board);

  if (draw) {
    time = false;
    alert("Draw!");
  } else if (player === 1) {
    board = addX(board);
    player = switchPlayer(player);

    console.log(board);
  } else {
    board = addY(board);
    player = switchPlayer(player);

    console.log(board);
  }

  if (time) {
    setTimeout(() => {
      run(player, board);
    }, 500);
  }
}

function addX(board) {
  let row = generateNumber();
  let col = generateNumber();

  if (board[row][col] === "-") {
    board[row][col] = "x";
  } else {
    addX(board);
  }

  checkWinnerX(board);
  return board;
}

function addY(board) {
  let row = generateNumber();
  let col = generateNumber();

  if (board[row][col] === "-") {
    board[row][col] = "y";
  } else {
    addY(board);
  }

  checkWinnerY(board);
  return board;
}

function switchPlayer(player) {
  if (player === 1) {
    player = 2;
  } else {
    player = 1;
  }

  return player;
}

function checkWinnerX(board) {
  if (
    (board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") || // rows
    (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") ||
    (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") ||
    (board[0][0] === "x" && board[1][0] === "x" && board[2][0] === "x") || // columns
    (board[0][1] === "x" && board[1][1] === "x" && board[2][1] === "x") ||
    (board[0][2] === "x" && board[1][2] === "x" && board[2][2] === "x") ||
    (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") || // diagonals
    (board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x")
  ) {
    time = false;
    alert("Player 1 (x) wins!");
  }
}

function checkWinnerY(board) {
  if (
    (board[0][0] === "y" && board[0][1] === "y" && board[0][2] === "y") || // rows
    (board[1][0] === "y" && board[1][1] === "y" && board[1][2] === "y") ||
    (board[2][0] === "y" && board[2][1] === "y" && board[2][2] === "y") ||
    (board[0][0] === "y" && board[1][0] === "y" && board[2][0] === "y") || // columns
    (board[0][1] === "y" && board[1][1] === "y" && board[2][1] === "y") ||
    (board[0][2] === "y" && board[1][2] === "y" && board[2][2] === "y") ||
    (board[0][0] === "y" && board[1][1] === "y" && board[2][2] === "y") || // diagonals
    (board[0][2] === "y" && board[1][1] === "y" && board[2][0] === "y")
  ) {
    time = false;
    alert("Player 2 (y) wins!");
  }
}

function checkDraw(board) {
  let draw = true;

  for (let item of board) {
    if (item.includes("-")) {
      draw = false;
      break;
    }
  }

  return draw;
}

function generateNumber() {
  return Math.floor(Math.random() * 3);
}
