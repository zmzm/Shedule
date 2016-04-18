var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var log = require('./log')(module);
var fs = require('fs');
var app = express();
var Shedule = require('./shedule/Shedule');

app.use(express.static(path.join(__dirname, '../Client/app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../Client/app', 'index.html'));
});

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.get('/api/schedule', function (req, res) {
    Shedule.getShedule(req.query.date, function (response) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.status(200);
        res.send(response);
    });
});

app.use(function (req, res, next) {
    res.status(404);
    var file = 'public/images/404.jpg';
    var img = fs.readFileSync(file);
    log.error('Not found URL: %s', req.url);
    res.contentType = 'image/jpg';
    res.end(img, 'binary');
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    log.error('Internal error(%d): %s', res.statusCode, err.message);
    res.send({error: err.message});
});


app.listen(3000, function () {
    log.info('Express server listening on port 3000');
});