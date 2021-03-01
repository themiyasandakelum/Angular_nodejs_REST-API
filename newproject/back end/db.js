const mongoose =require ('mongoose');
mongoose.connect('mongodb://localhost:27017/employeesdb',(err)=>{
    if (!err)
    console.log('mongoDB connection succeeded');
    else 
    console.log('error in db connection',+(err))
});
module.exports = mongoose;