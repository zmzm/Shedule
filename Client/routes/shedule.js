var mongo = require('mongodb');

var Server = mongo.Server,
        Db = mongo.Db,
        BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('Shedule1', server);

db.open(function (err, db) {
    if (!err) {
        console.log("Connected to 'Shedule1' database");
        db.collection('shedule', {strict: true}, function (err, collection) {
            if (err) {
                console.log("The 'Shedule' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

/*exports.addShedule = function (data) {
    //var data = req.body;
    console.log('Adding data: ' + JSON.stringify(data));
    db.collection('shedule', function (err, collection) {
        collection.insert(data, {safe: true}, function (err, result) {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};*/

exports.findAll = function(req, res) {
    db.collection('shedule', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

var populateDB = function () {

    var shedule = [
        {
            day: "Понедельник",
            date: "23.03.2015",
            time: "13:30-14:50",
            subgroup: "0",
            discipline: "лек. Технология разработки программн. обеспечения",
            staff: "ст. пр. Куц Александр Иванович",
            auditory: "ауд. 213, Ожешко, 22"
        }];

    db.collection('shedule', function (err, collection) {
        collection.insert(shedule, {safe: true}, function (err, result) {
        });
    });

};