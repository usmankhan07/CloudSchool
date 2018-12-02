const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const LoginStudent = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    registrationnumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

    
});

const LoginStudent = mongoose.model('LoginStudent', LoginStudent);
module.exports = LoginStudent;
