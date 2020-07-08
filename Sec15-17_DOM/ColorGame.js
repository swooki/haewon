let numSquares = 6;
let colors = generateRandomColor(numSquares);
let bgColor = "#232323";
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let ColorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let header = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy-btn");
let hardBtn = document.querySelector("#hard-btn");

resetButton.addEventListener("click", function () {
    resetGame(numSquares);
});

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
      }
    }
});


function resetGame(num) {
  colors = generateRandomColor(num);
  pickedColor = pickColor();
  ColorDisplay.textContent = pickedColor;
  header.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Color";

  for (let i = 0; num; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}

ColorDisplay.textContent = pickedColor;

for (var i = 0; squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColor(pickedColor);
      header.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = bgColor;
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColor(color) {
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(getRandomRGB());
  }
  return arr;
}

function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
