const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const LoginTeacher = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

    
});

const LoginTeacher = mongoose.model('LoginTeacher', LoginTeacher);
module.exports = LoginTeacher;
