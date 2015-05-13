'use strict';

// Declare app level module which depends on views, and components
angular.module('scheduleClientApp', [
  'ngRoute',
  'scheduleClientApp.schedule',
  'scheduleClientApp.settings',
  'scheduleClientApp.controller',
  'scheduleClientApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/schedule'});
}]);
