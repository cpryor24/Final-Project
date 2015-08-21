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

// View: Days
var DayView = require('./views/days');
App.Views.Days = new DayView;

//View: Home Page
var HomeView = require('./views/homepage');
App.Views.Home = new HomeView;

// View: List Workouts
var ListWorkoutsView  = require('./views/list-workouts');
App.Views.ListWorkouts = new ListWorkoutsView;

// App Router
App.Router = Backbone.Router.extend({

	// Route definitons
  	routes: {
		'': 'index',
		'workouts(/):dayId(/)': 'listWorkouts',
		// 'workouts/add(/)': 'addWorkout',
		// 'workouts/:id/edit': 'addWorkout',
		// 'workouts/:id/delete': 'deleteWorkout',
		'days(/)': 'listDays',
		'*actions': 'defaultRoute'
	},

  	//Route handlers

	index: function() {
		App.Views.Home.render();
  	},

  	listWorkouts: function(dayId) {
  		App.Views.ListWorkouts.render(dayId);
 	},

	// addWorkout: function(id) {
	// 	App.Views.WorkoutForm.render(id);
	// },

	// deleteWorkout: function(id) {
	// 	var workout = workoutCollection(id);

	// 	workout.destroy().done(function (workout) {
	//  		App.router.navigate('/', { trigger: true })
	// 	});  	
	// },

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