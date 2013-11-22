// ## Application

window.Weather = Ember.Application.create({
  ready: function(){
    console.log("Application ready!");
  },
  LOG_TRANSITIONS: true
});

// ## ROUTES

Weather.Router.map(function() {
  this.route("cities");
});
