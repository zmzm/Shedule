
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app./*createServer(function (res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    
    res.end('Hello from Shedule.\n');
    
}).*/listen(3000, function(){
  console.log("Express server listening on port");
});



module.exports = app;
