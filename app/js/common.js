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
    if (wpcf7Elm){
        wpcf7Elm.addEventListener('wpcf7mailsent', function (event) {
            $(this).hide();
            $('#contactFormSuccess-contactPage').fadeIn(500);
        }, false);
    };
    
    // FAQ page collapse block

    let collapseBlockLink = $(".collapseBlock__title-link");
    if (collapseBlockLink){

        collapseBlockLink.on("click",function(e){
            event.preventDefault();
            $(".collapseBlock").removeClass("active");
            $(".collapseBlock__content").slideUp("fast");

            $(document).click(function (event) {
                $target = $(event.target);
                if (!$target.closest('.collapseBlock').length &&
                    $('.collapseBlock__content').is(":visible")) {
                    $('.collapseBlock__content').slideUp("fast");
                    $(".collapseBlock").removeClass("active");
                }
            });

            $(this).parents(".collapseBlock").toggleClass("active");
            if ( $(this).parents(".collapseBlock").children(".collapseBlock__content").is(":visible") ){
                $(this).parents(".collapseBlock").children(".collapseBlock__content").slideUp("fast");
            }
            else{
                $(this).parents(".collapseBlock").children(".collapseBlock__content").slideDown("fast")
            }

        });
    };


});