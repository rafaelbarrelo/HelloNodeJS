module.exports = function(app){

	var HomeController = {
		index: function(req, resp){
			resp.render('home/index');
		},
		site: function(req, resp){
			resp.render('home/site');
		}
	};

	return HomeController;
};