'use strict';
const angular = require('angular');

/*@ngInject*/
// export function uploadFileService() {
// 	// AngularJS will instantiate a singleton by calling "new" on this function
// }

class UploadFile {
  constructor(Upload) {
    this.upload = Upload;
    // console.log(Upload)
  }



}


export default angular.module('services.uploadFile', ['ngFileUpload'])
  .service('uploadFile', UploadFile)
  .name;
