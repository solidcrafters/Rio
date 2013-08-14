'use strict';

angular.module('RioApp')
    .factory('documentStorage', function() {
        return new LocalDataStorage();
    })
    .controller('Document', function ($scope, documentStorage) {
        $scope.create = function(documentSpecification) {
            var document = new Document(
                new Date(documentSpecification.date),
                documentSpecification.amount,
                documentSpecification.note);

            documentStorage.add(document);
        }
    });

