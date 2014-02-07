'use strict';

angular.module('d3FunApp')
  .directive('placenode', function () {
    return {
      scope: {
      	data: '=chartData'
      },
      restrict: 'E',
      replace: false,
      link: function postLink(scope, element, attrs) {
        
        // not sure why this works and not observing doesn't
      	

            var getCorrectGreen = function (level) {
                // return a corresponding green based on veglevel
                if (level == '1') {
                    return '#DDDDB9';
                } else if (level == '2') {
                    return '#1abc9c';
                } else if (level == '3') {
                    return '#2ecc71';
                } else if (level == '4') {
                    return '#16a085';
                } else if (level == '5') {
                    return '#27ae60';
                }
            };
      		// element.text(scope.label +  ' ' + value + ' ' + scope.distance);
            scope.$watch('data', function(newValue, oldValue) {
                if (newValue.length > 10) {
                    console.log("I see a data change!");
                
            


            var chart = d3.select('#canvas-spot').append('svg')
                                         .attr('width', 800)
                                         .attr('height', 500);
      		// DRAW PRETTY CIRCLE PICTURES
      		
                 chart.selectAll('circle')
                 .data(scope.data).enter().append('circle')
                 .attr('cx', function (d) { return d.distance * 700 - 100; })
                 .attr('cy', function (d) { return 200 })
                 .attr('r', function (d) { return d.veg_level * 12; })
                 .style('fill', function (d) { return getCorrectGreen(d.veg_level); });

            var text = chart.selectAll('text')
                            .data(scope.data).enter().append('text');

            var textLabels = text
                             .attr('x', function(d) { return d.distance * 1000 - 100; })
                             .attr('y', 300)
                             .style('color', function (d) { return getCorrectGreen(d.veg_level); })
                             .text( function (d) { return d.name })
                             .attr("font-family", "sans-serif")
                             .attr('font-size', '10px')
      	         }
            }, true);
      }
    };
  });
