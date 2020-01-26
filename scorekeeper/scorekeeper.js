var p1b = document.querySelector("#p1");
var p1b = document.querySelector("#p2");
var h1a = document.querySelector("#p1d");
var h1b = document.querySelector("#p2d");

var p1score = 0;
var p2score = 0;

p1b.addEventListener("click", function() {
    p1score++;
    h1a.textContent = p1score;

});

p2b.addEventListener("click", function() {
    p2score++;
    h1b.textContent = p2score;
});