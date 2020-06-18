const express= require('express');
const router=express.Router();
const homeController= require('../controllers/home_controller');
const createTaskController= require('../controllers/create-task');
const deleteTaskController=require('../controllers/delete-task');
const taskTo=require('../models/tasks');
const completedTask= require('../models/completed_task');
router.get('/', async function(req,res)
{
    const completed_task=await completedTask.find({}).sort('-createdAt ');
    const taskList= await taskTo.find({}).sort('-createdAt');
    taskTo.find({}, function(error, t)
    {
    if(error){console.log("error  in finding task");  return res.redirect('/');}
            // taskList.sort('-createdAt');
        return res.render('home', 
        {
            tasks :taskList,
            accomplishedTask: completed_task
        });
    })
});
router.post('/create-task',createTaskController.createTask);
router.post('/delete/task', deleteTaskController.deleteTask);
module.exports=router;
//see ur data ia going but not getting posted lets check ejs
//see the work of form is to post data to server and this is prefect i am getting data
//ejs file is just posting ..and performing ur function..lets check ur function
//hey can u check the schema file..oky