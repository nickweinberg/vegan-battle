'use strict';

describe('Directive: funChart', function () {

  // load the directive's module
  beforeEach(module('d3FunApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fun-chart></fun-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the funChart directive');
  }));
});
