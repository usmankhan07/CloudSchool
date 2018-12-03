const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
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
    InstitutionName:{
        type:String,
        required:true
    },
    placeOfInstitution:{
        type:String,
        required:true
    },
    fatherName: {
		type: String,
		required: true,
    },
    date: {
		type: Date,
        default: Date.now(),
        required:true
        
    },
    IdCardNumber:{
        type: String,
        required:true
    },
});

const admin = mongoose.model('admin', admin);
module.exports = admin;