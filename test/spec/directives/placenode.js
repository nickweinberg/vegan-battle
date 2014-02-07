'use strict';

describe('Directive: placeNode', function () {

  // load the directive's module
  beforeEach(module('d3FunApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<place-node></place-node>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the placeNode directive');
  }));
});
