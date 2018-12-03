const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    name:{
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    gender: {
        type:String,
        required:true
    },
    classname:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:true,
    },

    fathername: {
		type: String,
		required: true,
    },
    InstitutionName:{
        type:String,
        required:true
    },
    registrationnumber:{
        type: String,
        required:true,
        

    },
});

const Student = mongoose.model('student', student);
module.exports = Student;