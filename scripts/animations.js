$(document).ready(function() {







$(".facebook").mouseover(function() {
  $("img", this).attr("src", "images/facebookhover.png");
});

$(".facebook").mouseout(function() {
  $("img", this).attr("src", "images/facebook.png");
});

$(".twitter").mouseover(function() {
  $("img", this).attr("src", "images/twitterhover.png");
});

$(".twitter").mouseout(function() {
  $("img", this).attr("src", "images/twitter.png");
});

$(".mail").mouseover(function() {
  $("img", this).attr("src", "images/mailhover.png");
});

$(".mail").mouseout(function() {
  $("img", this).attr("src", "images/mail.png");
});

//linksmenuanimations


//party
$("#partylink1, #partylink2").mouseover(function() {
  $(".party").css("background-color", "#00d1b8");
  $(".party2").css("background-color", "#00d1b8");
});

$("#partylink1, #partylink2").mouseout(function() {
  $(".party").css("background-color", "transparent");
  $(".party2").css("background-color", "transparent");
});

//fashion

$("#fashionlink1, #fashionlink2").mouseover(function() {
  $(".fashion").css("background-color", "#00d1b8");
  $(".fashion2").css("background-color", "#00d1b8");
});

$("#fashionlink1, #fashionlink2").mouseout(function() {
  $(".fashion").css("background-color", "transparent");
  $(".fashion2").css("background-color", "transparent");
});

});
