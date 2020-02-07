var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

var message = document.querySelector("#message");

for (var i = 0; i < squares.length; i++) {
    // adding colors to sqauares
    squares[i].style.backgroundColor = colors[i];
    // add click listener to the squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {

            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = colors[3];
            }
            message.textContent = "You are correct!!";
        } else {
            this.style.backgroundColor = "#909090";
            message.textContent = "try Again!!";
        }
    });


}
