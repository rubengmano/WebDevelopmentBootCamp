// $("h1").css("color", "red");
$("h1").addClass("big-title");

// without jQuery
// for(var i = 0; i < 5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// with jquery
$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function(event){
  $("h1").text(event.key);
  // console.log(event.key);
});
