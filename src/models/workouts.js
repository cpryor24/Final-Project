var Backbone = require('backbone');

/****************************************
  App
*****************************************/

var App = require('../app');

/****************************************
  Model: Workout
*****************************************/

App.Models.Workout = Backbone.Model.extend({
  url: function() {
    var base = App.Settings.apiRoot + '/workouts';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = App.Models.Workout;