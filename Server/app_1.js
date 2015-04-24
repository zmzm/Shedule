var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var Shedule = require('./shedule/Shedule');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next){
    res.status(404);
    console.log('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    console.log('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.get('/api/schedule', function(req, res) {
    
    Shedule.getShedule(function(response) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.status(200);
        res.send(response);
    });   
});

app.listen(3000, function(){
  console.log("Express server listening on port");
});

