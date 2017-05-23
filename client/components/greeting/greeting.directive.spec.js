'use strict';

describe('Directive: greeting', function() {
  // load the directive's module and view
  beforeEach(module('directives.greeting'));
  beforeEach(module('components/greeting/greeting.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<greeting></greeting>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the greeting directive');
  }));
});
