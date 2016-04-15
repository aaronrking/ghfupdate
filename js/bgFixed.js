$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.jumbotron').css('background-position', 'center ' + ((scrolledY)) + 'px');
});