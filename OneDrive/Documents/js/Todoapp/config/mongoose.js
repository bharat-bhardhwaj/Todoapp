
// reuire mongoose to file
const mongoose=require('mongoose');

//connect the mongoose to the data base name that to be todo_devlopment
mongoose.connect('mongodb://localhost/todo_devlopment');

//starting connection
const db=mongoose.connection;

//check if db is on or if there is an error it print on console :: error conneting to db
db.on('error',console.error.bind(console,"error connecting to mongodb"));


// if there is no error is present then we have to open it and it print on the console that:: Datatbase is connected
db.once('open',function(){
    console.log("connected to Database :: MongoDb");
});
 
//export the module which name is db
module.exports=db;
