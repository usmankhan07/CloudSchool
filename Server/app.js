// Importing files
const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
// const routes = require("./routes/api.js");
const RegisterController = require("./controllers/RegisterController");
const LoginController = require("./controllers/LoginController")
const config = require("./config/db");

// Connect to the Data-base
mongoose.connect('mongodb://localhost/db');
mongoose.Promise = global.Promise;

// Express Object containing all the functions like get, post etc.
const app = express();
app.use(cors());
app.options('*', cors());
// Use body-parser for the routes objects
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
// app.use('/studentapi', routes);
app
  .route("/studentapi", )
  .post(RegisterController.handleRegister);

app
  .route("/student", )
  .get(LoginController.getAllAccounts);
// Listening to the port

app.listen(process.env.port || 3001, function() {
  console.log("now listening request");
});