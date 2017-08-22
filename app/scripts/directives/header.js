'use strict';

/**
 * @ngdoc directive
 * @name pokabungaApp.directive:header
 * @description
 * # header
 */
angular.module('pokabungaApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the header directive');
      // }
    };
  });
