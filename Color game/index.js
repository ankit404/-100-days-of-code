var numSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var message = document.querySelector("#message");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
    setMode();
    setSquare();
    reset();
}

function setMode() {
    for (i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function() {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
        });
    }
}

function setSquare() {
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
}


function reset() {
    resetButton.textContent = "New Colors";
    colors = generaterandomColor(numSquare);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];

        } else {
            squares[i].style.display = "none";

        }
    }
    h1.style.background = "steelblue ";

    message.textContent = " ";

}


resetButton.addEventListener("click", function() {
    reset();
});

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