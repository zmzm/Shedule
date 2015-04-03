var express = require('express'),
    path = require('path'),
    http = require('http'),
    shedule = require('./routes/shedule');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3001);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/shedule', shedule.findAll);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
