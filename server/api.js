var homeController = require('./controllers/home');

module.exports = function(app) {
    var home = new homeController();

    app.get('/api/version', function(request, response) {
        response.json({
            version:home.version()
        });
    });
};

