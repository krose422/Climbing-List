;(function (){

  'use strict';

  angular.module('ClimbingRoutes', ['ngRoute'])

    .constant('PARSE', {
      URL: 'https://api.parse.com/1/',
      CONFIGHEADERS: {
        headers: {
          'X-Parse-Application-Id' : 'AYVDhAm5HFHnHt4TpMK8hNCyBXl9nRH3KpI6DOQa',
          'X-Parse-REST-API-Key' : 'BXO2pBlMeuh45Tnr9Gy4U88DmDUot8f3iDpUWZiK'
        }
      }
    })

    .config(['$routeProvider',
      function ($routeProvider) {

        $routeProvider.when('/', {
          controller: 'RouteList',
          templateUrl: 'js/climbingroutes/routelist.tpl.html'
        })

        .when('/addroute', {
          controller: 'Route',
          templateUrl: 'js/climbingroutes/addroute.tpl.html'
        })

        .when('/login', {
          controller: 'User',
          templateUrl: 'js/climbingroutes/login.tpl.html'
        });

      }
    ]);

}());
