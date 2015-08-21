var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var daysCollection = require('../collections/days.js');
var categoryCollection = require('../collections/category.js');
var homeTemplate = require('../templates/category.hbs');

// App
var App = require('../app');

// View: 
var Home = Backbone.View.extend({
	el: $('main'),

	dayId: 0,

	events: {
		"click button.session-details": "workoutDetails"
	},

	render: function () {
	 	var _this = this; 
   
		daysCollection.fetch().done(function (cat) {

			var today = 'Monday';

		  	var dayModel = daysCollection.find(function (model) {
		  		if (model.get('day') == today) {
		  			return true
		  		}
		  		return false;
		  	})

		  	_this.dayId = dayModel.get('id')

		  	var categoryId = dayModel.get('categoryId')


		  	var categoryModel = new App.Models.Category({id: categoryId})
		  	categoryModel.fetch().done(function (category) {
		    	_this.$el.html(homeTemplate(category));
		  	})
		});
	},

	workoutDetails: function (event) {
		event.preventDefault(),

		// Route to workout for the day
		App.router.navigate('workouts/' + this.dayId, true);
	}
});

module.exports = Home;