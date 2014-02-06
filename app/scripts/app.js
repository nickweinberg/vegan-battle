'use strict';

angular.module('d3FunApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/circle', {
        templateUrl: 'views/circle.html',
        controller: 'CircleCtrl'
      })
      .when('/vegan', {
        templateUrl: 'views/vegan.html',
        controller: 'VeganCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
