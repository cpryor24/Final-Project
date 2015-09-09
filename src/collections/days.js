var Backbone = require('backbone');

/****************************************
  App
*****************************************/
var App = require('../app');
var Day = require('../models/days');

/****************************************
  Collection: Days
*****************************************/

var DayCollection = Backbone.Collection.extend({
	url: App.Settings.apiRoot + '/days',
  	model: Day
});

App.Collections.day = new DayCollection;

module.exports = App.Collections.day;

