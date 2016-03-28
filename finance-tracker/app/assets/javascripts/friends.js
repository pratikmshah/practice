var init_friend_lookup;

init_friend_lookup = function() {

  // show the spinner before ajax results
  $('#friend-lookup-form').on('ajax:before', function(event, data, status){
    show_spinner();
  });

  // stop spinner after ajax results
  $('#friend-lookup-form').on('ajax:after', function(event, data, status){
    hide_spinner();
  });

  // person found
  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });

  // no person found in search
  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('person was not found.');
  });
}

$(document).ready(function(){
  init_friend_lookup();          // run function when page occurs to watch for ajax success and errors
});