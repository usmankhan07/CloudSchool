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
    },
    AdminId: {
        type:Schema.Types.ObjectId
    }
    
});

const AdminLogin = mongoose.model('LoginAdmin', LoginAdmin);
module.exports = AdminLogin;
