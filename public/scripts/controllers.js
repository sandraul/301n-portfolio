'use strict';

(function(module) {
   const controller = {};

   // controller.home = function () {
   //   $('.tab-content').hide();
   //   $('#home').show();
   // }
   //
   // controller.about = function () {
   //   $('.tab-content').hide();
   //   $('#about').show();
   // }
   //
   // controller.skills = function () {
   //   $('.tab-content').hide();
   //   $('#skills').show();
   // }
   //
   // controller.project = function () {
   //   $('.tab-content').hide();
   //   $('#projects').show();
   // }

   controller.showMenuContent = function(menuChoice) {
     return () => {
       $('.tab-content').hide();
       $(`#${menuChoice}`).show(); //$(`#about`)
       $('.modal-overlay').hide();
     }
   }
   module.controller = controller;
})(window);
