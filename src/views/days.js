var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var dayCollection = require('../collections/days.js')
var DayListTemplate = require('../templates/day-list.hbs')

// App
var App = require('../app');

// View: List Workouts

var DayList = Backbone.View.extend({
	el: $('main'),

	render: function () {
	  console.log('render workouts');
	  var _this = this; 
        
      dayCollection.fetch().done(function (days) {
    	console.log(dayCollection)
	  	_this.$el.html(DayListTemplate(days))

      })
    
	}
});


module.exports = DayList;


























    //     App.Collections.workout.each(function(routine) {
		  // console.log('hellll', routines.routine)

		  // var output = tmpl({
		  //  	id: routine.id,
		  //  	type: routine.type,
		  //  	set: routine.sets,
		  //  	reps: routine.reps,
		  //  	eacharm: routine.eacharm
		  // });