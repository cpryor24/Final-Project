var Backbone = require('backbone');

/****************************************
  App
*****************************************/
var App = require('../app');
var Workout = require('../models/workouts');

/****************************************
  Colllection: Workout
*****************************************/

var WorkoutCollection = Backbone.Collection.extend({
	url: App.Settings.apiRoot + '/workouts',
 	model: Workout
});

App.Collections.workout = new WorkoutCollection;

module.exports = App.Collections.workout;
