;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('SingleRoute', ['$scope', 'RouteService',
      function ($scope, RouteService) {

        RouteService.getSingleRoute().success(function (data) {
          $scope.route = data;
          console.log(data);

          $scope.editRoute = function (route) {
            RouteService.editRoute(route)
          };

        });

        $scope.editRoute = function (r) {
          RouteService.editRoute(r);
          console.log(r);
        };


      }
    ])

}());
