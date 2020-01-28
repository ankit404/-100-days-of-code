var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var playerOne = document.querySelector("#playerone");
var playerTwo = document.querySelector("#playertwo");
var resetn = document.querySelector("#reset");
var p1score = 0;
var p2score = 0;
var gameover = true;
var winningscore = 5;
var windisp = document.querySelector("p span");
var inputn = document.querySelector("input");
var playing = document.querySelector("#Playing");


p1Button.addEventListener("click", function() {
    if (gameover) {
        p1score++;
        if (p1score === winningscore) {
            playerOne.classList.add("warrior");
            gameover = false;

        }
        playerOne.textContent = p1score;

    }

});

p2Button.addEventListener("click", function() {
    if (gameover) {
        p2score++;
        if (p2score === winningscore) {
            playerTwo.classList.add("warrior");
            gameover = false;

        }
        playerTwo.textContent = p2score;

    }

});

resetn.addEventListener("click", function() {
    reset();

});

function reset() {
    p1score = 0;
    p2score = 0;
    playerOne.textContent = p1score;
    playerTwo.textContent = p2score;
    playerOne.classList.remove("warrior");
    playerTwo.classList.remove("warrior");
    gameover = true;
}

inputn.addEventListener("change", function() {
    windisp.textContent = this.value;
    winningscore = Number(this.value);
    reset();
});