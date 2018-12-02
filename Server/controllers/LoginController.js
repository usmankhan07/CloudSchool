const Login = require("../models/Login");

exports.handleSignInAttempt = (req,res) =>{
  console.log("SIGN IN ATTEMPT FROM :" , req.body.username)
  Login.findOne({username: req.body.username,password:req.body.password}, (err, account) => {
    if (err) {
       console.log("Error in Server " +account)
      res.status(500).send({'signInStatus':'failure','err':err});
    }
    if(account != null || account != undefined ){
      console.log("Account found")
        res.status(200).send({'signInStatus':'authorized','userId':account._id,'err':err});
      }
      else{
        console.log("Account not found")
          res.status(200).send({'signInStatus':'not_authorized','err':err});
  }
});


}

exports.getAllAccounts = (req,res) =>{

  console.log("Get all accounts ")
  Login.find({_id:req.body.username}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    res.status(200).json(accounts);
  });


}
exports.deleteOnly = (req,res) =>{

  console.log("Get all accounts ")
  Login.deleteOne({username:req.body.username}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    res.status(200).json(accounts);
  });
/*exports.handleAttempFindOneTodo = (req, res) => {
    query = {userId : req.params.userId}
    todoController.find(query)
    .then(todos => {
        res.status(200).json({'todo_status':'found','todos':todos});
    }).catch(err => {
    	if(err){
    		res.status(500).json({'todo_status':'not_found','err':err});
    	}

        
        });
};*/

}
