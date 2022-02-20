const gameBoardArray = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

document.querySelectorAll(".gb-item").forEach((item) => {
  console.log(item);
  item.innerHTML = gameBoardArray[item.dataset.gby][item.dataset.gbx];
  item.addEventListener("click", () => updatePlay(item));
});

const Player = (sign) => {
  return { sign };
};

const player1 = Player("O");
const player2 = Player("X");
let currentPlayer = player1;
let moves = 0;
const updatePlay = (item) => {
  moves++;
  gameBoardArray[item.dataset.gby][item.dataset.gbx] = currentPlayer.sign;
  item.innerText = currentPlayer.sign;
  if (checkGame(currentPlayer.sign, item.dataset.gbx, item.dataset.gby)) {
    console.log("win");
  } else if (moves == 9) {
    console.log("draw");
  }
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else if (currentPlayer == player2) {
    currentPlayer = player1;
  }
};

const checkGame = (sign, posx, posy) => {
  const checkHorizontal = () => {
    let x = posx;
    let y = posy;
    counter = 1;
    while (x > 0) {
      x--;
      //console.log(y, x, gameBoardArray[y][x], sign);
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }

    x = posx;

    while (x < 2) {
      x++;
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }
    console.log("counterx", counter);
    if (counter == 3) {
      console.log("win");
      return true;
    }
  };
  const checkVertical = () => {
    let x = posx;
    let y = posy;
    counter = 1;
    while (y > 0) {
      y--;
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }

    y = posy;

    while (y < 2) {
      y++;
      //console.log(y, x, gameBoardArray[y][x], sign);
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }
    console.log("countery", counter);
    if (counter == 3) {
      console.log("win");
      return true;
    }
  };
  const checkDiagonal1 = () => {
    let x = posx;
    let y = posy;
    counter = 1;
    while (x > 0 && y > 0) {
      x--;
      y--;
      console.log(y, x, gameBoardArray[y][x], sign);
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }

    x = posx;
    y = posy;
    while (x < 2 && y < 2) {
      x++;
      y++;
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }
    console.log("counter1", counter);
    if (counter == 3) {
      console.log("win");
      return true;
    }
  };
  const checkDiagonal2 = () => {
    let x = posx;
    let y = posy;
    counter = 1;
    while (x > 0 && y < 2) {
      x--;
      y++;
      console.log(y, x, gameBoardArray[y][x], sign);
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }

    x = posx;
    y = posy;
    while (x < 2 && y > 0) {
      x++;
      y--;
      if (gameBoardArray[y][x] == sign) {
        counter++;
      }
    }
    console.log("counter2", counter);
    if (counter == 3) {
      console.log("win");
      return true;
    }
  };
  return checkHorizontal() || checkVertical() || checkDiagonal1() || checkDiagonal2();
};
