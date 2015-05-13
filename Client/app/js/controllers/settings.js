'use strict';

angular.module('scheduleClientApp.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'settingsCtrl'
  });
}])

.controller('settingsCtrl', [function() {

}]);