'use strict';

describe('Document Controller', function() {

    beforeEach(angular.mock.module('RioApp'));

    describe('Document Creation', function() {

        var storageSpy;
        var scope;
        var documentController;

        beforeEach(module('RioApp', function($provide) {
            var documentStorage = {
                add: function(){}
            };

            storageSpy = sinon.spy(documentStorage, 'add');

            $provide.value('documentStorage', documentStorage);
        }));

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            documentController = $controller('Document', {
                $scope: scope
            });
        }));

        it('should create a new document', function() {

            var date = '06/23/2013';
            var amount = 234.15;
            var note = 'Achat d\'un dongle USB pour Mac';
            var documentSpecification = {
                date: date,
                amount: amount,
                note: note
            };

            scope.create(documentSpecification);

            var document = new Document(new Date(date), amount, note);
            storageSpy.should.have.been.calledWith(document);
        });
    });
});
