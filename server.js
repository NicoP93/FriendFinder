const express = require("express");
const path = require("path");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// var bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Tells node that we are creating an "express" server

// Sets an initial port. We"ll use this later in our listener


// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require('./app/routing/apiroutes.js')(app);
//require('./app/routing/htmlRoutes.js')(app);
//Switched from ^ to these below because it wouldn't deploy to heroku
var apiRoutes = require('./app/routing/apiRoutes')
app.use(apiRoutes)

var htmlRoutes = require('./app/routing/htmlRoutes')
app.use(htmlRoutes)

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});