var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var daysCollection = require('../collections/days.js');
var routineCollection = require('../collections/workout.js')
var listWorkoutsTemplate = require('../templates/list-workouts.hbs')

// App
var App = require('../app');

// View: List Workouts

var ListWorkouts = Backbone.View.extend({
	el: $('main'),

	render: function () {
		console.log('render workouts');
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

		routineCollection.fetch().done(function (routine) {
			var today = 'Monday';
			var workoutModel = routineCollection.find(function (model) {
				if(model.get('daysId') == today) {
					return true;
				}
				return false;
			});
			_this.daysId = workoutModel.get('id');

			console.log(_this.daysId)

			// var dayId = workoutModel.get('daysId');

			// var dayModel = new App.Models.Day({id: daysId})
			// dayModel.fetch.done(function (day) {
			// _this.$el.html(listWorkoutsTemplate(day))
				
			// })

		})

	}
});


module.exports = ListWorkouts;


























    //     App.Collections.workout.each(function(routine) {
		  // console.log('hellll', routines.routine)

		  // var output = tmpl({
		  //  	id: routine.id,
		  //  	type: routine.type,
		  //  	set: routine.sets,
		  //  	reps: routine.reps,
		  //  	eacharm: routine.eacharm
		  // });