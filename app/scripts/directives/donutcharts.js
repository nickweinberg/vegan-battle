'use strict';

angular.module('d3FunApp')
  .directive('donutCharts', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the donutCharts directive');
      }
    };
  });
