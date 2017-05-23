'use strict';

describe('Service: randomName', function() {
  // load the service's module
  beforeEach(module('fullstackAngularApp.randomName'));

  // instantiate service
  var randomName;
  beforeEach(inject(function(_randomName_) {
    randomName = _randomName_;
  }));

  it('should do something', function() {
    expect(!!randomName).to.be.true;
  });
});
