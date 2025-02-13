let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 100);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 100);
}

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  //   console.log(randBtn, randIdx);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns() {
  //   console.log("fasdsfasfasdf", level);
  let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
  } else {
    h2.innerText = `Game Over! Press any key to Re-start.`;
  }
}
function btnPress() {
  let btn = this;
  console.log(btn);
  userFlash(btn);

  userColor = this.id;
  userSeq.push(userColor);

  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
