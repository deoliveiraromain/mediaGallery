/**
 * Created by Romain on 15/11/2015.
 */
// set up ========================
var express  = require('express');                           // create our app w/ express
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


var app = express();


// configuration =================

//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

mongoose.connect('mongodb://localhost/mediaGallery')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
