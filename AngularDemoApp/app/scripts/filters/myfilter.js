'use strict';

/**
 * @ngdoc filter
 * @name testApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the testApp.
 */
angular.module('testApp')
  .filter('myFilter', function () {
    return function (input) {
      return input.split('').reverse().join('');
    };
  }); 
