var express = require('express');
var app = express();
var mongoose = require('mongoose');
var request = require('request');
var http = require('http');
var async = require('async');
var database = require('./database');
var port = process.env.PORT || 3000;
require('./routes.js')(app);
mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log("App listening on port " + port);
