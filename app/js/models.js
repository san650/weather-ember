Weather.City = DS.Model.extend({
  name: DS.attr("string"),
  detail: DS.belongsTo("detail")
});

Weather.Detail = DS.Model.extend({
  temp: DS.attr("number"),
  cond: DS.attr("string"),
  city: DS.belongsTo("city")
});
