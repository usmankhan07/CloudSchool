const StudentLogin = require("../models/LoginStudent.js");
const studentModel = require("../models/studentModel.js");

exports.handleSignInAttempt = (req, res) => {

	console.log('SIGN IN ATTEMPT FROM :', req.body.name);
	studentModel.findOne({ name: req.body.name, fathername: req.body.fathername, password: req.body.password}, (err, account) => {
		if (err) {
			console.log('Error in Server ' + account);
			res.status(500).send({ signInStatus: 'failure', err: err });
		}
		if (account != null || account != undefined) {
			console.log('Account found');
			res.status(200).send({ signInStatus: 'authorized', AdminId: account._id, err: err });
		} else {
			console.log('Account not found');
			res.status(200).send({ signInStatus: 'not_authorized', err: err });
		}
	});
};

// Get All Accounts;
exports.getAllAccounts = (req, res) => {
	console.log('Get all accounts ');
	studentModel.find()
		.then(data => {
			res.status(200).json({ registerStatus: 'created','list':data });
		})
		.catch(err => {
			res.status(500).json({ registerStatus: 'failure', err: err });
		});
};

// Delete Specific user
exports.deleteOnly = (req, res) => {
	console.log('Get all accounts ');
	studentModel.deleteOne({ _id: req.body.StudentId}, (err, student) => {
		if (err) {
			console.log('ERROR in database............');
			res.status(500).send(err);
		}
		res.status(200).json(student);
	});
};

// Get Specific User based on id
exports.GetSpecificUser = (req, res) => {
	studentModel.findById({_id:req.params.StudentId})
	  .then(data => {
		console.log(data)
		res.status(200).json({ 'getStatus': 'success', 'user': data });
	  }).catch(err => {
		res.status(500).json({ 'getStatus': 'failed', 'err': err });
	  });
  };

// Update Data of the user:

exports.Update = function (req, res) {
	studentModel.findByIdAndUpdate(req.params.StudentId, {$set: req.body}, function (err, institution) {
		if (err) return next(err);
		res.status(200).json({ 'getStatus': 'success', 'user': institution });
	});
  };


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