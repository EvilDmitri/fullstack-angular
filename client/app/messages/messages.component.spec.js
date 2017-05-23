'use strict';

describe('Component: MessagesComponent', function() {
  // load the controller's module
  beforeEach(module('fullstackAngularApp.messages'));

  var MessagesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MessagesComponent = $componentController('messages', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
