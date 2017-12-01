/**
 * Boilerplate for nodejs + express + mongoose
 * Created by : lahiru (@lahirudealwis) and manujith(@_manzzup_) 
 *              for http://zepto.io
 */
var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    databaseConfig = require('./config/mongo');

//createt the express app
var app = express();

//connect the database
mongoose.connect(databaseConfig.DB_CONNECTION_URL);
//attach the model
require('./models/post');

var routes = require('./routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'public')));

//BONUS: if you are making a API that require CORS
app.all('/api/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
});
  

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        return res;
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res;
});


module.exports = app;
