const express=require('express');
const app=  express();
const port=9000;
// const path=require('path')

const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use('/',require('./routes/home'));
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log(`error in running in the server: ${err}`);
    }
    console.log(`server is running on the : ${port}`);
});
