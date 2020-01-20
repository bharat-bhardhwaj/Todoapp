const home=require('../models/_home');

module.exports.home=function(req,res){
    home.find({},function(err,data){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('home',{
            createdata:data
        });
        
    });
   
}

module.exports.create=function(req,res){
    home.create({
        DESCRIPTION:req.body.DESCRIPTION,
        category: req.body.category,
        DUEDATE: req.body.DUEDATE
    },function(err,home){
        if(err){console.log("error in creating a form"); return;}

        return res.redirect('/');
    })
};

module.exports.destroy=function(req,res){
    home.findByIdAndDelete(req.params.id,function(err,data){
        if(err){
            console.log("error in deleting object");
            return;
        }else{
            return res.redirect('/');
        }

    });
};


  