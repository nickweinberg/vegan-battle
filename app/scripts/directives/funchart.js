'use strict';

angular.module('d3FunApp')
  .directive('funchart', function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			label: "@",
			min: "=",
			max: "=",
			value: "="
		},
		link: function postLink(scope, element, attrs, ngModelCtrl) {
    	    var data = scope.value;
    	    var color = d3.scale.category10();
    	    var el = element[0];
    	    var width = el.clientWidth;
    	    var height = el.clientHeight;
    	    var min = Math.min(width, height);

    	    var sample = d3.select(el)
    	    	.append('svg')	
    	    	.style('color', 'yellow')
    	    	.style('background-color', '#ffff99');

    	    /*
    	    scope.$watch( 'value', function () {
    	    	console.log('changing' + scope.value);
    	    	 sample.append('circle')
	    	    	.style('stroke', '#333333')
	    	    	.style('stroke-width', 5)
	    	    	.style('fill', '#ff3300')
	    	    	.attr('r', scope.value * 3)
	    	    	.attr('cx', width / 2)
	    	    	.attr('cy', height / 2)
	    	    	.on('mouseover', function() {
	    	    		d3.select(this).style('fill', 'aliceblue');
	    	    	})
	    	    	.on('mouseout', function() {
	    	    		d3.select(this).style('fill', 'white');
	    	    	});
	    	    sample.append('svg:text')
	    	    	.attr('dy', '.31em')
	    	    	.attr('x', width / 2)
	    	    	.attr('y', height / 2)
	    	    	.text('You Are Here!');

    	    }); 	    
			*/
      }
	}
  });
