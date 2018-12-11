const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const institutionSchema = new Schema({
    Institutionname: {
        type: String,
        
    },
    country: {
        type: String,
        
    },
    city: {
        type: String,
        
    },
    ownership: {
        type: String,
    },
    AdminName: {
            type:String,
            required: true
    },
    Adminpassword:{
            type:String,
            required: true
    },
    Adminemail:{
            type:String,
            required:true
    },
    AdminId: {
        type:Schema.Types.ObjectId
    }
});

const Institution = mongoose.model("institution", institutionSchema);
module.exports = Institution;