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
    AdminName: {
            type:String
    },
    Adminpassword:{
            type:String
    },
    Adminemail:{
            type:String
    },
    AdminId: {
        type:Schema.Types.ObjectId
    }
});

const Institution = mongoose.model("institution", institutionSchema);
module.exports = Institution;