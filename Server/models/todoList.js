const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoList = new Schema({
  userId: {type: Schema.Types.ObjectId, ref:'LoginAccount'},
  items : {type:String},

});
module.exports = mongoose.model("TodoList", TodoList);
