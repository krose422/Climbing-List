;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('RouteList', ['$scope', 'RouteService', '$filter', '$location',
      function ($scope, RouteService, $filter, $location) {

        var orderBy = $filter('orderBy');

        RouteService.getRoutes().success(function (data) {
          $scope.routeList = data.results;
        });

        $scope.stateSort = function (state) {
          $scope.routeList = orderBy($scope.routeList, state);
        };

        $scope.deleteRoute = function (postToDelete) {
          // var idToDelete = postToDelete.objectId;
          RouteService.deleteRoute(postToDelete).success(function () {
            $scope.routeList = _.without($scope.routeList, postToDelete);
          });
        };

        $scope.logoutUser = function () {
          RouteService.logoutUser().success( function (data) {
            Cookies.expire('sessionToken', data.sessionToken);
            Cookies.expire('sessionToken', data.username);
            console.log('clicking logout');

            $location.path('/login');
          })
          .error (function (user) {
            console.log('error', user);
          })
        }

        $scope.expand = function () {
          $(event.target).siblings().not('.top').toggleClass('hide');
          $(event.target).toggleClass('hide');
        };

        $scope.completed = function (boolean) {
          if (boolean === false) {
            return 'Not completed';
          } else {
            return '*Completed climb - added to ticklist'
          }
        };


      }
    ]);


}());
