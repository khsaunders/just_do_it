console.log("JS connected");

//routing
var mainApp = angular.module("mainApp", ['ngRoute']);
  mainApp.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: 'list.html'
    })

    .otherwise({
    redirectTo: '/home'
    });
  }); //end of app routing
