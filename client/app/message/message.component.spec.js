'use strict';

describe('Component: MessageComponent', function() {
  // load the controller's module
  beforeEach(module('fullstackAngularApp.message'));

  var MessageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MessageComponent = $componentController('message', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
