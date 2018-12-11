const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
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
    },
    TeacherId:{
        type:Schema.Types.ObjectId
    }
});

const Teacher = mongoose.model('teacher', TeacherSchema);
module.exports = Teacher;