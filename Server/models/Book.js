const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var textSearch = require('mongoose-text-search');


// Book Schema
const bookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	authorName: {
		type: String,
		required: true
	},
	edition: {
		type: String,
		required: true
	},
	publicationYear: {
		type: Number,
	},
	publication: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});


//bookSchema.plugin(textSearch);
bookSchema.index({ name: 'text' });

// Module Export
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;