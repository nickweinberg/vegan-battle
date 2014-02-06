'use strict';

angular.module('d3FunApp')
  .controller('VeganCtrl', function ($scope, veganRestaurantRequester) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.restaurants = [];
    $scope.restaurantCount = 0;
    $scope.loading = true;

    $scope.fetchContent = function() {
      veganRestaurantRequester.getData().then(function(result) {
        $scope.restaurants = result.entries;
        $scope.restaurantCount = result.entries.length;
        $scope.loading = false;
      });
    }

    $scope.fetchContent(); // DONT WANNA EXPLODE API

    $scope.graph = {'width': 600, 'height': 300}

    $scope.circles = [
      {'x': 15, 'y': 20, 'r':30},
      {'x': 35, 'y': 60, 'r':20},
      {'x': 55, 'y': 10, 'r':40},
    ]

    // action to randomize data
    $scope.randomize = function () {
      for (var i=0; i<$scope.circles.length; i+=1) {
        $scope.circles[i]['r'] = ( Math.random() * 100 );
        $scope.circles[i]['x'] = ( Math.random() * $scope.graph.width );
        $scope.circles[i]['y'] = ( Math.random() * $scope.graph.height ) + 20;
      }
    }


  });
