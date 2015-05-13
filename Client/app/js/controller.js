function AsdSchedule() {

    function getRow(data) {
        return {
            time: data.time,
            subgroup: data.subgroup,
            discipline: data.discipline,
            staff: data.staff,
            auditory: data.auditory
        };
    }

    function getRows(data) {
        var result = [];
        data.forEach(function (element) {
            result.push(getRow(element));
        });
        return result;
    }

    this.getRow = getRow;
    this.getRows = getRows;
};

function ScheduleAdapter() {

    var schedule = new AsdSchedule();

    return {
        request: function (dataRequest) {
            return {
                day: dataRequest.data.current_condition[0].day,
                date: dataRequest.data.weather[0].date,
                getRows: schedule.getRows(dataRequest.data.schedule),
                
            };
        }
    };
}

var controller = angular.module('scheduleClientApp.controller', []);