console.log('\'Allo \'Allo!');

$(function(){
  'use strict';

  var
    $menu = $('.container.nav'),
    $subnav = $('ul.subnav', $menu),

    // Scroller
    $scroller = $('.scroller')
  ;

  // Menu
  if($menu.length){
    $menu.affix({
      offset: {
        top: $('header.container').first().outerHeight(true),
        bottom: function () {
            return $('footer.container').first().height() + $('footer.superfooter').height() - $menu.height();
        }
      }
    });
  }

  // Subnav for mobile
  if($subnav.length){
    $subnav.each(function(){
      var $sn = $(this);
      $sn.prev('a').append(function(){
        var $i;
        $i = $('<i />')
          .addClass('fa fa-angle-down')
          .click(function(e){
            e.preventDefault();
            $(this).parent('a').toggleClass('open')
              .next('ul.subnav').toggleClass('open');
          });
        return $i;
      });
    });
  }

  if($scroller.length){
    $(window).scroll(function(){
      var
        height = $(document).height(), // 1915
        scrollTop = $(document).scrollTop(),
        windowH = $(window).height(),
        navbarHeight = $menu.height() - $scroller.height() - 2
      ;

      $scroller.css({
        top: navbarHeight * scrollTop / (height-windowH)
      });

    });
  }
});
