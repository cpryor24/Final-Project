var $ = require('jquery');
var Backbone = require('backbone');

// App

var App = require('../app');
// View: List Workouts

var ListWorkouts = Backbone.View.extend({
	el: $('main'),

	collection: App.Collections.workout,

	render: function () {
		var _this = this;
		var workoutCollection = this.collection;

		// Fetch Collection from Server
		workoutCollection.fetch().done(function (workouts) {
			workoutCollection.add(workouts);

			_this.$el.html(listWorkoutsTemplate(workouts))
		})
	}
});


module.exports = ListWorkouts;