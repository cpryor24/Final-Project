var $ = require('jquery');
var Backbone = require('backbone');
var moment = require('moment');
var Handlebars = require('handlebars');
var daysCollection = require('../collections/days.js');
var routineCollection = require('../collections/workout.js')
var listWorkoutsTemplate = require('../templates/list-workouts.hbs')

// App
var App = require('../app');

// View: List Workouts

var ListWorkouts = Backbone.View.extend({
	el: $('main'),

	render: function (dayId) {
		var _this = this; 

		routineCollection.fetch().done(function (workout) {
		
			var today = moment().format("dddd");
			var dayModel = daysCollection.findWhere({
		  		day: today
		  	})

		  	var todaysroutine = routineCollection.where({
		  		daysId: dayModel.id
		  	}).map(function (routine) {
		  		return routine.toJSON()
		  	})

		  	_this.$el.html(listWorkoutsTemplate(todaysroutine))
		});

	}
});


module.exports = ListWorkouts;
