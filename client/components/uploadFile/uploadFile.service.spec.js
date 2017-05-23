'use strict';

describe('Service: uploadFile', function() {
  // load the service's module
  beforeEach(module('fullstackAngularApp.uploadFile'));

  // instantiate service
  var uploadFile;
  beforeEach(inject(function(_uploadFile_) {
    uploadFile = _uploadFile_;
  }));

  it('should do something', function() {
    expect(!!uploadFile).to.be.true;
  });
});
