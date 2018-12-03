// Imports
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Student = require('../models/student.js');

// get the list of students from the db

router.get('/studentregistration', function(req, res){
    res.send({type: 'Get'});
});

// Post students to the db
router.post('/studentregistration', function(req, res){
    Student.create(req.body).then(function(student) {
               res.send(student);
        });
    });

// Put the students to db
router.put('/studentregistration/:id', function(req, res){
    res.send({type: 'Put'});
});

// delete the students from the db

router.delete('/studentregistration/:id', function(req, res) {
    res.send({type: 'delete'});
});


module.exports = router;
