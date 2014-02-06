'use strict';

describe('Service: userLocator', function () {

  // load the service's module
  beforeEach(module('d3FunApp'));

  // instantiate service
  var userLocator;
  beforeEach(inject(function (_userLocator_) {
    userLocator = _userLocator_;
  }));

  it('should do something', function () {
    expect(!!userLocator).toBe(true);
  });

});
