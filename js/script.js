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

$('.inquire-btn').click(function(e) {
  e.preventDefault();

  // pega o card atual
  var card = $(this).closest('.art-card');

  // pega o título da obra
  var title = card.find('.art-title').text();

  // monta a mensagem
  var message = "Olá, tenho interesse na obra " + title;

  // codifica para URL
  var encodedMessage = encodeURIComponent(message);

  // seu número (coloque o seu real)
  var phone = "5511992953219";

  // cria link do WhatsApp
  var url = "https://wa.me/" + phone + "?text=" + encodedMessage;

  // abre
  window.open(url, '_blank');
});