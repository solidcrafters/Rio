'use strict';

angular.module('RioApp')
    .factory('documentStorage', function() {
        return new LocalDocumentStorage();
    })
    .controller('Document', function ($scope, documentStorage) {
        $scope.create = function(document) {
            documentStorage.add(document);
        }
    });

