var Backbone = require('backbone');

/****************************************
  App
*****************************************/
var App = require('../app');
var Category = require('../models/category');

/****************************************
  Collection: Category for Homepage 
*****************************************/

var CategoryCollection = Backbone.Collection.extend({
	url: App.Settings.apiRoot + '/category',
	model: Category
});

App.Collections.category = new CategoryCollection;

module.exports = App.Collections.category;

