const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const StudentModel = require("./studentModel.js");

const LoginStudent = new Schema({
    registrationnumber: {
        type: String,
        required: true,
        ref:"StudentModel"
    }
    
});

const StudentLogin = mongoose.model('LoginStudent', LoginStudent);
module.exports = StudentLogin;
