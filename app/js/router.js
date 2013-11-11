Weather.Router.map(function () {
  this.resource("cities", { path: "/" }, function(){
    this.route("details", { path: "/:city_id" });
  });
});

Weather.CitiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('city');
  }
});

Weather.CitiesDetailsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findById('city', params.city_id);
  }
});
