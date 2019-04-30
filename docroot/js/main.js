var newYear = new Date();

newYear = new Date("9 September 2019");
var countdown = $('#defaultCountdown').countdown({until: newYear});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// $('#defaultCountdown').countdown({until: newYear});

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

$(".tabs li").mouseenter(function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }

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


if (window.location.pathname == '/eng/') {
    $('.language li a.eng').addClass('active');
    $('.language li a.ru').removeClass('active');
}

var nav_menu = $('.navbar-nav');
var button_fixed = $('.ticket-button-wrapper');

// $(window).scroll(function() {
//     if (this.scrollY > 500) {
//         button_fixed.addClass("fixed");
//         nav_menu.addClass("fixed");
//     } else {
//         nav_menu.removeClass("fixed");
//         button_fixed.removeClass("fixed");
//     }
// });