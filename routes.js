module.exports = function(app) {
	// HTML Routes
	var routes = ["/dashboard"];
	app.get(routes, function(req, res, next) {
	  res.sendFile('./public/index.html', {root: __dirname});
	});

	// API Routes
	app.get('/data', function(req, res, next) {
	var data = {
		"firstName": "Bryan",
		"lastName": "Kimmons"
	}
  return res.json(data);
});
}