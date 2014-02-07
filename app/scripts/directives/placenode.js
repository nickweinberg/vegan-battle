'use strict';

angular.module('d3FunApp')
  .directive('placenode', function () {
    return {
      scope: {
      	label: '@',
      	veglevel: '@',
      	distance: '@',
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
        // not sure why this works and not observing doesn't
      	attrs.$observe('veglevel', function(value) {
      		element.text(scope.label +  ' ' + value + ' ' + scope.distance);
      	});
      }
    };
  });
