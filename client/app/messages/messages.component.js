'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './messages.routes';

export class MessagesComponent {
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
  }

  $onInit() {
    this.$http.get('/api/messages')
      .then(response => {
        this.messages = response.data;
        console.log(this.messages);
      });
  }

}

export default angular.module('fullstackAngularApp.messages', [uiRouter])
  .config(routes)
  .component('messages', {
    template: require('./messages.html'),
    controller: MessagesComponent,
    controllerAs: 'messagesCtrl'
  })
  .name;
