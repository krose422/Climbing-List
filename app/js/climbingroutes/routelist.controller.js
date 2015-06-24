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

        // deletePost = function () {

        //   $http.delete(PARSE.URL + 'classes/Routes' + objectId)
        // }

      }
    ]);


}());
