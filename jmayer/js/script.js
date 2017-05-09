$(function() {

  var i = 1;
  // show/hide glance
  setInterval(function() {
    if(isEven(i)) {
        $(".glance").css("visibility", "visible");
        i++;
    } else {
        $(".glance").css("visibility", "hidden");
        i++;
    }
  }, 11000);

});

function isEven(x) {
  return x % 2 == 0 ? true : false;
}
