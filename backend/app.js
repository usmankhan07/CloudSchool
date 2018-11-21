// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config=require("./config/db");
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const todoListController = require("./controllers/TodoListController");

const app = express();
const port = process.env.PORT || 3301;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



  app
    .route("/api/Accounts/SignIn",)
    .post(loginController.handleSignInAttempt)

  app
    .route("/api/Accounts/Register",)
    .post(registerController.handleRegister)
    
  app
  .route("/api/Accounts/del",)
  .delete(loginController.deleteOnly)
    
  app
    .route("/api/Accounts/getAll",)
    .get(loginController.getAllAccounts)

  app
    .route("/api/Accounts/TodoList",)
    .post(todoListController.handleAttemptCreatTodo)

    app
    .route("/api/Accounts/getAllTodo",)
    .get(todoListController.handleAttempFindTodo)
    
    app
    .route("/api/Accounts/getOneTodo/:userId",)
    .get(todoListController.handleAttempFindOneTodo)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
