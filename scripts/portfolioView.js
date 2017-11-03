'use strict';

var portfolioView = {};

portfolioView.handleMainNav = function () {

  $('.icon-menu').on('click', function () {

    $('.main-nav ul').slideToggle('slow', function () {
      $('.icon-menu').hide();
      $('.icon-close').show();
    });
  });

  $('.icon-close').on('click', function () {

    $('.main-nav ul').slideToggle('slow', function () {
      $('.icon-close').hide();
      $('.icon-menu').show();
    });
  });
}

$(document).ready(function() {
  portfolioView.handleMainNav();
})
