'use strict';

angular.module('scheduleClientApp.date', []).run(function ($rootScope, $interval) {
    $rootScope.AssignedDate = Date;
    $interval(function () {
    }, 1000);
});