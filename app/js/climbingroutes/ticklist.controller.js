;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('TickList', ['$scope', 'RouteService', 'PARSE', '$location',
      function ($scope, RouteService, PARSE, $location) {

        // Get all completed routes
        RouteService.getRoutes().success(function (data) {
          $scope.routeList = data.results;
          $scope.routeList = _.filter($scope.routeList, function (route) {
            return route.completed === true;
          })
        });

        $scope.sort = function(routeList, predicate) {
          $(event.target).addClass('active');
          $(event.target).siblings().removeClass('active');
          $scope.routeList = _.sortBy(routeList, predicate)
        };

        $scope.deleteRoute = function (postToDelete) {
          // var idToDelete = postToDelete.objectId;
          RouteService.deleteRoute(postToDelete).success(function () {
            $scope.routeList = _.without($scope.routeList, postToDelete);
          });
        };

        $scope.logoutUser = function () {
          RouteService.logoutUser().success( function (data) {
            Cookies.expire('sessionToken');
            PARSE.CONFIGHEADERS.headers['X-Parse-Session-Token'] = '';
            $location.path('/login');
          })
          .error (function (data) {
            console.log('error', data);
          })
        };

        $scope.expand = function () {
          $(event.target).siblings().not('.top').toggleClass('hide');
          $(event.target).toggleClass('hide');
        };

        $scope.completed = function (boolean) {
          if (boolean === false) {
            return 'Not completed';
          } else {
            return 'Completed, and added to ticklist'
          }
        };

      }
    ]);

}());
