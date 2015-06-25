;(function (){

  'use strict';

  angular.module('ClimbingRoutes')

    .service('RouteService', ['$http', 'PARSE', '$routeParams',
      function ($http, PARSE, $routeParams) {

        var endpoint = PARSE.URL + 'classes/Routes/';

        var mplinkChange = function (routename) {
          return routename.split(' ').join('+');
        };

        // User constructor
        var User = function (options) {
          this.username = options.username;
          this.password = options.password;
        };

        // Route constructor
        var Route = function (options) {
          this.routename = options.routename;
          this.grade = options.grade;
          this.routetype = options.routetype;
          this.state = options.state;
          this.area = options.area;
          this.image = options.image;
          this.pitches = options.pitches;
          this.completed = false;
          this.tripnotes = '';
          this.mplink = mplinkChange(options.routename);
        };

        // Get all routes
        this.getRoutes = function () {
          return $http.get(endpoint, PARSE.CONFIGHEADERS);
        };

        // Delete single route
        this.deleteRoute = function (routeToDelete) {
          var deleteURL = endpoint + routeToDelete.objectId;
          return $http.delete(deleteURL, PARSE.CONFIGHEADERS);
        };

        // Add a new route
        this.addRoute = function (newRoute) {
          var route = new Route(newRoute);
          return $http.post(endpoint, route, PARSE.CONFIGHEADERS);
        };

        // Get a single route
        this.getSingleRoute = function () {
          var id = $routeParams.id;
          return $http.get(endpoint + id, PARSE.CONFIGHEADERS);
        };

        // Add a user
        this.addUser = function (newUser) {
          var user = new User(newUser);
          return $http.post(PARSE.URL + 'users/', user, PARSE.CONFIGHEADERS);
        };

        // Log in user
        this.loginUser = function (user) {
          return $http.get(PARSE.URL + 'login/?username=' + encodeURIComponent(user.username) + '&password=' + encodeURIComponent(user.password), PARSE.CONFIGHEADERS);
        };

        // Log out user
        this.logoutUser = function () {
          return $http.post(PARSE.URL + 'logout', PARSE.CONFIGHEADERS)
        };


      }
    ])

}());
