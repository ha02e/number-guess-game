//랜덤번호 지정

//유저가 번호를 입력하고 go 버튼을 누름

//유저가 랜덤번호를 맞추면, 맞췄습니다!

//랜덤번호 < 유저 번호, Down!!

//랜덤번호 > 유저 번호, Up!!

//Reset 버튼을 누르면 게임 리셋

//기회는 5번, 기회를 다쓰면 게임 끝

//유저가 1~100 범위 밖 숫자를 입력하면 알려준다. 기회 깎지 않는다.

//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value; //유저가 입력한 숫자

  if (userValue < computerNum) {
    resultArea.textContent = "Up!!";
    //console.log("Up!!");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!!";
    //console.log("Down!!");
  } else {
    resultArea.textContent = "정답입니다!!";
    //console.log("정답입니다!!");
  }
}

pickRandomNum();
