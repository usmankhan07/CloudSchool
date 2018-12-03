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
    course_id: {
        type: Number,
        required:true,
        unique:true
    }
    
});

const Courses = mongoose.model('Courses', Courses);
module.exports = Courses;