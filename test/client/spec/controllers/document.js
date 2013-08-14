'use strict';

describe('Document Controller', function() {

    beforeEach(angular.mock.module('RioApp'));

    describe('Document Creation', function() {

        var storageSpy;

        beforeEach(module('RioApp', function($provide) {
            var documentStorage = {
                add: function(){}
            };

            storageSpy = sinon.spy(documentStorage, 'add');

            $provide.value('documentStorage', documentStorage);
        }));

        it('should create a new document', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var documentController = $controller('Document', {
                $scope: scope
            });

            var document = {
                date: new Date('23/06/2013'),
                amount: 234.15,
                note: 'Achat d\'un dongle USB pour Mac'
            };
            scope.create(document);
            storageSpy.should.have.been.called;
        }));
    });
});
