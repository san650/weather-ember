Weather.City = DS.Model.extend({
  name: DS.attr("string"),
  details: DS.belongsTo("details")
});

Weather.Details = DS.Model.extend({
  temp: DS.attr("number"),
  cond: DS.attr("string"),
  city: DS.belongsTo("city")
});

Weather.City.FIXTURES = [
 { id: "468063", details: 1, name: "Fray Bentos" },
 { id: "468026", details: 2, name: "La Floresta" },
 { id: "468052", details: 3, name: "Montevideo"  },
 { id: "380901", details: 4, name: "La Paloma"   },
 { id: "468081", details: 5, name: "Achar"       }
];

Weather.Details.FIXTURES = [
  { id: 1, city: "468063", temp: 19, cond: "La máxima de hoy ha sido de 21&deg;C a las 14:00 en un día Mayormente nublado" },
  { id: 2, city: "468026", temp: 25, cond: "Parcialmente nuboso. Cálido. Máximas 29C. Vientos NNE entre 15 y 30 km/h." },
  { id: 3, city: "468052", temp: 20, cond: "Predominantemente nuboso. Mínima 18C. Vientos NE entre 15 y 25 km/h." },
  { id: 4, city: "380901", temp: 25, cond: "Tormentas que se desarrollarán por la tarde. Cálido. Máximas 27C. Vientos O cambiantes a S entre 15 y 25 km/h. 60% de probabilidad de lluvia." },
  { id: 5, city: "468081", temp: 22, cond: "La máxima de hoy ha sido de 25&deg;C a las 13:00 en un día Mayormente nublado" }
];
