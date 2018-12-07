const Teacher = require("../models/teacher.js");

// Post or Just Registration Function.
exports.handleRegister = (req,res) =>{
  
  Teacher.findOne({name: req.body.name}, (err, account) => {
    if (err)
    {
       console.log("Error in Server " +account)

      res.status(500).send({'registerStatus':'failure','err':err});
    }
    if(account != null || account != undefined )
    {
      console.log("Account found")

        res.status(200).send({'registerStatus':'existing'});
    }
    else{
        console.log("Account not found, create account")
        let newAccount = new Teacher(req.body)
        newAccount.save((err, account) => {
          if (err) {
            console.log("failure in creating account",err);
            res.status(500).json({'registerStatus':'failure','err':err});
          }    
          else{
            console.log("account created");
            console.log(account);
            res.status(200).json({'registerStatus':'created',TeacherId:account._id});
          }
      });

  }
});
}