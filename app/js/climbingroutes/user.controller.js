;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('User', ['$scope', '$location', 'RouteService', 'PARSE',

      function ($scope, $location, RouteService, PARSE) {

        $scope.addUser = function (user) {
          RouteService.addUser(user).success (function (user) {
            Cookies.set('sessionToken', user.sessionToken);
            PARSE.CONFIGHEADERS.headers['X-Parse-Session-Token'] = user.sessionToken;
            $location.path('/');
            $scope.car = {};
          })
        }

        $scope.loginUser = function (user) {
          RouteService.loginUser(user).success (function (user) {
            Cookies.set('sessionToken', user.sessionToken);
            PARSE.CONFIGHEADERS.headers['X-Parse-Session-Token'] = user.sessionToken;
            $location.path('/');
            $scope.car = {};
          })
        }

      }

    ])


}());
