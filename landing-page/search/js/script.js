$(document).ready(function() {
  pageLoad();
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

  // apps menu hide and then toggle
  $(".apps-button").click(function() {
    $("div#apps").toggle();
  });

  // apps menu edit
  var iScrollPos = 0;

	$("#apps").scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        $('a[href="#more"]').hide();
        $("hr").show();
    } else {
       //Scrolling Up
       $('a[href="#more"]').show();
       $("hr").hide();
    }
    iScrollPos = iCurScrollPos;
	});

  // scroll to second have of apps
  $('a[href="#more"]').click(function(e) {
    e.preventDefault();
    var target = $("a#more").offset().top;
    $("div#apps").animate(
      {scrollTop: target},
      500
    );
  });

});

// return random array index
function random(arr) {
  return Math.floor(Math.random()*arr.length);
}

// page load setup
function pageLoad() {
  $("hr").hide();
  $("div#apps").hide();
}
