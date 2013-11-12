Weather.CitiesController = Ember.ArrayController.extend({
  actions: {
    search: function() {
      var term = this.get('searchTerm').trim().toLowerCase();
      var model = this.get('model');
      model.forEach(function(city){
        city.set('visible', (city.get('name').toLowerCase().indexOf(term) >= 0));
      });
    }
  }
});

Weather.CityController = Ember.ObjectController.extend({
  hidden: function() {
    return !this.get('model').get('visible');
  }.property('visible')
});
