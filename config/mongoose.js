<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/socialmediaapp_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function() {
    console.log('Connected to database :: MongoDB');
});

module.exports = db;
=======
//require the mongoose library
const mongoose = require('mongoose');    

//connect to database using mongoose
mongoose.connect('mongodb://127.0.0.1/social_media_application');

//acquire the connection with db  
const db = mongoose.connection;

//check if connection is successfull or raising an error
db.on('error', console.error.bind(console, 'error connecting to db'));

//print msg on console if running
db.once('open', function() {
    console.log("Successfully connected to the database :: MongoDB");
});

module.exports = db;

>>>>>>> manual-local-auth
