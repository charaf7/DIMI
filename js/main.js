$(document).ready(function() {

  var menuClass = ('.navigation-wrapper');
  var activePositionY = 20;
  var activeClass = 'scrolled';

  $(window).scroll(function() {
    if($(window).scrollTop() > activePositionY) {
      $(menuClass).addClass(activeClass);
    } else {
      $(menuClass).removeClass(activeClass);
    }
  });

});
