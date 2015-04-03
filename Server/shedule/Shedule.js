var Request = require('/home/vlad/NetBeansProjects/Shedule/Server/request/SheduleRequest');
var Parse = require('/home/vlad/NetBeansProjects/Shedule/Server/parse/SheduleParse');


var getShedule = function(callback) {
        Request.ScheduleRequest(function(err, data) {
            if(!err){
                callback(Parse.SheduleParse(data));
            }
            else
                throw new Exception(err);
        });
};

module.exports.getShedule = getShedule;