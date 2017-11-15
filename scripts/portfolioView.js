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

    if ($('.icon-cross').css('display') !== 'none') {
      $('.icon-cross').click(); //This hides the menu when clicking on a section
    }
  });

  //This shows the main section only on initial load
  $('.tab-content').hide();
  $('#main').fadeIn(1000);
}

portfolioView.initPage = function() {
  Portfolio.all.forEach(function(project) {
    $('.work-container').append(project.toHTML())
  });
};


$(document).ready(function() {
  portfolioView.handleMainNav();
  portfolioView.handleTabs();
  Portfolio.fetchAll();

})
