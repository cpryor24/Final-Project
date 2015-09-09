var $ = require('jquery');
var moment = require('moment');

function totalPercent () {
	 $.get('http://localhost:3000/completed-workouts?week=' + moment().format('YYYYW') ).done(function (data) {
	 		var workouts = data[0];
	 		if (workouts.totalWorkouts == 0) {
	 			$('.percent').text(0)
	 		} else {
	 			$('.percent').text(Math.round(workouts.completedWorkouts / workouts.totalWorkouts * 100))
	 		}
	 })
 	
 }

 module.exports = totalPercent;