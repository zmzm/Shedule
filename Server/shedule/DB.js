var Request = require('request');
var MongoClient = require('mongodb').MongoClient;

module.exports.save = function(schedule) {
    MongoClient.connect("mongodb://localhost:27017/Schedule", function(err, db) {
        if(!err) {
            var collection = db.collection('schedules');
                    insert(collection,schedule, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    });
        } else {
            console.log(err);
        }
    });
};

var insert = function(collection,schedule,  callback) {
    collection.insert({schedule: schedule},function(err, result) {
        callback(err);
    });
};
