'use strict';
const angular = require('angular');

/*@ngInject*/
// export function randomNameService() {
// 	// AngularJS will instantiate a singleton by calling "new" on this function
//   let names = ['John', 'Elisa', 'Mark', 'Annie'];
//   const totalNames = names.length;
//   const rand = Math.floor(Math.random() * totalNames);
//   return names[rand];
//
// }

class RandomNames {
  constructor() {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}


export default angular.module('services.randomName', [])
  .service('randomNames', RandomNames)
  .name;
