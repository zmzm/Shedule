'use strict';

angular.module('scheduleClientApp.schedule', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/schedule', {
                    templateUrl: 'views/schedule.html',
                    controller: 'scheduleCtrl'
                });
            }])
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
'use strict';

angular.module('scheduleClientApp.settings', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/settings', {
                    templateUrl: 'views/settings.html',
                    controller: 'settingsCtrl'
                });
            }])
        .controller('settingsCtrl', [function () {

            }]);
'use strict';

angular.module('scheduleClientApp.date', []).run(function ($rootScope, $interval) {
    $rootScope.AssignedDate = Date;
    $interval(function () {
    }, 1000);
});