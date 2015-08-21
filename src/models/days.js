var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  Model: Category for Homepage
*****************************************/

App.Models.Day = Backbone.Model.extend({
  url: function() {
	var base = App.Settings.apiRoot + '/days';
	if (this.isNew()) return base;
	return base + '/' + this.id
  }
});

module.exports = App.Models.Day;