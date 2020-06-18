const express=require('express');
const app=express();
const expressLayout= require('express-ejs-layouts');
const db= require('./config/mongoose');
const port=8000;
app.use(express.static('./assets'));
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', require('./routes'));
app.listen(port, function(error)
{
    if(error)
    {
        return    console.log("error in running server");
    }
        console.log(`Server is running on port: ${port} `);

}); 