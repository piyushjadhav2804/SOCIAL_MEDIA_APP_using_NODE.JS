const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const port = 8000;

const app = express();

<<<<<<< HEAD
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.urlencoded());

const db = require('./config/mongoose')

//use express router
app.use('/', require('./routes'));

app.use(express.static('./assets'));

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//extract styles and scripts from sub-pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

=======
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(expressLayouts);

//extract styles & scripts from sub-pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'))

app.set('view engine', 'ejs');
app.set('views', './views');

//use express router
app.use('/', require('./routes'));
>>>>>>> manual-local-auth

app.listen(port, function(err){

    if(err) {
        console.log(`Error : ${err}`);
    }

    console.log(`Server is up and running on port: ${port}`); 
});