(function ($) {
  $(document).ready(function(){

  });

	// fade in .navbar
  $(window).scroll(function() {
  if ($(document).scrollTop() > 44) {
    $('nav').addClass('navbar-solid');
  } else {
    $('nav').removeClass('navbar-solid');
  }
  });
}(jQuery));
