'use strict';

angular.module('d3FunApp')
  .factory('veganRestaurantRequester', function (userLocator, $q, $http) {
    // Service logic
    // ...
    var baseURL = 'http://www.vegguide.org/search/by-lat-long/';

    // Public API here
    return {
      getData: function () {
        var deferred = $q.defer();
        // get users location
        // data.coords.latitude, data.coords.longitude
        userLocator.getLocation().then(function(data){
          console.log('found location of' + data.coords);
          // make API request
          $http.get(baseURL + data.coords.latitude + ',' + data.coords.longitude)
               .success(function (data) {
                  deferred.resolve(data);
                  console.log('found restaurant data');
               })
               .error(function(err) {
                  deferred.reject('error with http request!');
                  console.log('error with http request');
               });
        });
        return deferred.promise;
      }
    };
  });
