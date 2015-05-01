var app = angular.module('ScheduleApp', [
  	'ngRoute',
    'blockUI',
  	'ui.bootstrap',
    'app.services',
  	'app.controllers',
  	'app.main',
    'LocalStorageModule'
]);

app.config(['$routeProvider', '$provide', function ($routeProvider, $provide) {
    $routeProvider
		.when('/', {
		    redirectTo: '/Home'
		})
        .when('/Home', {
            controller: 'HomeController',
            templateUrl: 'public/views/home.html'
        })
        .when('/Schedule', {
            controller: 'ScheduleController',
            templateUrl: 'public/views/schedule.html'
        });
}]);