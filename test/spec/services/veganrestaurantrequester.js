'use strict';

describe('Service: veganRestaurantRequester', function () {

  // load the service's module
  beforeEach(module('d3FunApp'));

  // instantiate service
  var veganRestaurantRequester;
  beforeEach(inject(function (_veganRestaurantRequester_) {
    veganRestaurantRequester = _veganRestaurantRequester_;
  }));

  it('should do something', function () {
    expect(!!veganRestaurantRequester).toBe(true);
  });

});
