var Backbone = require('backbone');

// App
var App = require('./app.js');
// var userCollection = require('./collections/user');
// var workoutCollection = require('./collections/workout');
// var categoryCollection = require('./collections/category');

//View: List Users
// var ListUsersView = require('./views/list-users');
// App.Views.ListUsers = new ListUsersView;

// View: List Workouts
var ListWorkoutsView  = require('./views/list-workouts');
App.Views.ListWorkouts = new ListWorkoutsView;
console.log('hello...');
// App Router
App.Router = Backbone.Router.extend({

  // Route definitons
  routes: {
	'': 'index',
	'workouts(/)': 'listWorkouts',
	// 'workouts/add(/)': 'addWorkout',
	// 'workouts/:id/edit': 'addWorkout',
	// 'workouts/:id/delete': 'deleteWorkout',
	'*actions': 'defaultRoute'
  },

  //Route handlers

  index: function() {
  	App.Views.ListWorkouts.render();
  	console.log('I\'m on the homepage');
  },

  listWorkouts: function() {
  	App.Views.ListWorkouts.render();
  	console.log('I\'m on the workout page');
  },

 //  addWorkout: function(id) {
 //  	App.Views.WorkoutForm.render(id);
 //  },

 //  deleteWorkout: function(id) {
	// var workout = workoutCollection(id);

	// workout.destroy().done(function (workout) {
	//   App.router.navigate('/', { trigger: true })
	// });  	
 //  },

  defaultRoute: function(actions) {
  	console.log('404')
  }

});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();