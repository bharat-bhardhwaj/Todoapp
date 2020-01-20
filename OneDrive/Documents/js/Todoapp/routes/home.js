//require our main express server
const express =require('express');
// now install our express router
const router=express.Router();

//create a home controller and give it to the path
const homeController=require('../controllers/home_controller');

//get our first request for our homecontroller
router.get('/',homeController.home);

//post request for add our form data to database
router.post('/create',homeController.create);

//get request for destroy the data from our database
router.get('/destroy/:id',homeController.destroy);
module.exports=router;