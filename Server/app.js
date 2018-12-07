const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const InstitutionRegisterController = require("./controllers/InstitutionRegisterController");
const AdminLoginController = require("./controllers/AdminLoginController");
const StudentRegisterController = require("./controllers/StudentRegisterController");
const StudentLoginController = require("./controllers/StudentLoginController");
const TeacherRegisterController = require("./controllers/TeacherRegisterController");
const TeacherLoginController = require("./controllers/TeacherLoginController");
const config = require("./config/db");

// Connect to the Data-base
mongoose.connect('mongodb://localhost/db');
mongoose.Promise = global.Promise;

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/****************************************Institution**************************************************/

app
   .route("/api/account/InstitutionRegistration", )
   .post(InstitutionRegisterController.handleRegister);

app
   .route("/api/account/AdminSigIn", )
   .post(AdminLoginController.handleSignInAttempt);
  
app 
  .route("/api/GetAllInstitution", )
  .get(AdminLoginController.getAllAccounts);

app 
  .route("/api/specificInstitutionapi/:AdminId")
  .get(AdminLoginController.GetSpecificUser);

app 
  .route("/api/DeleteInstitution/:AdminId", )
  .delete(AdminLoginController.deleteOnly);

app 
  .route("/api/UpdateSpecificUser/:AdminId")
  .put(AdminLoginController.Update);

/****************************************Student**************************************************/

app
   .route("/api/account/StudentRegistration", )
   .post(StudentRegisterController.handleRegister);

app
   .route("/api/account/StudentSigIn", )
   .post(StudentLoginController.handleSignInAttempt);
  
app 
  .route("/api/GetAllStudent", )
  .get(StudentLoginController.getAllAccounts);

app 
  .route("/api/specificStudent/:StudentId")
  .get(StudentLoginController.GetSpecificUser);

app 
  .route("/api/DeleteStudent/:StudentId", )
  .delete(StudentLoginController.deleteOnly);

app 
  .route("/api/UpdateSpecificStudent/:StudentId")
  .put(StudentLoginController.Update);

/****************************************Teacher**************************************************/
app
   .route("/api/account/TacherRegistration", )
   .post(TeacherRegisterController.handleRegister);

app
   .route("/api/account/TeacherSigIn", )
   .post(TeacherLoginController.handleSignInAttempt);
  
app 
  .route("/api/GetAllTeacher", )
  .get(TeacherLoginController.getAllAccounts);

app 
  .route("/api/specificTeacher/:TeacherId")
  .get(TeacherLoginController.GetSpecificUser);

app 
  .route("/api/DeleteTeacher/:TeacherId", )
  .delete(TeacherLoginController.deleteOnly);

app 
  .route("/api/UpdateSpecificTeacher/:TeacherId")
  .put(TeacherLoginController.Update);



  // Listening to the port
app.listen(process.env.port || 3001, function() {
  console.log("now listening request");
});