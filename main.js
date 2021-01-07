$(document).ready(function(){
  //quando clicca su hamburger menu
  $('.header-right').click(function(){
    $('header-right>a i ').show();
  });
  //quando clicca sulla x
  $('.hamburger-menu').click(function(){
    $('.close').hide();
  });
});
