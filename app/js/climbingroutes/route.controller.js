;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('Route', ['$scope', 'RouteService', '$location',

      function ($scope, RouteService, $location) {

        // Add route method
        $scope.addRoute = function (r) {
          RouteService.addRoute(r).success (function () {
              $location.path('/');
              $scope.car = {};
          });

        };


      }
    ])


}());
