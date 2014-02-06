'use strict';

angular.module('d3FunApp')
  .controller('CircleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // GET DEM SOME CHARTS DIRECTIVE TIME
    $scope.charts = d3.range(10).map(function () {
      return d3.range(10).map(Math.random);
    });



  });
