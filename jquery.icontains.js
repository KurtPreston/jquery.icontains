jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
  var args = arg.split(',');
  var searchTerm = args[0];
  var scope = args[1];
  return function (elem) {
    var context;
    if (typeof scope === 'undefined') {
      context = $(elem);
    } else {
      context = $(elem).find(scope);
    }
    return context.text().toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0;
  };
});

jQuery.expr[":"].noticontains = jQuery.expr.createPseudo(function (arg, scope) {
  var args = arg.split(',');
  var searchTerm = args[0];
  var scope = args[1];
  return function (elem) {
    var context;
    if (typeof scope === 'undefined') {
      context = $(elem);
    } else {
      context = $(elem).find(scope);
    }
    return context.text().toUpperCase().indexOf(searchTerm.toUpperCase()) < 0;
  };
});
