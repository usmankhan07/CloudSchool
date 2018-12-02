const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const LoginAccount = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }

});
// LoginAccount.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash){
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });
module.exports = mongoose.model("LoginAccount", LoginAccount);
