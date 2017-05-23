'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './message.routes';

export class Message {
  /*@ngInject*/
  constructor($http, $stateParams) {
    this.$http = $http;
    this.id = $stateParams.id
  }

  $onInit() {
    this.$http.get('/api/messages')
      .then(response => {
        this.messages = response.data;
        console.log(this.messages);
      });
  }
  // $onInit() {
  //   this.$http.get('/api/messages/')
  //     .then(response => {
  //       this.awesomeThings = response.data;
  //       this.socket.syncUpdates('thing', this.awesomeThings);
  //     });
  // }

}

export default angular.module('fullstackAngularApp.message', [uiRouter])
  .config(routes)
  .component('message', {
    template: require('./message.html'),
    controller: Message,
    controllerAs: 'messageCtrl'
  })
  .name;
