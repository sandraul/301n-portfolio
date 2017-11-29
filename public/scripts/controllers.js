'use strict';

(function(module) {
   const homeController = {};

homeController.index = function () {
  $('.tab-content').hide();
  $('#home').show();
}

   module.homeController = homeController;
})(window);


(function(module) {
   const projectController = {};

projectController.index = function () {

  Portfolio.fetchAll(portfolioView.initPage);
  $('.tab-content').hide();
  $('#projects').show();
}

   module.projectController = projectController;
})(window);
