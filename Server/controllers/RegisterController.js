const Student = require('../models/student');

exports.handleRegister = (req, res) => {
	console.log(req);
	console.log(req.body);
	let newAccount = new Student(req.body);
	newAccount.save((err, account) => {
		if (err) {
			console.log('failure in creating account', err);
			res.status(500).json({'registerStatus': 'failure', 'err': err });
		} else {
			console.log('account created', err);
			res.status(200).json({ 'registerStatus': 'created', 'userid': account._id });
		}
	});
};
