;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('RouteList', ['$scope', 'RouteService', '$filter', '$location', 'PARSE',
      function ($scope, RouteService, $filter, $location, PARSE) {

        var orderBy = $filter('orderBy');

        RouteService.getRoutes().success(function (data) {
          $scope.routeList = data.results;
        });

        $scope.editRoute = function (route) {
          RouteService.editRoute(route).success( function () {
            $('.update-submitted').html('<p>Update submitted.</p>')
          })
        };

        $scope.sort = function(routeList, predicate) {
          $(event.target).addClass('active');
          $(event.target).siblings().removeClass('active');
          $scope.routeList = _.sortBy(routeList, predicate)
        };

        $scope.deleteRoute = function (postToDelete) {
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
