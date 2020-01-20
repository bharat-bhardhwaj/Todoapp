// In "home " variable we require the models  home  which is our "Schema of database"
const home=require('../models/_home');

// In this we create a module home in which we render the data from our home file
module.exports.home=function(req,res){

    // "home.find" with the help of this function we can find our file
    home.find({},function(err,data){
        if(err){
            // controlling the error
            console.log('error in fetching data from db');
            return;
        }
        // render the home file
        return res.render('home',{
            // in create data we have all the data of form is present
            createdata:data
        });
        
    });
   
}


// creating a create module
module.exports.create=function(req,res){
    //"home.create" with help of this we can add or create the data in database using our schema file home
    home.create({
        DESCRIPTION:req.body.DESCRIPTION,
        category: req.body.category,
        DUEDATE: req.body.DUEDATE
    },function(err,home){

        //controlling error
        if(err){console.log("error in creating a form"); return;}
        // redirect the page
        return res.redirect('/');
    })
};


// in this we create a destroy function 
module.exports.destroy=function(req,res){
    //"home.findbyidanddelte"  with help of this we can create find the data and delete
    home.findByIdAndDelete(req.params.id,function(err,data){
        if(err){
            //controlling error
            console.log("error in deleting object");
            return;
        }else{
            //redirecting page
            return res.redirect('/');
        }

    });
};


  