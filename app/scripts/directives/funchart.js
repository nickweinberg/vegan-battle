'use strict';

angular.module('d3FunApp')
  .directive('funChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the funChart directive');
      }
    };
  });
