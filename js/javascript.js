$(document).ready(function() {
  $('.btn-blue').click(function() {
    $('.header-green').addClass('header-blue').removeClass("header-green header-red")
    $('.header-red').addClass('header-blue').removeClass("header-green header-red")
  });

  $('.btn-red').click(function() {
    $('.header-green').addClass('header-red').removeClass("header-green header-blue")
    $('.header-blue').addClass('header-red').removeClass("header-green header-blue")
  });

  $('.btn-green').click(function() {
    $('.header-blue').addClass('header-green').removeClass("header-red header-blue")
    $('.header-red').addClass('header-green').removeClass("header-red header-blue")
  });
});