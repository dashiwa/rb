var newYear = new Date();

newYear = new Date("12 June 2019");

$('#defaultCountdown').countdown({until:  newYear});

var first = $('.middle-bottom-container .img-list li.first');
var second = $('.middle-bottom-container .img-list li.second');
var third = $('.middle-bottom-container .img-list li.third');

$( ".tabs li.first" ).mouseenter(function() {
   first.show();
   second.hide();
   third.hide();
});
$( ".tabs li.second" ).mouseenter(function() {
    first.hide();
    second.show();
    third.hide();
});
$( ".tabs li.third" ).mouseenter(function() {
    first.hide();
    second.hide();
    third.show();
});