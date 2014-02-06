'use strict';

angular.module('d3FunApp')
  .factory('userLocator', function ($q, $rootScope) {
    return {
      getLocation: function () {
        var deferred = $q.defer(); // a promise?
        if (navigator && navigator.geolocation) {
          // geolocation IS available
          navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            $rootScope.$apply(function() { deferred.resolve(position); });
          }, function(error) {
            // geolcation is NOT available
            $rootScope.$apply(function() { deferred.reject('Unable to access location information'); });
          
          });
        } else {
          $rootScope.$apply(function() { deferred.reject("Unable to access location information")});
        }
        return deferred.promise;
      }
    };
  });


/*
    $scope.geoData = function() {
    if ("geolocation" in window.navigator) {
      /* geolocation is available */
      /*
      window.navigator.geolocation.getCurrentPosition(function(position) { //success callback
        // gets coordinates
        // make API call to VegGuide
          var lat = position.coords.latitude,
              lng = position.coords.longitude;

          // var veg guide url
          $scope.vegGuideURL = 'http://www.vegguide.org/search/by-lat-long/' + lat +',' + lng;
          console.log(vegGuideURL);


      },
        function() { // error callback
            console.log('unable to retrieve your location');
        });

    } else { */
      /* geolocation IS NOT available *//*
          console.log('geolocation not available in your browser!');
          return;
    }
  };

*/