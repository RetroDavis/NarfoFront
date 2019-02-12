import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Switch, Redirect} from "react-router-dom";
import Home from './components/main/Home';
import Login from './components/main/Login';
import Register from './components/main/Register';
import NavBar from './components/navBar/NavBar';
import LicenseReminder from './components/LicenseReminder/LicenseReminder';

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
              <Route path="/LicenseReminder" component={LicenseReminder} exact />
              <Redirect from='*' to='/'/>>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
