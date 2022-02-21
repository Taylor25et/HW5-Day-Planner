// Clock display //
$('#currentDay').text(moment().format('dddd, MMMM Do'));

 //Save Button//
$( ".saveBtn" ).on( "click", function() {
    var value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');

    localStorage.setItem(key, value);
  });

 // Gets each time block with ease //
$('#7 .description').val(localStorage.getItem('7'))
$('#8 .description').val(localStorage.getItem('8'))
$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))
$('#18 .description').val(localStorage.getItem('18'))
$('#19 .description').val(localStorage.getItem('19'))

 // Show current time //
function currentTime(){
var currentHour = moment().hour();

 // Loops through every time block like a boss //
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