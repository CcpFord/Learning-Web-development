var numberOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() { //this is anonymous funtion which we don't need to set the name.

    var input = this.innerHTML;
    makeSound(input);


  });
}

document.addEventListener("keydown", function(keydown){
  var input = keydown.key;
  makeSound(input);


});


function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      activeAnimation(key);
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      activeAnimation(key);
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      activeAnimation(key);
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      activeAnimation(key);
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      activeAnimation(key);
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      activeAnimation(key);
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      activeAnimation(key);
      break;

    default: console.log(key)

  }
}

function activeAnimation(currentkey)
{
  var activeButton = document.querySelector("."+ currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
