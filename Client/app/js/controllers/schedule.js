'use strict';

angular.module('scheduleClientApp.schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'views/schedule.html',
    controller: 'scheduleCtrl'
  });
}])

.controller('scheduleCtrl', ['$scope', 'scheduleService',
    function($scope, scheduleService) {
        $scope.getSchedule = function () {            
            var scheduleAdapter = new ScheduleAdapter();            
            scheduleService.get(function (response) {
                        $scope.scheduleData = scheduleAdapter.request(response);
                    }, function () {
                    });
            
        }

}]);