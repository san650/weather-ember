// ## Application

window.Weather = Ember.Application.create({
  ready: function(){
    console.log("Application ready!");
  },
  LOG_TRANSITIONS: true
});
Weather.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

// ## ROUTES

Weather.Router.map(function() {
  this.resource("cities", function(){
    this.route("city", { path: ":city_id" });
  });
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
  itemController: 'city',
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
  }.property("length"),

  actions: {
    filter: function() {
      var term = new RegExp($.trim(this.get("filterTerm")), "i");

      this.forEach(function(m) {
        m.set('hide', !term.test(m.get('name')));
      });
    }
  }
});

Weather.CityController = Ember.ObjectController.extend({
  hidden: false
});
