var $ = require('jquery');
var Backbone = require('backbone');
var moment = require('moment');
var Handlebars = require('handlebars');
var daysCollection = require('../collections/days.js');
var routineCollection = require('../collections/workout.js')
var listWorkoutsTemplate = require('../templates/list-workouts.hbs')
var totalPercent = require('../util/totalPercent.js')

// App
var App = require('../app');

// View: List Workouts

var ListWorkouts = Backbone.View.extend({
	el: $('main'),
	events: {
		"click .today-exercise-submit": "completedWorkout"
	},

	completedWorkout: function (e) {
		e.preventDefault();
		$.get('http://localhost:3000/completed-workouts/').done(function (data) {
			$.ajax({
				url: 'http://localhost:3000/completed-workouts/' + data[0].id,
				type: 'PUT',
				data: {
					completedWorkouts: data[0].completedWorkouts + 1
				}
			}).done(function () {
				totalPercent();
				App.router.navigate('/finish', true)
			})
			
		})
	},

	render: function (dayId) {
		var _this = this; 

		routineCollection.fetch().done(function (workout) {
		
			var today = moment().format("dddd");
			var dayModel = daysCollection.findWhere({
		  		day: today
		  	})

		  	var todaysRoutine = routineCollection.where({
		  		daysId: dayModel.id
		  	}).map(function (routine) {
		  		return routine.toJSON()
		  	})

		  	_this.$el.html(listWorkoutsTemplate(todaysRoutine))
		});

	}
});


module.exports = ListWorkouts;
