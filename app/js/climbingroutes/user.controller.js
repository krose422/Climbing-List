;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('User', ['$scope', '$location', 'RouteService',

      function ($scope, $location, RouteService) {

        $scope.addUser = function (user) {
          RouteService.addUser(user).success (function () {
            Cookies.set('sessionToken', user.sessionToken);
            Cookies.set('username', user.username);
            console.log('registered');
            $location.path('/');
            $scope.car = {};
          })
        }

        $scope.loginUser = function (user) {
          RouteService.loginUser(user).success (function () {
            Cookies.set('sessionToken', user.sessionToken);
            Cookies.set('username', user.username);
            var cookies = Cookies.get('sessionToken', user.sessionToken);
            console.log(cookies);
            console.log('logged in');
            $location.path('/');
            $scope.car = {};
          })
        }

      }

    ])


}());
