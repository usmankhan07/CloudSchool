import React, { Component } from 'react';
import ButtonAppBar from './components/commons/Navbar.js';
import Profile from './components/AdminDashboard/Profile.js';
import SignIn from './components/commons/SignIn.js';
import Registration from './components/commons/Registration.js';
import SingleLineGridList from './components/Extra/GridList.js';
import {BrowserRouter as Router,  Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Album from './components/Extra/mainview.js';
import Course from './components/Extra/Course.js';
import CourseList from './components/Extra/CourseList.js';
import FooterPage from './components/commons/Footer.js';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';
import InstitutionsTable from './components/AdminDashboard/Institutions.js';
import CustomizedTable from './/components/AdminDashboard/Table.js';
import StudentDashboard from './components/StudentDashboard/StudentDashboard.js';
import TeacherDashboard from './components/Teacher/TeacherDashboard.js';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path= '/' render={(props) => <div>
          <ButtonAppBar/>
          <Album/>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Who We Are</b>
              <hr></hr>
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CS, is a premier solution provider for Educational Instistutions.Backed by a highly qualified and experienced professional team,we offer result oriented,ready to deploy software products &nbsp;&nbsp;&nbsp;&nbsp;with provision for customization.

              Our professional services specialized on implementation and training ensures that your returns on investments are achieved at the earliest.

              Edsys focuses on client delight &nbsp;&nbsp;&nbsp;&nbsp;and we are proud of that.Our products,services  and solutions ensure that our clients achieve better revenues,strengthen their customer base and lead the competition.
              The highly motivated team at Edsys &nbsp;&nbsp;&nbsp;&nbsp;works towards achieving wholesome customer satisfaction with a partnership approach.At Edsys, we forge a perfect partner relationship with client that vouchsafes long-term relations.

Most of our business<br></br> &nbsp;&nbsp;&nbsp;&nbsp;are achieved through satisfied clients and our commitment to deliver the best is what keeps us going.
            </p>
          <FooterPage/>
          </div>} />
          
          <Route path = '/Registration' render={(props)=> <div>
            <ButtonAppBar/>
            <Registration/>
            </div>}/>
          
            <Route path = '/Button' render={(props)=> <div>
              <InstitutionsTable/>
            </div>}/>
            
          <Route path = '/AdminDashboard' component= {AdminDashboard}/>
          <Route path = '/StudentDashboard' component= {StudentDashboard}/>
          <Route path = '/TeacherDashboard' component= {TeacherDashboard}/>
          <Route path = '/SignIn' render={(props) => <div>
          <SignIn/>
          </div>} />
          <Route path = '/Profile' render={(props)=> <div>
            <Profile/>
          </div>}/>


          </div>
      </Router>
      
      

    );
  }
}

export default App;
