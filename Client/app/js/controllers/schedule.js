'use strict';

angular.module('scheduleClientApp.schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'views/schedule.html',
    controller: 'scheduleCtrl'
  });
}])
        .controller('scheduleCtrl', ['$scope','$http',
    function($scope, $http) {
        $scope.getDateTime = new Date();
        $http.get('http://localhost:3000/api/schedule').success(function(schData) {  
          $scope.schedules = schData;  
     });
}]);