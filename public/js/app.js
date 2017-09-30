// Initialize Firebase
      var config = {
        apiKey: "AIzaSyALD9B5BG_ErNw8EgckSaBVxFuzKHxImbA",
        authDomain: "dugout-db978.firebaseapp.com",
        databaseURL: "https://dugout-db978.firebaseio.com",
        projectId: "dugout-db978",
        storageBucket: "dugout-db978.appspot.com",
        messagingSenderId: "631699743409"
      };
      firebase.initializeApp(config); 

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
