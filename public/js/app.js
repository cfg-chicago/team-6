  var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'firebase', 'mp.colorPicker']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
// Home
// Pages
  .when("/user", {templateUrl: "partials/user-template.html", controller: "UserCtrl"})
  .when("/", {templateUrl: "partials/home.html", controller: "AppCtrl"})
  .when("/group", {templateUrl: "partials/group-template.html", controller: "AppCtrl"})

/* etc… routes to other pages… */
.otherwise( {templateUrl: "partials/home", controller: "AppCtrl"});

// else 404
 $locationProvider.html5Mode(true);
 
});
