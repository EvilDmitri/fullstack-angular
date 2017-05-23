'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('message', {
      url: '/message/:id',
      template: '<message></message>'
    });
}
