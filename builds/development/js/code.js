var $ = require('jquery');

$('.carousel').carousel({
  interval: 4000,
  pause: "false"
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
