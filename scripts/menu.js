$(document).ready(function() {

  $(".menuactivator").mouseover(function() {
    $(".bars").css("background-color", "#00bfa9");
  });

  $(".menuactivator").mouseout(function() {
    $(".bars").css("background-color", "#474747");
  });

  $(".menuactivator").click(function() {
    $(".linksmenu").css("right", "0px");
    $(".menuactivator").hide();
    $("#desktopexit").show();
  });

  $("#desktopexit").mouseover(function() {
    $("#desktopexit").css("color", "#00bfa9");
  });

  $("#desktopexit").mouseout(function() {
    $("#desktopexit").css("color", "#474747");
  });

  $("#desktopexit").click(function(){
    $("#desktopexit").hide();
    $(".menuactivator").show();
    $(".linksmenu").css("right", "calc(((100vw/3) + 1px) * -1)");
  });

//mobile

  $(".mobilemenuactivator").click(function() {
    $(".linksmenu").css("top", "45px");
    $(".mobilemenuactivator").hide();
    $("#mobileexit").show();
  });

  $("#mobileexit").click(function(){
    $("#mobileexit").hide();
    $(".mobilemenuactivator").show();
    $(".linksmenu").css("top", "-100%");
  });

});
