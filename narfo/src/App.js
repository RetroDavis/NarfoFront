import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Switch, Redirect} from "react-router-dom";
import Home from './components/main/Home';
import Login from './components/main/Login';
import Register from './components/main/Register';
import MemberDetails from './components/memberapplication/MemberDetails';
import NavBar from './components/navBar/NavBar';
import Declaration from './components/memberapplication/Declaration';
import MemberAddress from './components/memberapplication/MemberAddress';
import LoginDetails from './components/memberapplication/LoginDetails';
import SalesDetails from './components/memberapplication/SalesDetails';
import MemberDone from './components/memberapplication/MemberDone';

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
              <Route path="/MemberDetails" component={MemberDetails} exact />
              <Route path="/MemberAddress" component= {MemberAddress} exact />
              <Route path="/LoginDetails" component={LoginDetails} exact/>
              <Route path="/Declaration" component={Declaration} exact />
              <Route path="/SalesDetails" component={SalesDetails} exact/> 
              <Route path="/MemberDone" component={MemberDone} exact />
              <Redirect from='*' to='/'/>>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
