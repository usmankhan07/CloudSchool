const todoController = require("../models/todoList.js");
const Login = require("../models/Login");


exports.handleAttemptCreatTodo = (req, res) => {
    console.log(req.body.userId);
    console.log(req.body.items);
Login.findOne({id:req.body.userId}).exec(function(err,users){
	if(err) {
		console.log("error in server"+err)
		res.status(500).json({'todo_status':'Failure','err':err});
	}
	else {
        
		let todo = new todoController(req.body);
		console.log("adding .....");
		todo.save((err,data)=>{
			if(err) {
				console.log("here",err);
				res.status(500).json({'todo_status':'Failure','err':err});
			}
			else {
				console.log("***",data);
				res.status(200).json({'todo_status':'created','data':data});
			}
		})
	}
})
};

exports.handleAttempFindTodo = (req, res) => {
    console.log("get all todos")
    todoController.find()
    .then(todos => {
        res.send(todos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving todos."
        });
    });
};

exports.handleAttempFindOneTodo = (req, res) => {
    query = {userId : req.params.userId}
    todoController.find(query)
    .then(todos => {
        res.status(200).json({'todo_status':'found','todos':todos});
    }).catch(err => {
    	if(err){
    		res.status(500).json({'todo_status':'not_found','err':err});
    	}

        
        });
};