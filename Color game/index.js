var colors = generaterandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");

var message = document.querySelector("#message");

resetButton.addEventListener("click", function() {
    colors = generaterandomColor(6);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";



});



colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    // adding colors to sqauares
    squares[i].style.backgroundColor = colors[i];
    // add click listener to the squares
    squares[i].addEventListener("click", function() {

        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            changeColor(clickedColor);
            message.textContent = "You are correct!!";
            resetButton.textContent = "play again?";
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "try Again!!";
        }
    });


}

function changeColor(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomColor(num) {
    var arr = []
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
