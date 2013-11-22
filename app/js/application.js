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
