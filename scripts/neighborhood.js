'use strict' ;

let neighborhoods = [];

function Neighborhood(rawDataObj) {
  this.name = rawDataObj.name;
  this.city = rawDataObj.city;
  this.population = rawDataObj.population;
  this.founded = rawDataObj.founded;
  this.body = rawDataObj.body;
}

Neighborhood.prototype.toHtml = function() {
  // STEP 1: Get the template from the HTML document
  const $template = $('#neighborhood-template').html(); // for coder recognition that expected value is a jQuery object
  // STEP 2: compile the template to regular HTML
  const $source = Handlebars.compile($template); // fill blank Handlebars template with actual template
  // STEP 3: return the compiled template
  return $source(this); // allows chaining with template as 'this'
};

// no AJAX call needed because dataset called in HTML

neighborhoodsDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(city => {
  $('#neighborhoods').append(city.toHtml());
});
