;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('RouteList', ['$scope', '$http', 'PARSE',
      function ($scope, $http, PARSE) {

        $scope.routeList = [];

        $http.get(PARSE.URL + 'classes/Routes', PARSE.CONFIGHEADERS)

          .success(function (data) {
            $scope.routeList = data.results;
            console.log($scope.routeList);
          })

        $scope.deleteRoute = function (postToDelete) {
          var idToDelete = postToDelete.objectId;

          $http.delete(PARSE.URL + 'classes/Routes/' + postToDelete.objectId, PARSE.CONFIGHEADERS)
            .success(function () {
              $('[data-id="' + postToDelete.objectId + '"]').fadeOut( function () {
                $scope.routeList = _.without($scope.routeList, postToDelete);
              });
            });
        };

      }
    ]);


}());
