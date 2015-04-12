var Request = require('../request/SheduleRequest');
var Parse = require('../parse/SheduleParse');
var DB = require('../shedule/DB');


var getShedule = function() {
        Request.ScheduleRequest(function(err, data) {
            if(err){
                throw new Exception(console.log(err));    
            }
            else
                Parse.SheduleParse(data, function(err, parsedata) {
                    if(err)
                        throw new Exception(console.log(err));
                    console.log(parsedata);
                    DB.save(parsedata);    
                });
                               
        });
};

module.exports.getShedule = getShedule;