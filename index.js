const express = require('express');
const port = 8000;

const app = express();

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//use express router
app.use('/', require('./routes'));

app.use(express.static('./assets'));

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//extract styles and scripts from sub-pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.listen(port, function(err){

    if(err) {
        console.log(`Error : ${err}`);
    }

    console.log(`Server is up and running on port: ${port}`); 
});