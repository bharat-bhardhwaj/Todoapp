const mongoose=require('mongoose');

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

const home=mongoose.model('home',homeSchema);

module.exports=home;