var Request = require('../request/SheduleRequest');
var Parse = require('../parse/SheduleParse');
var DB = require('../shedule/DB');


var getShedule = function(param,callback) {
        Request.ScheduleRequest(param,function(err, data) {
            if(err){
                throw new Exception(console.log(err));    
            }
            else
                Parse.SheduleParse(data, function(err, parsedata) {
                    if(err)
                        throw new Exception(console.log(err));
                    callback(parsedata);
                    //DB.save(parsedata);    
                });
                               
        });
};

module.exports.getShedule = getShedule;