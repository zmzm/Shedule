'use strict';

services.factory('scheduleService', [ function () {
        return ('http://localhost:3000/api/shedule', {}, {
        });
    }
]);

var services = angular.module('scheduleClientApp.services', []);