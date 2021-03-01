const mongoose = require('mongoose');
//const cors = require("cors");

var Employee = mongoose.model('Employee',{
    name:{
        type :String
    },
    position:{
        type :String
    },
    office:{
        type :String
    },
    salary:{
        type :Number
    },
});
module.exports={Employee:Employee};
