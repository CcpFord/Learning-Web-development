//Do it by myself.
if (window.performance.navigation.type === 1) {
  rollDice();
}
function rollDice(){

var randomNumber1 = Math.floor((Math.random()*6)+1); //random number 1-6
var randomNumber2 = Math.floor((Math.random()*6)+1); //random number 1-6

document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "<i></i> Player 1 Wins!";
  document.querySelector("i").classList.add("fas","fa-flag");
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins! <i></i>";
  document.querySelector("i").classList.add("fas","fa-flag");
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
}

// The instructor provides their code.

/*var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
*/
