Weather.Router.map(function () {
  this.resource("cities", { path: "/" }, function(){
    this.route("weather", { path: "/:city_id" });
  });
});

Weather.CitiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('city');
  }
});

Weather.CitiesWeatherRoute = Ember.Route.extend({
  setupController: function(controller, json) {
    // do the mapping between json weather object and our models
    var model = Weather.Weather.create({
      title: json.query.results.channel.item.title,
      description: json.query.results.channel.item.description
    });

    controller.set('model', model);
  },
  model: function(params) {
    return $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D" + params.city_id + "%20and%20u%3D'c'&format=json");
  }
});
