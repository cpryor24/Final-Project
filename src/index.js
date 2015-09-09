var $ = require('jquery');
var moment = require('moment');
var Backbone = require('backbone');
var Handlebars = require('handlebars');

// App
var App = require('./app.js');
// var userCollection = require('./collections/user');
var workoutCollection = require('./collections/workout');
var categoryCollection = require('./collections/category');
var dayCollection = require('./collections/days')

//View: List Users
// var ListUsersView = require('./views/list-users');
// App.Views.ListUsers = new ListUsersView;

//View: Form
var WorkoutFormView = require('./views/workout-form');
App.Views.WorkoutForm = new WorkoutFormView;

// View: Days
var DayView = require('./views/days');
App.Views.Days = new DayView;

//View: Home Page
var HomeView = require('./views/category');
App.Views.Home = new HomeView;

//View: Finish Workout
var FinishView = require('./views/finish');
App.Views.Finish = new FinishView;

// View: List Workouts
var ListWorkoutsView  = require('./views/list-workouts');
App.Views.ListWorkouts = new ListWorkoutsView;

// App Router
App.Router = Backbone.Router.extend({

	// Route definitons
  	routes: {
		'': 'index',
		'workouts/add(/)': 'addWorkout',
		'workouts/:id/edit': 'addWorkout',
		'workouts/:id/delete': 'deleteWorkout',
		'workouts/:dayId(/)': 'listWorkouts',
		'finish': 'finishWorkout',
		// 'days(/)': 'listDays',
		'*actions': 'defaultRoute'
	},

  	//Route handlers

	index: function() {
		App.Views.Home.render();
  	},

  	listWorkouts: function(dayId) {
  		App.Views.ListWorkouts.render(dayId);
 	},

	addWorkout: function(id) {
		App.Views.WorkoutForm.render(id);
	},

	deleteWorkout: function(id) {
		var workout = workoutCollection.get(id);

		workout.destroy().done(function (workout) {
	 		App.router.navigate('/workouts/' + id, { trigger: true })
		});  	
	},

	finishWorkout: function() {
		App.Views.Finish.render();
	},

	// listDays: function() {
	// 	App.Views.Days.render()
	// },

	defaultRoute: function(actions) {
		console.log('404')
	}

});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();

$('.details').on('click', function(e) {
    e.preventDefault();
    var day = moment().day();
    App.router.navigate('/workouts/' + day, true);
    console.log('hello')
});
 
var totalPercent = require('./util/totalPercent.js')

totalPercent();