import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Switch, Redirect} from "react-router-dom";
import Home from './components/main/Home';
import Login from './components/main/Login';
import Register from './components/main/Register';
import NavBar from './components/navBar/NavBar';
import AddLicense from './components/LicenseReminder/AddLicense';
import Reminder from './components/LicenseReminder/Reminder';
import EditLicense from './components/LicenseReminder/EditLicense';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar></NavBar>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Login" component={Login} exact />
              <Route path="/Register" component={Register} exact />           
              <Route path="/Reminder" component={Reminder} exact />
              <Route path="/AddLicense" component={AddLicense} exact/>
              <Route path="/EditLicense" component={EditLicense} exact/>
              <Redirect from='*' to='/'/>>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
