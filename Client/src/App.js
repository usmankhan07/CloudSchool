import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ButtonAppBar from './components/commons/Navbar';
import Profile from './components/AdminDashboard/Profile';
import SignIn from './components/commons/SignIn';
import Registration from './components/commons/Registration';
// import SingleLineGridList from './components/Extra/GridList.js';
import Album from './components/Extra/mainview';
// import Course from './components/Extra/Course.js';
// import CourseList from './components/Extra/CourseList.js';
import FooterPage from './components/commons/Footer';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import InstitutionsTable from './components/AdminDashboard/Institutions';
// import CustomizedTable from "./components/AdminDashboard/Table.js";
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import Register from './components/commons/NewRegistration';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path= '/' render={(props) => <div>
          <ButtonAppBar/>
          <Album/>
            <p>
              <b>Who We Are</b>
              <hr />
            </p>
            <p>
            CS, is a premier solution provider for Educational Instistutions.Backed by a highly qualified and experienced professional team,we offer result oriented,ready to deploy software products &nbsp;&nbsp;&nbsp;&nbsp;with provision for customization.

              Our professional services specialized on implementation and training ensures that your returns on investments are achieved at the earliest.

              Edsys focuses on client delightand we are proud of that.Our products,services  and solutions ensure that our clients achieve better revenues,strengthen their customer base and lead the competition.
              The highly motivated team at Edsysworks towards achieving wholesome customer satisfaction with a partnership approach.At Edsys, we forge a perfect partner relationship with client that vouchsafes long-term relations.

Most of our business<br />are achieved through satisfied clients and our commitment to deliver the best is what keeps us going.
            </p>
          <FooterPage/>
          </div>} />

          <Route path = '/Registration' render={(props)=> <div>
            <ButtonAppBar/>
            <Register/>
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
