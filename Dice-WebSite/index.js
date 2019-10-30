var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", img1);
document.getElementsByTagName("img")[1].setAttribute("src", img2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "<i class='fas fa-trophy'></i> Player 1 wins!";
} else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! <i class='fas fa-trophy'></i>";
} else {
  document.querySelector("h1").innerHTML = "Draw! Try again! ";
}
