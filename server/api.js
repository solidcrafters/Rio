var homeController = require('../server/controllers/home');

module.exports = function(app) {
    var home = new homeController();

    app.get('/api/version', function(req, res) {
        res.json({
            version:home.version()
        });
    });
};

