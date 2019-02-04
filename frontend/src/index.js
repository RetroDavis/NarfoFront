import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import  App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link,Switch,Redirect } from "react-router-dom";
import './css/clean-blog.min.scss';
import About from './About';
import Members from './Member';
import Login from './Login';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import RootReducer from './reducers';

const initialState = {};

const loggerMiddleware = createLogger();
const store = createStore(RootReducer,initialState,compose(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <nav class="navbar navbar-expand-lg  fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index-2.html"> <img src="http://narfo.co.za/wp-content/uploads/2018/04/cropped-NarfoLogoPNG.png" width="120" height="60" alt=""/></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/Members">Members</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   <Switch>
   <Route  path='/About' component={About}/>
   <Route  path='/Members' component={Members}/>
   <Route  path='/Login' component={Login}/>
    <Route path="/" exact component={App}/>
    <Redirect from="/" to="/"></Redirect>
    </Switch>

    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="js/clean-blog.min.js"></script>
    </div>
</Router>
</Provider>
,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
