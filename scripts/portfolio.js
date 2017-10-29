'use strict'

var allPortfolios = [];

//Constructor Function
function Portfolio (portfolioData) {
  this.image = portfolioData.image;
  this.title = portfolioData.title;
  this.link = portfolioData.link;
  this.description = portfolioData.description;
}

Portfolio.prototype.toHTML = function() {
  var $newPortofolio = $('.template').clone().removeClass('template');

  $newPortofolio.find('.image-show').attr('src', this.image);
  $newPortofolio.find('.title-link').text(this.title).attr('href', this.link);
  $newPortofolio.find('.description').html(this.description);

return $newPortofolio;

};

portfolioData.forEach(function(eachItem) {
  allPortfolios.push(new Portfolio(eachItem));
});

allPortfolios.forEach(function(port) {
  $('.work-container').append(port.toHTML());
});
