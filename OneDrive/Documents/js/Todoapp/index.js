//require or install our express server
const express=require('express');

//add a server to a variable app
const app=  express();

//give our localhost port no 9000 
const port=9000;



//add our database to our code
const db=require('./config/mongoose');


//add our the body parser to conver our form data to readable form
app.use(express.urlencoded());

//require our main route file when first our localhost call
app.use('/',require('./routes/home'));

//set our view engine to ejs
app.set('view engine','ejs');

//set our views folder
app.set('views','./views');

//and make a folder static our assets folder in which css,js, img file present
app.use(express.static('assets'));

//first listen the port that we connect the server or not
app.listen(port,function(err){
    if(err){
        //error handling
        console.log(`error in running in the server: ${err}`);
    }
    //printing when our server is connecting
    console.log(`server is running on the : ${port}`);
});
