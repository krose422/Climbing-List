;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('TickList', ['$scope', 'RouteService',
      function ($scope, RouteService) {

        // Get all completed routes
        RouteService.getRoutes().success(function (data) {
          $scope.routeList = data.results;
          $scope.routeList = _.filter($scope.routeList, function (route) {
            return route.completed === true;
          })
        });

      }
    ]);

}());
