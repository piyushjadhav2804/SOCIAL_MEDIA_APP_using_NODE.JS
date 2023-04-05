const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const port = 8000;

const app = express();

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

app.listen(port, function(err){

    if(err) {
        console.log(`Error : ${err}`);
    }

    console.log(`Server is up and running on port: ${port}`); 
});