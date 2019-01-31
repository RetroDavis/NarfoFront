
import React, { Component } from 'react';

import './App.scss';
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
  
  render () {
    return (
     <div>
     <header class="masthead3  masthead ">
     <div class="overlay"></div>
     <div class="container">
       <div class="row">
         <div class="col-lg-8 col-md-10 mx-auto">
           <div class="site-heading text-success">
             <h1>NARF</h1>
             <span class="subheading">National Association of Responsible Firearm Owners</span>
           </div>
         </div>
       </div>
     </div>
   </header>


   <div class="container">
     <div class="row">
       <div class="col-lg-8 col-md-10 mx-auto">
         <div class="post-preview">
           <a href="post.html">
             <h2 class="post-title">
               Man must explore, and this is exploration at its greatest
             </h2>
             <h3 class="post-subtitle">
               Problems look mighty small from 150 miles up
             </h3>
           </a>
           <p class="post-meta">Posted by
             <a href="#">Start Bootstrap</a>
             on September 24, 2018</p>
         </div>
      
         <div class="clearfix">
           <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
         </div>
       </div>
     </div>
   </div>

   <footer>
     <div class="container">
       <div class="row">
         <div class="col-lg-8 col-md-10 mx-auto">
           <ul class="list-inline text-center">
             <li class="list-inline-item">
               <a href="#">
                 <span class="fa-stack fa-lg">
                   <i class="fas fa-circle fa-stack-2x"></i>
                   <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                 </span>
               </a>
             </li>
             <li class="list-inline-item">
               <a href="#">
                 <span class="fa-stack fa-lg">
                   <i class="fas fa-circle fa-stack-2x"></i>
                   <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                 </span>
               </a>
             </li>
             <li class="list-inline-item">
               <a href="#">
                 <span class="fa-stack fa-lg">
                   <i class="fas fa-circle fa-stack-2x"></i>
                   <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                 </span>
               </a>
             </li>
           </ul>
           <p class="copyright text-muted">Copyright &copy; Your Website 2018</p>
         </div>
       </div>
     </div>
   </footer>

   
 
 </div>
    )
}
}

export default App;