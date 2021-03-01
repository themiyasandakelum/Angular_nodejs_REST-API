const express =require('express');
const bodyParser =require('body-parser');
const cors = require("cors");

const{mongoose}=require('./db.js');
var employeeController=require('./controller/employeeController.js');
var app =express();
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:4200"
  };
 
app.listen(3000, () => console.log('Server started at port :3000'));
app.use(cors(corsOptions));

app.use('/employee',employeeController);