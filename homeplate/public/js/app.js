app.config(function($routeProvider, $locationProvider) {
  $routeProvider
// Home
// Pages
  .when("/user", {templateUrl: "partials/user-template", controller: "AppCtrl"})
  .when("/", {templateUrl: "partials/home", controller: "AppCtrl"})
  
/* etc… routes to other pages… */
.otherwise( {templateUrl: "partials/home", controller: "AppCtrl"});

// else 404
 $locationProvider.html5Mode(true);

});