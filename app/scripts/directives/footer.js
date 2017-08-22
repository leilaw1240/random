'use strict';

/**
 * @ngdoc directive
 * @name pokabungaApp.directive:footer
 * @description
 * # footer
 */
angular.module('pokabungaApp')
  .directive('footer', function () {
    return {
      // template: '<div></div>',
      templateUrl: 'views/footer.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the footer directive');
      // }
    };
  });
