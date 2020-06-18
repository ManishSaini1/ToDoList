// CREATE TASK CONTROLLER
const taskTo=require('../models/tasks');
module.exports.createTask= function(req, res)
{
     
    taskTo.create({
        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate,
        },function(err,todo){
            if(err){
                console.log("error ");
                return;
            }
           
            return res.redirect('/'); 
        });
       
}


     