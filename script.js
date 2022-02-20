let gameBoardArray = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

const Player = (name, sign) => {
  return { name, sign };
};

const player1 = Player("Prateek", "O");
const player2 = Player("NotPrateek", "X");
let currentPlayer = player1;

const current = document.getElementById("current");
const cong = document.getElementById("cong");

current.innerText = `${currentPlayer.name} : ${currentPlayer.sign}`;

let moves = 0;
const updatePlay = (item) => {
  cong.innerHTML = "";
  moves++;
  gameBoardArray[item.dataset.gby][item.dataset.gbx] = currentPlayer.sign;
  item.innerText = currentPlayer.sign;
  if (checkGame(currentPlayer.sign, item.dataset.gbx, item.dataset.gby)) {
    cong.innerText = `${currentPlayer.name} wins`;
    resetGame();
    console.log("win");
    return;
  } else if (moves == 9) {
    cong.innerText = `Draw`;
    resetGame();
    console.log("draw");
  }
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else if (currentPlayer == player2) {
    currentPlayer = player1;
  }
  current.innerText = `${currentPlayer.name} : ${currentPlayer.sign}`;
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
const game = () => {
  document.querySelectorAll(".gb-item").forEach((item) => {
    console.log(item);
    item.innerHTML = gameBoardArray[item.dataset.gby][item.dataset.gbx];
    item.addEventListener("click", () => updatePlay(item));
  });
};
game();

const resetGame = () => {
  moves = 0;
  gameBoardArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  currentPlayer = player1;
  current.innerText = `${currentPlayer.name} : ${currentPlayer.sign}`;
  document.querySelectorAll(".gb-item").forEach((item) => {
    console.log(item);
    item.removeEventListener("click", updatePlay);
    item.innerHTML = gameBoardArray[item.dataset.gby][item.dataset.gbx];
  });
};

document.getElementById("resetbtn").addEventListener("click", () => {
  resetGame();
  cong.innerHTML = "";
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
  player1.name = document.getElementById("name1").value;
  current.innerText = `${currentPlayer.name} : ${currentPlayer.sign}`;
});
btn2.addEventListener("click", () => {
  player2.name = document.getElementById("name2").value;
  current.innerText = `${currentPlayer.name} : ${currentPlayer.sign}`;
});
