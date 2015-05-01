services.factory('ScheduleStorageService', [
    'localStorageService', function (localStorageService) {
        var ScheduleStorageService = {};

        var _saveData = function (ScheduleData) {
            localStorageService.set('ScheduleData', ScheduleData);
        };

        var _getData = function () {
            return localStorageService.get('ScheduleData');
        };

        var _clearStorage = function () {
            localStorageService.remove('ScheduleData');
        };

        ScheduleStorageService.saveData = _saveData;
        ScheduleStorageService.getata = _getData;
        ScheduleStorageService.clearStorage = _clearStorage;
        return ScheduleStorageService;
    }]);