const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const RegisterAccount  = new Schema({
    username: {
        type: String
    },
    
});
