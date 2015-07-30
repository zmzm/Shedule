'use strict';

angular.module('scheduleClientApp', [
    'ngRoute',
    'scheduleClientApp.schedule',
    'scheduleClientApp.settings',
    'scheduleClientApp.date'
])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: 'views/schedule.html',
                            controller: 'scheduleCtrl'
                        })
                        .when('/schedule', {
                            templateUrl: 'views/schedule.html',
                            controller: 'scheduleCtrl'
                        })
                        .when('/settings', {
                            templateUrl: 'views/settings.html',
                            controller: 'settingsCtrl'
                        })
                        .otherwise({
                            redirectTo: '/'
                        });
            }]);
