const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    fathername: {
		type: String,
		required: true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    InstitutionName:{
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
    }
});

const StudentModel = mongoose.model('studentModel', studentSchema);
module.exports = StudentModel;