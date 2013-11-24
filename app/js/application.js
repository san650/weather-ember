// ## Application

window.Weather = Ember.Application.create({
  ready: function(){
    console.log("Application ready!");
  },
  LOG_TRANSITIONS: true
});
Weather.ApplicationAdapter = DS.FixtureAdapter.extend();

// ## ROUTES

Weather.Router.map(function() {
  this.route("cities");
});

Weather.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo("cities");
  }
});

Weather.CitiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('city');
  }
});

// ## Controllers

Weather.CitiesController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,

  total: function() {
    switch(this.get("length")) {
      case 0:
        return "There are no cities";
      case 1:
        return "There is one city";
      default:
        return "There are " + this.get("length") + " cities";
    }
  }.property("length")
});
