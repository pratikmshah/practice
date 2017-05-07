// declare variables
var playing = false;
var score;
var lives;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

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

        // change button text
        $("#startreset").html("Reset Game");

        // generate and display fruit
        startAction();
      }
  });
});

//****************************
//***** HELPER FUNCTIONS *****
//****************************

// adds image of lives
function addHearts() {
  for(var i = 0; i < lives; i++) {
    $("#trials-left").append('<img src="images/heart.png" alt="heart" class="life">');
  }
}

// get random fruit
function startAction() {
  $("#fruit1").show();
  getFruit();
  $("#fruit1").css({
    'left' : Math.round(Math.random() * 550),
    'top' : -100
  });
}

// returns a random images
function getFruit() {
  $("#fruit1").attr('src', 'images/' + fruits[Math.round(8 * Math.random())] +'.png');
}
