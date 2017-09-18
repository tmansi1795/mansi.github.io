new WOW().init();
$(document).ready(function () {
    /*scrolling effect....*/

    $('a[href]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);

            }
        }
    });
    /* sticky nav...*/

    var navOffset = jQuery("nav").offset().top;
    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight()); //height of the nav element
    //jQuery("nav").wrapInner('<div class="nav-inner"></div>');
    //jQuery("nav-inner").wrapInner('<div class="nav-inner-most"></div>');

    jQuery(window).scroll(function () {
        var scrollPos = jQuery(window).scrollTop();
        if (scrollPos >= navOffset) {

            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }

    });

    $('#imageCarousel').carousel();


});
