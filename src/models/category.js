var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  Model: Category for Homepage
*****************************************/

App.Models.Category = Backbone.Model.extend({
	url: function() {
	  var base = App.Settings.apiRoot + '/category';
	  if (this.isNew()) return base;
	  return base + '/' + this.id
	}
});

module.exports = App.Models.Category;