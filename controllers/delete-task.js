// DELETE TASK CONTROLLER

const Tasks= require("../models/tasks")
const completedTask =require('../models/completed_task');
module.exports.deleteTask= async function(req, res)
{   
    let a=Object.keys(req.body);
    for(let i of a)
    {
    const task=await Tasks.findByIdAndDelete(i).populate();
    // before deleting the task adding to the completed task schema
    completedTask.create(
        {
            description:task.description,
            category:task.category,
            duedate:task.duedate, 
        },function(error, added)
        {
            if(error){ console.log("Error in adding complete tAsk"); return}
        } )
    Tasks.findByIdAndDelete(i, function(err)
    { if(err){ console.log("error in Deleting task");}
    });
}
return res.redirect('/');

     
}
 