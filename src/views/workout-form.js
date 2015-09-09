var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../templates/workout-form.hbs');
var completeSession = require('../templates/finish.hbs')

/****************************************
  App
*****************************************/

var App = require('../app');
var Workout = require('../models/workouts.js')

/****************************************
  View: Workout Form
*****************************************/

var WorkoutFormView = Backbone.View.extend({
	el: $('main'),
	editMode: false,

	render: function (workoutId) {
		var _this = this;
		this.editMode = !!workoutId;

		// Display form in Create Mode
		if (!this.editMode) {

			var output = formTemplate()

			this.$el.html(output)

		// Display form in Update Mode
		} else {
			var workout = this.workout = new Workout({id: workoutId});

			workout.fetch().done(function (routine) {
			
				var output = formTemplate(workout.toJSON());

				_this.$el.html(output);

				var form = _this.$el.find( $('form.workout') )

				form.find( $('form.workout select[name="daysId"]') ).val(routine.daysId)
				form.find( $('form.workout input[name="type"]') ).val(routine.type)
				form.find( $('form.workout select[name="sets"]') ).val(routine.sets)
				form.find( $('form.workout input[name="reps"]') ).val(routine.reps)
				form.find( $('form.workout select[name="minutes"]') ).val(routine.minutes)

			})
		}
	},

	events: {
		"submit form.workout": "submitForm"
	},

	submitForm: function (event) {
		event.preventDefault()
		// Collect Form Data
		var formData = {
			daysId: $('form.workout select[name="daysId"]').val(),
			type: $('form.workout input[name="type"]').val(),
			sets: $('form.workout select[name="sets"]').val(),
			reps: $('form.workout input[name="reps"]').val(),
			minutes: $('form.workout select[name="minutes"]').val()

		};

		// Add Mode (Create Workout)
		if(!this.editMode) {

			App.Collections.workout.create(formData, {
				success: function (workout) {
					App.router.navigate('#/workouts/' + this.dayId, { trigger: true });
				}
			});

		// Edit Mode (Update Workout)
		} else {
			this.workout.set(formData);
			this.workout.save().done(function () {
				App.router.navigate('#/workouts/' + this.dayId, { trigger: true });
			});
		}
	}
})

module.exports = WorkoutFormView;