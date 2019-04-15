var newYear = new Date();

newYear = new Date("12 June 2019");

$('#defaultCountdown').countdown({until: newYear});

var first = $('.middle-bottom-container .img-list li.first');
var second = $('.middle-bottom-container .img-list li.second');
var third = $('.middle-bottom-container .img-list li.third');

$(".tabs li.first").mouseenter(function () {
    first.show();
    second.hide();
    third.hide();
});
$(".tabs li.second").mouseenter(function () {
    first.hide();
    second.show();
    third.hide();
});
$(".tabs li.third").mouseenter(function () {
    first.hide();
    second.hide();
    third.show();
});

// $('.single-item').slick({dots: true,arrows:true});


$('.day_switcher ul li').click(function () {
    var $table_active = $('.table-wrapper .active');
    if ($(this).hasClass('active') === false) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    }
    if ($table_active.hasClass('active')) {
        $table_active.removeClass('active');
        $table_active.siblings().addClass('active');
    }
});



if(window.location.pathname == '/eng/'){
 $('.language li a.eng').addClass('active');
 $('.language li a.ru').removeClass('active');
}