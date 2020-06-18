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
//i think u should ask on slack .because sir will see may be he will find the error..because im unable to Arpan sir
//?yesss okay on more thing// see

app.listen(port, function(error)
{
    if(error)
    {
        return    console.log("error in running server");
    }
        console.log(`Server is running on port: ${port} `); //try to run one sec

}); 