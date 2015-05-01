services.factory('ScheduleService', [
    '$resource', function ($resource) {
        return $resource('http://localhost:3000/api/shedule', {}, {
        });
    }
]);