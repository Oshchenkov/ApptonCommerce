$(window).on('load', function () {

    // Fixed header on scroll

/*     $(window).scroll(function () {
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
    }); */

    // WP CF7 contact page

    var wpcf7Elm = document.querySelector('.contactForm .wpcf7');
    wpcf7Elm.addEventListener('wpcf7mailsent', function (event) {
        $(this).hide();
        $('#contactFormSuccess-contactPage').fadeIn(500);
    }, false);


});