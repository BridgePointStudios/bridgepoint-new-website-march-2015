$(function() {
    "use strict"

    $('.carousel').carousel({
      interval: 6000,
      pause: "false"
    });

    var topoffset = 50;
    $('body').scrollspy({
            target: 'header .navbar',
            offset: topoffset
    });

    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured') {
        $('header nav').addClass('inbody');
    } else {
        $('header nav').removeClass('inbody');
    }

    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        var hash = $(this).find('li.active a').attr('href');
        if(hash !== '#featured') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
    });

    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
