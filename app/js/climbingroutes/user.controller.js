;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('User', ['$scope', '$http', 'PARSE', '$location',

      function ($scope, $http, PARSE, $location) {

        // Route constructor
        var User = function (options) {
          this.username = options.username;
          this.password = options.password;
        };

        // Add route method
        $scope.addUser = function (u) {

          var user = new User(u);

          $http.post(PARSE.URL + 'users/', user, PARSE.CONFIGHEADERS)

          .success (function () {
            console.log('registered');

          })

        };


      }
    ])


}());
