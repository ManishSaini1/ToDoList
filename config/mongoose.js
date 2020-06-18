const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/To_DO_LIST');
const db=mongoose.connection;
db.on('error',console.error.bind(console, "Error on connnecting db"));
db.once('open', function()
{
    console.log("Succesfully Connected to mongo DB");
});
module.exports=db;
// see i called db from the main function and ideally it should print  right? did u get my point???im getting ur point give me utr number i am calling i have
//ur everything is fine but where is your form ?