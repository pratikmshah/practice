$(document).ready(function() {

  var SAY = "I'm Feeling ";
  var phrase = ["Playful", "Hungry", "Puzzle", "Curious", "Artistic", "Happy"];

  // randomize phrase
  $("#submit input:last-child").hover(
    function() {
      // randomize and change submit value
      $(this).val(SAY + phrase[random(phrase)]);
    }, function() {
      // reset value to default
      $(this).val("I'm Feeling Lucky");
    }
  );

});

// return random array index
function random(arr) {
  return Math.floor(Math.random()*arr.length);
}
