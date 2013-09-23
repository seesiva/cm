
/**
 * Module dependencies.
 */

var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    people = require('./routes/people');
    mongoose = require('mongoose');

var app = express();

// database
/*
mongoose.connect('mongodb://localhost/people_database', function(err) {
    if (err) 
    {console.log("Issue connecting to MongoDb - "+err);}
    else { console.log('Mongodb Connected successfully') };
});

*/
// Config

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
  res.send('Welcome to People finder. Please use the /API to acccess the API.');
});


app.get('/api', function (req, res) {
  res.send('People API is running');
});

app.get('/people', people.index);

//Mongodb related stuff

var Schema = mongoose.Schema; //Schema.ObjectId



app.listen(4242);

console.log('Express server listening on port 4242');




