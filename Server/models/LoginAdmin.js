const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const LoginAdmin = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const LoginAdmin = mongoose.model('LoginAdmin', LoginAdmin);
module.exports = LoginAdmin;
