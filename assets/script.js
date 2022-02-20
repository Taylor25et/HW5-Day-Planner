// Clock display //
$('#currentDay').text(moment().format('dddd, MMMM Do'));

 //Save Button//
$( ".saveBtn" ).on( "click", function() {
    var value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');

    localStorage.setItem(key, value);
  });

 // Gets each time block  //
$('#6 .description').val(localStorage.getItem('6'))

 // Show current time //
function currentTime(){
var currentHour = moment().hour();

 // Loops through every time block //
$('.time-block').each(function(){
  var timeBlock = parseInt($(this).attr('id'));
    if (timeBlock < currentHour) {
      $(this).addClass('past')
    } else if (timeBlock === currentHour) {
      $(this).addClass('present')
    } else {
      $(this).addClass('future')
    }
  })
}
currentTime();