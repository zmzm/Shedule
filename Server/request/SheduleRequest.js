var request = require('request');


module.exports.ScheduleRequest = function(param, callback) {
    //console.log(url);
    //param = "2015-05-18";
    //var date = param.replace(/(\d+)-(\d+)-(\d+)/, '$3.$2.$1');
    //console.log(param);

    request({
        uri: "http://raspisanie.grsu.by/TimeTable/PrintPage.aspx?arg0=960&arg1=3&arg2=2&arg3=4%20&arg4=1&date="+param+"%200:00:00",
        method: "GET",
        timeout: 10000,
        encoding: "utf-8",
        headers: {
            'Referer': 'http://raspisanie.grsu.by/TimeTable/UMU.aspx?Id=3'
        }
    }, function(error, response, body) {
        callback(error,body);
    });
};
