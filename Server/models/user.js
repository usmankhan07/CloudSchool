const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:false
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
    country:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:true
    },

    fatherName: {
		type: String,
		required: true,
    },
    IdCardNumber:{
        type: String,
        required:true
    },
});

const User = mongoose.model('user', User);
module.exports = User;