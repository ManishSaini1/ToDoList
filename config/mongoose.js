// FILE TO CONNECT TO MONGO DB
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/To_DO_LIST');
const db=mongoose.connection;
db.on('error',console.error.bind(console, "Error on connnecting db"));
db.once('open', function()
{
    console.log("Succesfully Connected to mongo DB");
});
module.exports=db;
 