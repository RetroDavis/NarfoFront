import React, { Component } from 'react';
import './Login.scss';
import axios from 'axios'


class Login extends Component {
  state = {
    members: []
  }
  constructor () {

    var d = 5;
   super()

  }

  handleClick () {
    axios.get('https://api.github.com/users/MasulukeI')
      .then(response => this.setState({username: response.data.name}))
  }
  componentDidMount () {
  
  }
  render () {
    return (
        <div>
        <header class="masthead masthead5" >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="page-heading text-success">
                  <h1 >Member Login</h1>
                  <span class="subheading">Security is very important </span>
                </div>
              </div>
            </div>
          </div>
        </header>
    
       
        <div class="container">
          <div class="row">

          <div class="wrapper">
          <form class="form-signin">       
            <h2 class="form-signin-heading text-success">Register Member</h2>
            <input type="text" class="form-control text-center" name="firstName" placeholder="Enter FirstName" required="" autofocus="" />
            <input type="text" class="form-control text-center" name="lastName" placeholder="Enter LastName" required="" autofocus="" />
             <input type="text" class="form-control text-center" name="userName" placeholder="Enter Username" required="" autofocus="" />
            <input type="password" class="form-control text-center" name="password" placeholder="Enter Password" required=""/> 

            <button class="btn btn-lg btn-success btn-block" type="submit">Register</button>   
          </form>
        </div>

          </div>
        </div>
    
        <hr></hr>
    
     
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
               
                <p class="copyright text-muted">Copyright &copy; NARFO 2018</p>
              </div>
            </div>
          </div>
        </footer></div> )
}
}

export default Login;