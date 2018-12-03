const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import teacher from './teacher.js';

const Courses = new Schema({
    name: {
        type: String,
        required: true,
    },
    teachername: {
        teachername:[teacher]
    },
    Date: {
        default: Date.now(),
        required: false
    }
});

const Courses = mongoose.model('Courses', Courses);
module.exports = Courses;