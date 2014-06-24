module.exports = function(app){
	var home = app.controllers.home;
	app.get('/', home.index);
	app.get('/site', home.site);

};