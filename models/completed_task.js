// SCHEMA FOR COMPLETED TASKS
const mongoose=require('mongoose');
const incompleteTaskSchema=new mongoose.Schema(
    {
        description :
        {
            type: String,
             required: true
        },
        category:
        {
            type: String,
             required: true
        },
        duedate:
        {
            type : String,
             required:true
        }
    },
    {
        timestamps :true
    }
);
const incompleteTask= mongoose.model('incompleteTask', incompleteTaskSchema);
module.exports=incompleteTask;