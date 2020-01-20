//require mongoose in this file our database
const mongoose=require('mongoose');

// creating schema for our database file
const homeSchema=new mongoose.Schema({
    DESCRIPTION:{
        type:String,
        required: true,

    },

    category:{
        type:String,
        required:true
    },

    DUEDATE:{
        type:Date,
        required:true

    }
},{
    timestamps:true
});

//name that schema model is home
const home=mongoose.model('home',homeSchema);
// export the file
module.exports=home;