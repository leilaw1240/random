'use strict';

/**
 * @ngdoc service
 * @name pokabungaApp.UserService
 * @description
 * # UserService
 * Factory in the pokabungaApp.
 */
angular.module('pokabungaApp')
  .factory('UserService', ['$http', '$httpParamSerializer', function ($http, $httpParamSerializer) {

    var service_url = 'http://192.168.2.179/pokabunga/';
    var token = 123456123456;
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // $http.defaults.headers.common['authorization'] = 'Key=123456123456';
    $http.defaults.headers.post['Authorization'] = 'Key=' + token;

    // Service logic
    function GetAll() {
      return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
    }

    function GetById(id) {
      return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function GetByUsername(username) {
      return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
    }

    function Create(user) {
      return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
    }

    function Update(user) {
      return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
    }

    function Delete(id) {
      return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
    }

    function Login(userdata) {

      // $http({
      //   url: service_url + 'User/Login',
      //   method: 'POST',
      //   data: $httpParamSerializer(userdata), // Make sure to inject the service you choose to the controller
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded', // Note the appropriate header
      //     'Authorization':'key='+token
      //   }
      // }).then(handleSuccess, handleError('Unable to get data fromt the service'));
      return $http.post(service_url + 'User/Login', $httpParamSerializer(userdata)).then(handleSuccess, handleError('Unable to get data fromt the service'));
    }

    // private functions

    function handleSuccess(res) {
      //console.log(res);
      return res.data;
    }

    function handleError(error) {
      return function () {
        return { error: true, message: error };
      };
    }

    // Public API here
    var service = {};

    service.GetAll = GetAll;
    service.GetById = GetById;
    service.GetByUsername = GetByUsername;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;
    service.Login = Login;
    
    return service;

  }]);
