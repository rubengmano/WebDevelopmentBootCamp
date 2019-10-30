var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var index = 0;

$(".btn").on("click", function() {
  index++;
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playAudio(userChosenColor);
  console.log(index + " level " + level);
  if(index === level){
    checkAnswer(level);
    index = 0;
  }
});

$(window).keypress(function(event){
  if(level === 0){
    nextSequence();
  }
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).toggleClass("pressed");
  }, 150);
}

function nextSequence() {
  $("h1").text("Level " + (level + 1));
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playAudio(randomChosenColour);
}

function checkAnswer(currentLevel) {
  var move = false;
  for(var i = 0; i < currentLevel; i++){
    if(userClickedPattern[i] === gamePattern[i]){
      console.log(userClickedPattern[i] + " " + gamePattern[i]);
      move = true;
    } else {

      gameOver();
    }
  }
  userClickedPattern = [];

  if(move === true){
    setTimeout(function(){
      nextSequence();
    }, 1000);
  }
}

function gameOver(){
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  index = 0;
  $("h1").text("Press A Key to Start");
  playAudio("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").toggleClass("game-over");
  }, 130);
}

function playAudio(color){
  var audio = new Audio('sounds/' + color + '.mp3');
  audio.play();
}
