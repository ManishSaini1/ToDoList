// SCHEMA FOR INCOMPLETE TASK
const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema(
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
        timestamps: true
    }
    
);
const tasks= mongoose.model('tasks', taskSchema);
module.exports=tasks;