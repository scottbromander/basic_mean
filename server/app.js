/**
 * Created by scottbromander on 4/1/15.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var index = require('./routes/index');


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app, listening at at http://%s:%s", host, port);
});

app.use(bodyParser.json());

app.use('/', index);

module.exports = app;