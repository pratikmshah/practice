// declare global variables
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

        // hide game over box
        $("#game-over").hide();

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

  // execute instructions when slicing a fruit
  $("#fruit1").mouseover(function() {
    updateScore();
    playSound();
    destroyFruit();
    setTimeout(generateFruit, 500);
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
        gameOver();
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

  // generate random speed
  speed = getSpeed();
}

// execute game over commands
function gameOver() {
  playing = false;
  $("#startreset").html("Start Game");
  $("#game-over").show();
  $("#game-over").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
  clearInterval(action);
  $("#fruit1").hide();
}

// random speed
function getSpeed() {
  return 1 + Math.round(5 * Math.random());
}

// increase score
function updateScore() {
  $("#scorevalue").html(++score);
}

// play slice sound
function playSound() {
  $("#slicesound")[0].play();
}

// destroy fruit
function destroyFruit() {
  speed = 0;
  $("#fruit1").hide("explode", 500);
}
