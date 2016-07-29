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

// help with scrolling to full portfolio entries when intro is clicked
function scrollToAnchor(aid){
var aTag = $("a[name='"+ aid +"']");
$('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$('.portfolio-mefford-jewelers').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-mefford').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-mefford');
});

$('.portfolio-shoals-satellite').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-shoals-satellite').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-shoals-satellite');
});

$('.portfolio-muscle-shoals-artists').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-muscle-shoals-artists').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-muscle-shoals-artists');
});

$('.portfolio-miss-priss').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-miss-priss').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-miss-priss');
});

$('.portfolio-history-chips').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-history-chips').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-history-chips');
});

$('.portfolio-juvie-moon').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-juvie-moon-designs').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-juvie-moon-designs');
});
