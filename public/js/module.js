/* App Module */
var meanApp = angular.module('meanApp', ['ngRoute', 'meanControllers']);

meanApp.config(function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
});


/* Routes */
meanApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});


/* Controllers */
var meanControllers = angular.module('meanControllers', []);

// Main Controller
meanControllers.controller("mainCtrl", function($scope, $http) {
  $scope.appTitle = "Mean App";
});

// Home Controller
meanControllers.controller("homeCtrl", function($scope, $http) {
});

// Dashboard Controller
meanControllers.controller("dashboardCtrl", function($scope, $http) {
});