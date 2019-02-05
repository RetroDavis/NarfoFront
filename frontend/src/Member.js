import React, { Component } from 'react';
import './Member.scss';
import axios from 'axios'


class Member extends Component {
  state = {
    members: [],
    welcome: "Members"
  }
  constructor (props) {
    super(props);
 
  }

  handleClick () {
    axios.get('https://api.github.com/users/MasulukeI')
      .then(response => this.setState({username: response.data.name}))
  }
  componentDidMount () {
    axios.get('https://localhost:44341/Member/get/all')
    .then(response =>
      {
        const members =response.data;
        this.setState({ members });
        console.log(this.state.members);
      })
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
                  <h1 >{this.state.welcome}</h1>
                  <span class="subheading">at NARFO we care about all our members </span>
                </div>
              </div>
            </div>
          </div>
        </header>
    
       
        <div class="container">
          <div class="row">
          <table class="table  table-borderless table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          { this.state.members.map(person => <tr><td>{person.firstName}</td><td>{person.lastName}</td><td>{person.username}</td></tr>)}
          </tbody>
        </table>
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