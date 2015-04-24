var request = require('request');

var url = "http://raspisanie.grsu.by/TimeTable/PrintPage.aspx?arg0=960&arg1=3&arg2=2&arg3=4%20&arg4=1&date=20.04.2015%200:00:00";


module.exports.ScheduleRequest = function(callback) {
    console.log(url);
    request({
        uri: url,
        method: "GET",
        timeout: 10000,
        headers: {
            'Referer': 'http://raspisanie.grsu.by/TimeTable/UMU.aspx?Id=3'
        }
    }, function(error, response, body) {
        callback(error,body);
    });
};
