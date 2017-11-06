'use strict';

var portfolioView = {};

portfolioView.handleMainNav = function () {

  $('.icon-menu').on('click', function () {

    $('.main-nav ul').slideToggle('slow', function () {
      $('.icon-menu').hide();
      $('.icon-cross').show();
    });

  });

  $('.icon-cross').on('click', function () {

    $('.main-nav ul').slideToggle('slow', function () {
      $('.icon-cross').hide();
      $('.icon-menu').show();
    });
  });
}

portfolioView.handleTabs = function() {
  $('.main-nav .tab').on('click', function(event) {
    event.preventDefault();
    var selectedSection = $(this).data('content');
    console.log('showing ' + selectedSection);
    $('.tab-content').hide();
    $('#' + selectedSection).fadeIn(1000);
    $('.icon-cross').click();
  });
  $('.tab-content').hide();
  $('#projects').fadeIn(1000);
}


$(document).ready(function() {
  portfolioView.handleMainNav();
  portfolioView.handleTabs();
})
