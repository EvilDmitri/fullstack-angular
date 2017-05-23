'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './myroute.routes';

export class MyrouteComponent {
  /*@ngInject*/
  constructor(randomNames, uploadFile) {
    this.upload = uploadFile.upload;
    this.random = randomNames;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    console.log('random');
    this.name = this.random.getName();
  }


  uploadPic(file, username) {
    this.upload.upload({
      url: '/api/messages',
      data: {
        file,
        username: username
      }
    }).then(function(resp) {
      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    }, function(resp) {
      console.log('Error status: ' + resp.status);
    }, function(evt) {
      let progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });

    // this.f = file;
    //
    // file.upload = Upload.upload({
    //   url: '/api/messages',
    //   name: username,
    //   data: {file}
    // });
    //
    // // file.upload.then(function(response) {
    //   // $timeout(function() {
    //   //   file.result = response.data;
    //   // });
    // file.upload.then( function(response) {
    //   if(response.status > 0) {
    //     this.errorMsg = response.status + ': ' + response.data;
    //   }
    // }, function(evt) {
    //   file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    // });
  }

}

export default angular.module('fullstackAngularApp.myroute', [uiRouter, 'ngFileUpload'])
  .config(routes)
  .component('myroute', {
    template: require('./myroute.html'),
    controller: MyrouteComponent,
    controllerAs: 'home'
  })
  .name;
