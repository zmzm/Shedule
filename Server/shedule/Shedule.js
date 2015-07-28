var Request = require('../request/SheduleRequest');
var Parse = require('../parse/SheduleParse');
var DB = require('../shedule/DB');


var getShedule = function(callback) {
        Request.ScheduleRequest(function(err, data) {
            if(err){
                throw new Exception(console.log(err));    
            }
            else
                Parse.SheduleParse(data, function(err, parsedata) {
                    if(err)
                        throw new Exception(console.log(err));
                    callback(parsedata);
                    //console.log(parsedata[0].day);
                    //console.log(parsedata[0].classes[0].discipline);
                    //DB.save(parsedata);    
                });
                               
        });
};

module.exports.getShedule = getShedule;