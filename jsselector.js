var a = document.querySelector("#first");
console.log(a + "this is the 1st way");
var b = document.querySelector(".special");
console.log(b + "this is the 2nd way");
var c = document.getElementById("first");
console.log(c + "this is the 3rd way");
var d = document.getElementsByClassName("special");
console.log(d + "this us the 4th way");

var p = document.getElementsByTagName("p")[0];
console.log(p.innerHTML);