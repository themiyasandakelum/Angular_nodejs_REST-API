const express= require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;
//const cors = require("cors");

var{ Employee }= require('../models/employee');
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
    if (!err){res.send(docs);}
    else{console.log('error in retriving employee:'  ,+(err));}
    });
});
router.get('/:id',(req,res)=>{
    
    if (!ObjectId.isValid(req.param.id))
    return res.status(400).send('no record in given id:${req.param.id}');
    Employee.findById(req.params.id,(err,doc)=>{
        if (!err){res.send(docs);}
        else{console.log('error in retriving employee:'  ,+(err));}   
    });
});

router.post('/',(req,res)=>{
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err,doc)=>{
        if (!err){res.send(doc);}
        else{console.log ('Error in Employee Save : '+(err))}
    });
    router.delete('/:id',(req,res)=>{
    
        if (!ObjectId.isValid(req.param.id))
        return res.status(400).send('no record in given id:${req.param.id}');
        Employee.findByIdRemove(req.params.id,(err,doc)=>{
            if (!err){res.send(docs);}
            else{console.log('error in  employee deleted:'  ,+(err));}   
        });
    });
});
module.exports = router;