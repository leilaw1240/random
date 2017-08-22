'use strict';

/**
 * @ngdoc function
 * @name pokabungaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokabungaApp
 */
angular.module('pokabungaApp')
  .controller('HomeCtrl', ['UserService', '$location', '$rootScope', function (UserService, $location, $rootScope) {

    var vm = this;

    vm.message = '';

    vm.login = function (request) {

      // console.log(vm);

      var formData = vm.login;

      console.log(formData.username);
      console.log(formData.password);

      formData.ip_address = '127.0.0.1';
      formData.browser_info = 'Chrome';
      formData.device_id = '951458422855';


      UserService.Login(formData, function (response) {
         console.log(response);
        // if (!response.error) {
        //   //Set Session and redirect user
        // } else {
        //   vm.message = response.message;
        // }
      });


    };

    vm.register = function (request) {

    };

    vm.forgot = function (request) {

    };

  }]);
