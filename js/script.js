// Script jQuery para realizar acciones en la página
$(document).ready(function () {
    // Acción al hacer clic en el botón de explorar
    $('.hero button').click(function () {
      $('html, body').animate({
        scrollTop: $('#ropa').offset().top
      }, 1000);
    });
  });
  