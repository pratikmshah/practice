// declare variables
var playing = false;
var score;
var lives;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
var speed;
var action;

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
  $("#trials-left").empty();
  for(var i = 0; i < lives; i++) {
    $("#trials-left").append('<img src="images/heart.png" alt="heart" class="life">');
  }
}

// generate a random fruit with a random position and speed
function startAction() {
  generateFruit();

  // generate random speed
  speed = 1 + Math.round(5 * Math.random());

  // move fruit down by one step every 10ms
  action = setInterval(function() {
    $("#fruit1").css('top', $("#fruit1").position().top + speed);

    // check to see if fruit is out of bounds and if there are lives left
    if($("#fruit1").position().top > $("#fruits-container").height()) {
      if(lives > 1) {
        generateFruit();
        lives--;
        addHearts();
      } else {

      }
    }
  }, 10);
}

// returns a random images
function getFruit() {
  $("#fruit1").attr('src', 'images/' + fruits[Math.round(8 * Math.random())] +'.png');
}

// display and get image and position of fruits
function generateFruit() {
  $("#fruit1").show();
  getFruit();

  // display on x-axis randomly
  $("#fruit1").css({
    'left' : Math.round(Math.random() * 550),
    'top' : -100
  });

}
