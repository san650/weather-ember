Weather.WeatherCondition = DS.Model.extend({
  city: DS.belongsTo('city'),
  temperature: DS.attr('number'),
  text: DS.attr('string'),
  code: DS.attr('number')
});

Weather.WeatherCondition.FIXTURES = [];

$.each(Weather.City.FIXTURES, function(index, element) {
  Weather.WeatherCondition.FIXTURES.push({
    id: index,
    city: element,
    temperature: 15.0,
    text: 'xxx',
    code: 123
  });
});
