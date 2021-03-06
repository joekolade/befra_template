
$(function () {
    'use strict';

    var
        $menu = $('.container.nav'),
        $subnav = $('ul.subnav', $menu),

        // Slickslider
        $slick = $('.slickslider'),
        slickOptions = {
            dots: false,
            arrows: false,
            autoplay: 1,
            adaptiveHeight: 1,
            speed: 800,
            lazyLoad: 'progressive',
            pauseOnHover: false,
            // fade: true,
            autoplaySpeed: 5000
        },

        // Selects
        $selectorMadness = $('.selectorMadness'),
        $select = $('select', $selectorMadness)
    ;

    // Menu
    if ($menu.length) {
        $menu.affix({
            offset: {
                top: $('header.container').first().outerHeight(true),
                bottom: function () {
                    return false;
                }
                //     return $('footer.container').first().height() + $('footer.superfooter').height() - $menu.height();
                // }
            }
        });
    }

    // Subnav for mobile
    //
    if ($subnav.length) {
        $subnav.each(function () {
            var $sn = $(this);
            $sn.prev('a').append(function () {
                var $i;
                $i = $('<i />')
                    .addClass('fa fa-angle-down')
                    .click(function (e) {
                        e.preventDefault();
                        $(this).parent('a').toggleClass('open')
                            .next('ul.subnav').toggleClass('open');
                    });
                return $i;
            });
        });
    }

    if ($slick.length) {
        $slick.slick(slickOptions);
    }

    $(document).ready(function () {
        // Select2
        //

        $select.select2({
            // No search box
            minimumResultsForSearch: Infinity
        }).change(function (e) {
            e.preventDefault();
            console.log($(this).val());

            window.location.href = $(this).val();
        });
    });


});
