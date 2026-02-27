$(document).ready(function() {

  /* SLIDESHOW HERO */
  var current = 0;
  var slides = $('.slide');

  function changeSlide() {
    slides.removeClass('active');
    current = (current + 1) % slides.length;
    slides.eq(current).addClass('active');
  }

  setInterval(changeSlide, 4000);

});

$('a').click(function(e) {
  var link = $(this).attr('href');
  if(link && link.includes('.html')) {
    e.preventDefault();
    $('body').fadeOut(400, function() {
      window.location = link;
    });
  }
});