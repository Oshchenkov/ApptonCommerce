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
    if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
        $(window).load(function () {
            $('input:-webkit-autofill').each(function () {
                var text = $(this).val();
                var name = $(this).attr('name');
                $(this).after(this.outerHTML).remove();
                $('input[name=' + name + ']').val(text);
            });
        });
    }

});