console.log("OIIIs");
$(document).ready(function () {
  $(".apresentacao__conteudo__links__link").hover(
    function () {
      $(".destaque-titulo").css("color", "rgb(49, 48, 77)");
    },
    function () {
      $(".destaque-titulo").css("color", "");
    }
  );
});
