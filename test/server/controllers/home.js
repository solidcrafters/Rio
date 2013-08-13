var should = require('chai').should();

describe('Home Controller Tests', function() {

    var home;
    var config = {
        rootPath :  '../../..',
        fromRoot : function(path){
           return this.rootPath + path;
        }

    };

    beforeEach(function() {
        var homeController = require(config.fromRoot('/server/controllers/home'));
        home =  new homeController();
    });

    describe('Version', function() {

        it('should return API version', function() {
            home.version().number.should.match(/\d.\d.\d.\d/);
        });

    });
});