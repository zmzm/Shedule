'use strict';

// Declare app level module which depends on views, and components
angular.module('scheduleClientApp', [
    'ngRoute',
    'scheduleClientApp.schedule',
    'scheduleClientApp.settings',
    'scheduleClientApp.date'
])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/schedule'});
            }]);
