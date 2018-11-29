const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fineSchema = mongoose.Schema({
	registrationnumber: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: 'pending',
		enum: ['pending','received'],
		lowercase: true
	},
	amount: {
		type: Number,
		required: true,
	},
	reason: {
		type: String,
		required: true,
	},
	fineDate: {
		type: Date,
		default: Date.now
	}
});


const Fine = mongoose.model('Fine', fineSchema);
module.exports = Fine;
