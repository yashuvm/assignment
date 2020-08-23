const express =require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');

require('dotenv').config();
const db=require('./db');
const port=process.env.PORT;
const bodyParser = require('body-parser')
const Joi = require('joi'); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors());


const peopleControllers=require('./Controllers/peopleControllers');
app.use(peopleControllers)







app.listen(port,(err,result)=>{
    if(err)console.log(err)
    else console.log('App is running at port:'+port)
})
