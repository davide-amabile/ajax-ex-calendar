$(document).ready(function(){

  // data iniziale
  var dataIniziale =  moment("2018-1-1");

  // variabile quanti giorni in un mese
  var numGiorni = dataIniziale.daysInMonth();

  // fare ciclo for per generare la lista dei giorni
  for ( i=1; i < numGiorni; i++) {
  // handlebars template
  var source = $("calendario-template").html();
  var template = Handlebars.compile(source);

  var context = {
    "day" : numGiorni[i],
    "month": "january",
    "year": dataIniziale.year()
  };
    var html = template(context);

    $(".wrapper_main").append(html);
  }
  // fine ciclo

});
// fine documento jquery
