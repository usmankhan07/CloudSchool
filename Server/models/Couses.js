const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import StudentModel from './studentModel';

const Courses = new Schema({
    name: {
        type: String,
        required: true,
    },
    Students: {
        Students:[StudentModel]
    },
    course_id: {
        type: Number,
        required:true,
        unique:true
    }

});

const Courses = mongoose.model('Courses', Courses);
module.exports = Courses;