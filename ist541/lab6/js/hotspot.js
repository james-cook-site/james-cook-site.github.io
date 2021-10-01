// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Grassy Area") {
         $("#feedback").css("color","black");
         $("#feedback").html("The grassy area is an ideal spot for your golf ball to land. Unfortunately, that is not always the case. If you land in the bunker, you have to play your ball from there.");
      }

      if ($(this).attr("id") == "Golf Ball") {
         $("#feedback").css("color","black");
         $("#feedback").html("If your golf ball lands in the bunker, you have to play it from there. Also, you can not rest your club in the sand before striking the ball.");
      }

      if ($(this).attr("id") == "Bunker Sand") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the bunker. You have to play your ball from the lie you draw. You also must rake the bunker after you strike your ball.");
      }

      if ($(this).attr("id") == "Bunker Rake") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the bunker rake. It is used to rake the bunker after you strike your golf ball. When you are done using it, please place it in an area, not in the way of other golfers.");
      }

  $("#feedback").css("backgroundColor","clear");
  $('#myModal').modal("show");
   });
}); //end main jQuery function
