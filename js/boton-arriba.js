$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.sidebar').fadeIn(300);
    } else {
      $('.sidebar').fadeOut(300);
    }
  });

  $('.ir-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(100);
    } else {
      $('.ir-arriba').slideUp(100);
    }
  });
});