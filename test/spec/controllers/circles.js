'use strict';

describe('Controller: CirclesCtrl', function () {

  // load the controller's module
  beforeEach(module('d3FunApp'));

  var CirclesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CirclesCtrl = $controller('CirclesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
