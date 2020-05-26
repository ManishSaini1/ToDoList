const express=require('express');
const app=express();
const port=8000;
app.listen(port, function(error)
{
    if(error)
    {
        return    console.log("error in running server");
    }
        console.log(`Server is running on port: ${port} `);

})