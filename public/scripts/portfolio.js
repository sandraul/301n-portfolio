'use strict';


//Constructor Function
function Portfolio (portfolioData) {
  this.image = portfolioData.image;
  this.title = portfolioData.title;
  this.link = portfolioData.link;
  this.description = portfolioData.description;
}

Portfolio.all = [];

Portfolio.prototype.toHTML = function() {
  var templateFiller = Handlebars.compile( $("#projects-template").html() );
  return templateFiller(this);
};


Portfolio.fetchAll = function() {
  if (localStorage.portfolioData) {
  Portfolio.loadAll(JSON.parse(localStorage.portfolioData));
  portfolioView.initPage();
  } else {
  console.log("localStorage doesn't exist");
  $.getJSON("/data/portfolioJSON.json", function(data) {
    localStorage.setItem('portfolioData', JSON.stringify(data));
    Portfolio.loadAll(data);
    portfolioView.initPage();
    })
  }
};

Portfolio.loadAll = function(projects) {
  projects.forEach(function(project) {
    Portfolio.all.push(new Portfolio(project));
  })
};
