var request = require('request');


module.exports.ScheduleRequest = function (param, callback) {
    //arg0 - ����� ������, arg1 - ����� ����������, arg2 - ����� ��������, agr3 - ����, agr4 - �� ���, date - ����
    request({
        uri: "http://raspisanie.grsu.by/TimeTable/PrintPage.aspx?arg0=960&arg1=3&arg2=2&arg3=5%20&arg4=1&date=" + param + "%200:00:00",
        method: "GET",
        timeout: 10000,
        encoding: "utf-8",
        headers: {
            'Referer': 'http://raspisanie.grsu.by/TimeTable/UMU.aspx?Id=3'
        }
    }, function (error, response, body) {
        callback(error, body);
    });
};
