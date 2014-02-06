'use strict';

describe('Controller: CircleCtrl', function () {

  // load the controller's module
  beforeEach(module('d3FunApp'));

  var CircleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CircleCtrl = $controller('CircleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
