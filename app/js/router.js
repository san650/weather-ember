Weather.Router.map(function () {
  this.resource("cities", { path: "/" });
});

Weather.CitiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('city');
  }
});
