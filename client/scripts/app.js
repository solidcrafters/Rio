'use strict';

angular.module('RioApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/document/new', {
            templateUrl: 'views/document.html',
            controller: 'Document'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
