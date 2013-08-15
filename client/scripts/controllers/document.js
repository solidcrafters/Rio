'use strict';

angular.module('RioApp')
    .factory('documentStorage', function() {
        return new LocalDataStorage();
    })
    .controller('Document', function ($scope, documentStorage) {

        $scope.document = {
            date: new Date()
        };

        $scope.create = function(documentSpecification) {
            var document = new Document(
                documentSpecification.date,
                documentSpecification.amount,
                documentSpecification.note);

            documentStorage.add(document);
        }
    });

