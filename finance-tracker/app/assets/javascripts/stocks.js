var init_stock_lookup;

init_stock_lookup = function() {

  // show the spinner before ajax results
  $('#stock-lookup-form').on('ajax:before', function(event, data, status){
    show_spinner();
  });

  // stop spinner after ajax results
  $('#stock-lookup-form').on('ajax:after', function(event, data, status){
    hide_spinner();
  });

  // stock search found
  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });

  // no stock found in search
  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
  });
}

$(document).ready(function(){
  init_stock_lookup();          // run function when page occurs to watch for ajax success and errors
});