'use strict';

angular.module('d3FunApp')
  .controller('VeganCtrl', function ($scope, veganRestaurantRequester) {
    
    $scope.restaurants = [];
    $scope.restaurantCount = 0; // hardcode now
    $scope.loading = true;

    $scope.fetchContent = function() {
      veganRestaurantRequester.getData().then(function(result) {
        $scope.restaurants = result.entries;
        $scope.restaurantCount = result.entries.length;
        $scope.loading = false;
        console.log($scope.restaurants);
      });
    }

    $scope.fetchContent(); // DONT WANNA EXPLODE API

    // $scope.values = { p: 10, o: 0, c: -10 };
    // action to randomize data
    $scope.randomize = function () {
      $scope.restaurantCount = ( Math.random() * 100 ) + 50;

    };


  });
