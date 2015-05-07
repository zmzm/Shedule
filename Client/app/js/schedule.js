'use strict';

angular.module('myApp.schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'views/schedule.html',
    controller: 'scheduleCtrl'
  });
}])

.controller('scheduleCtrl', [function() {

}]);