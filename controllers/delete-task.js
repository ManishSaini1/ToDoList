const Tasks= require("../models/tasks")
const incompleteTask =require('../models/completed_task');
module.exports.deleteTask= async function(req, res)
{
 
    console.log(req.body);
    console.log(req.params);
    let a=Object.keys(req.body);
    for(let i of a)
    {
        console.log();
    }
    
    console.log("here  i mamaamammamamam");

    for(let i of a)
    {

    const task=await Tasks.findByIdAndDelete(i).populate();
    //here adding task to Complete task
    incompleteTask.create(
        {
            description:task.description,
            category:task.category,
            duedate:task.duedate, 
        },function(error, added)
        {
            if(error){ console.log("Error in adding complete tAsk"); return}
        }
        
    )

    console.log(" I am here and Task is " , task);
    Tasks.findByIdAndDelete(i, function(err)
    {
        
        if(err)
        {
            console.log("error in Deleting task");
        }
       
    });
}
return res.redirect('/');

    // return res.redirect('/');
    //get hi use karna pdega but we are posting,we are deleting and we are only getting on on and not values ok
    //ek bar get use karna give me 2 minkh hii
}
//see nodemon is not workin every time i need to restart