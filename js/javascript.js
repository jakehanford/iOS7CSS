$(document).ready(function() {
  $('.btn-blue').click(function() {
    $('.header-green').addClass('header-blue').removeClass("header-green header-red header-white")
    $('.header-red').addClass('header-blue').removeClass("header-green header-red header-white")
    $('.header-white').addClass('header-blue').removeClass("header-green header-red header-white")
  });

  $('.btn-red').click(function() {
    $('.header-green').addClass('header-red').removeClass("header-green header-blue header-white")
    $('.header-blue').addClass('header-red').removeClass("header-green header-blue header-white")
    $('.header-white').addClass('header-red').removeClass("header-green header-blue header-white")
  });

  $('.btn-green').click(function() {
    $('.header-blue').addClass('header-green').removeClass("header-red header-blue header-white")
    $('.header-red').addClass('header-green').removeClass("header-red header-blue header-white")
    $('.header-white').addClass('header-green').removeClass("header-red header-blue header-white")
  });

  $('.btn-white').click(function() {
    $('.header-blue').addClass('header-white').removeClass("header-red header-blue header-green")
    $('.header-red').addClass('header-white').removeClass("header-red header-blue header-green")
    $('.header-green').addClass('header-white').removeClass("header-red header-blue header-green")
  });
});