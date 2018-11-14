import React, { Component } from 'react';
import ButtonAppBar from './components/commons/Navbar.js';
import SignIn from './components/commons/SignIn.js';
import Registration from './components/commons/Registration.js';
import SingleLineGridList from './components/user/GridList.js';
import {BrowserRouter as Router,  Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Album from './components/user/mainview.js';
import Course from './components/user/Course.js';
import CourseList from './components/user/CourseList.js';
import Footer from './components/commons/Footer.js';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';


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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edsys, is a premier solution provider for Educational Instistutions.Backed by a highly qualified and experienced professional team,we offer result oriented,ready to deploy software products &nbsp;&nbsp;&nbsp;&nbsp;with provision for customization.

              Our professional services specialized on implementation and training ensures that your returns on investments are achieved at the earliest.

              Edsys focuses on client delight &nbsp;&nbsp;&nbsp;&nbsp;and we are proud of that.Our products,services  and solutions ensure that our clients achieve better revenues,strengthen their customer base and lead the competition.
              The highly motivated team at Edsys &nbsp;&nbsp;&nbsp;&nbsp;works towards achieving wholesome customer satisfaction with a partnership approach.At Edsys, we forge a perfect partner relationship with client that vouchsafes long-term relations.

Most of our business<br></br> &nbsp;&nbsp;&nbsp;&nbsp;are achieved through satisfied clients and our commitment to deliver the best is what keeps us going.
            </p>
          <Footer/>
          </div>} />
        
          <Route path = '/Registration' render={(props) => <div>
          <Registration/>
          </div>} />
          <Route path = '/AdminDashboard' render={(props) => <div>
          <AdminDashboard/>
          </div>} />
          <Route path = '/SignIn' render={(props) => <div>
          <SignIn/>
          </div>} />
          </div>
      </Router>
      
      

    );
  }
}

export default App;
