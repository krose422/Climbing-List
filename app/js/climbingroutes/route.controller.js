;(function (){

  'use strict';

  angular.module('ClimbingRoutes')
    .controller('Route', ['$scope', '$http', 'PARSE', '$location',

      function ($scope, $http, PARSE, $location) {

        // Route constructor
        var Route = function (options) {
          this.routename = options.routename;
          this.grade = options.grade;
          this.routetype = options.routetype;
          // this.city = options.city;
          this.state = options.state;
          this.area = options.area;
          this.image = options.image;
          this.pitches = options.pitches;
        };

        // Add route method
        $scope.addRoute = function (r) {

          var route = new Route(r);

          $http.post(PARSE.URL + 'classes/Routes', route, PARSE.CONFIGHEADERS)

          .success (function () {
            console.log('added');

          })

        };


      }
    ])


}());
