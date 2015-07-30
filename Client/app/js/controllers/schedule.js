'use strict';

angular.module('scheduleClientApp.schedule', ['ngRoute'])
        .controller('scheduleCtrl', ['$scope', '$http',
            function ($scope, $http) {
                $scope.getDateTime = new Date();
                $scope.getDate = function (d) {
                    if (d === undefined) {
                        alert("Input date");
                    }
                    else {
                        $scope.isClicked = true;
                        var date = $scope.scheduleDate;

                        var req = {
                            method: 'GET',
                            url: 'http://localhost:3000/api/schedule',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            params: {date: date}
                        };

                        $http(req).success(function (schData) {
                            $scope.schedules = schData;
                        });
                    }
                };
            }]);