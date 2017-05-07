// declare variables
var playing = false;
var score;
var lives;

$(function() {
  // click on start/reset button
  $("#startreset").click(function() {

      // are we playing?
      if(playing) {

        // reload page
        location.reload();

      } else {

        // we are playing so set variable to true
        // update score
        playing = true;
        score = 0;
        $("#scorevalue").html(score);

        // display number of lives
        $("#trials-left").show();
        lives = 3;
        addHearts();
      }
  });
});


// adds image of lives
function addHearts() {
  for(var i = 0; i < lives; i++) {
    $("#trials-left").append(" X ");
  }
}
