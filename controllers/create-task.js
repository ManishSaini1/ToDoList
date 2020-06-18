const taskTo=require('../models/tasks');
module.exports.createTask= function(req, res)
{
    
    // console.log(req.body.description);
    console.log(req.body);
    // console.log(req.body.todo-category);
    // console.log(req.body.date);
   
 
    // taskTo.create(
    //     {
    //        description : request.body. module.exports.create = function(req,res){
    taskTo.create({
        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate,
        },function(err,todo){
            if(err){
                console.log("error ");
                return;
            }
            // console.log("Error in creating Task******************88",todo);
            // console.log('***************************',todo)
            return res.redirect('/'); 
        });
       // return res.redirect("back");
}


    //         category: request.body.category,
    //          duedate :request.body.duedate,
    //     },
    //     function(error, newTask)
    //     {
           
    //         if(error){
    //             console.log("Error in creating Task"); 
    //             return res.redirect('back');
    //         }
    //         console.log("task added successfully", newTask);
    //         return res.redirect('back');
    //     });
    //return res.render('home');
//what is it showing exactly when u r running?
// nothing but didn't submit the values in DB
