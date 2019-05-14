$(document).ready(function () {

    // Fixed header on scroll

    $(window).scroll(function () {
        if (($(window).scrollTop() >= 112) && ($(window).width() >= 992)) {
            $('#mainHeaderNav').addClass('fixed');
            $('.mainHeader').addClass('fixedHeader');
        }
        else if (($(window).scrollTop() >= 90) && ($(window).width() < 992)) {
            $('#mainHeaderNav').addClass('fixed');
            $('.mainHeader').addClass('fixedHeader');
        }
        else {
            $('#mainHeaderNav').removeClass('fixed');
            $('.mainHeader').removeClass('fixedHeader');
        }
    });

    //
    console.log()

});