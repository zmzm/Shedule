var Request = require('./SheduleRequest');
var Parse = require('./SheduleParse');
var DB = require('./SheduleStorage');


module.exports.run = function() {
        Request.ScheduleRequest(function(err, data) {
            if(!err){
                Parse.SheduleParse(data);
                //DB.addShedule(SheduleParse.SheduleParse(data));
            }
            else
                throw new Exception(err);
        });
};