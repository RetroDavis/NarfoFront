import React, { Component } from 'react';
import './About.scss';
import axios from 'axios'


class App extends Component {

  constructor () {
    super()
    this.state = {
      username: 'will be changed with name from Github API'
    }

    this.handleClick = this.handleClick.bind(this)
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
        <header class="masthead masthead2" >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="page-heading text-success">
                  <h1 >About us</h1>
                  <span class="subheading">About NARFO</span>
                </div>
              </div>
            </div>
          </div>
        </header>
    
       
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
            <h1>We are passionate about firearms, it is our business.</h1>
           <p class="text-success"> If you own a firearm, you are in the right place. We are a Firearm Owners Association looking after the interest of firearm owners.
             </p>
             <p class="text-success"> It is our goal to promote the safe, legal and responsible use of firearms.</p>
             <p class="text-success">
            NARFO offers members information on all aspects of safe and responsible use of firearms as well as current information on changes in the Firearms Control Act.
            
            To create a positive image of all legal firearm owners through education of our members, clients and the general non firearm owning public.</p>
            
            <p class="text-success"> We engage our clients and members from the start of the process to obtain and legally own a firearm.
            
            Visit any Wildman Store and speak to a consultant to assist you with all your needs.</p>
          
            </div>
          </div>
        </div>
    
        <hr></hr>
    
     
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
               
                <p class="copyright text-muted">Copyright &copy; Your Website 2018</p>
              </div>
            </div>
          </div>
        </footer></div> )
}
}

export default App;