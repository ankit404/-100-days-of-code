var number=5;
var sguess=prompt("Guess the  number");
var guess=Number(sguess)
if (guess===number){
    alert("You Got it Right!")
}
else if(guess>number){
    alert("Your guess is high!. Guess Again")
}
else{
    alert("Your guess is low. Guess Again!")
}