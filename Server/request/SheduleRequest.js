var request = require('request');


module.exports.ScheduleRequest = function (param, callback) {
    //arg0 - номер группы, arg1 - номер факультета, arg2 - форма обучения, agr3 - курс, agr4 - хз что, date - дата
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
