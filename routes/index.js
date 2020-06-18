//ROUTING FILE HANDLES ALL ROUTES MAIN ROUTER
const express= require('express');
const router=express.Router();
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
 