'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('messages', {
      url: '/messages',
      template: '<messages></messages>'
    });
}
