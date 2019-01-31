import React, { Component } from 'react';
import './Member.scss';
import axios from 'axios'


class Member extends Component {

  constructor () {
    super()
    axios.get('https://localhost:44341/Member/get/all')
    .then(response =>
      {
        console.log(response.data);
      }
      )
   // this.state = {
     // username: 'will be changed with name from Github API'
   // }
    //this.handleClick = this.handleClick.bind(this)
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
        <header class="masthead masthead4" >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="page-heading text-success">
                  <h1 >Members</h1>
                  <span class="subheading">at NARFO we care about all our members </span>
                </div>
              </div>
            </div>
          </div>
        </header>
    
       
        <div class="container">
          <div class="row">
            
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

export default Member;