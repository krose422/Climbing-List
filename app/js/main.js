;(function (){

  'use strict';

  angular.module('ClimbingRoutes', ['ngRoute'])

    .constant('PARSE', {
      URL: 'https://api.parse.com/1/',
      CONFIGHEADERS: {
        headers: {
          'X-Parse-Application-Id' : 'AYVDhAm5HFHnHt4TpMK8hNCyBXl9nRH3KpI6DOQa',
          'X-Parse-REST-API-Key' : 'BXO2pBlMeuh45Tnr9Gy4U88DmDUot8f3iDpUWZiK',
          'X-Parse-Session-Token' : Cookies.get('sessionToken')
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
        })

        .when('/route/:id', {
          controller: 'SingleRoute',
          templateUrl: 'js/climbingroutes/singleroute.tpl.html'
        })

        .when('/ticklist', {
          controller: 'TickList',
          templateUrl: 'js/climbingroutes/ticklist.tpl.html'
        });

      }
    ])

    .run(['$rootScope', '$location',
      function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function() {

          var LoggedIn = Cookies.get('sessionToken') !== undefined;
            if (LoggedIn) {
              $location.path('/');
            } else {
              $location.path('/login');
            }
        });

      }
    ]);


}());
