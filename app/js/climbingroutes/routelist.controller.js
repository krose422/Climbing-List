;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('RouteList', ['$scope', 'RouteService', '$location',
      function ($scope, RouteService, $location) {

        RouteService.getRoutes().success(function (data) {
          console.log(data);
          $scope.routeList = data.results;
          console.log($scope.routeList);
        });

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
            return 'No';
          } else {
            return 'Yes'
          }
        };

      }
    ]);


}());
