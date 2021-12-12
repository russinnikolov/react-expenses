import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';

export default class App extends Component{
  render() {
   return(
       <div>
           <Header>
               <div>
                   <nav className="navbar navbar-dark navbar-expand bg-primary justify-content-between">
                       <div className="container-fluid">
                           <ul className="navbar-nav">
                               <li className="nav-item text-center">
                                   <Link to="/" className="nav-link">
                                       <span className="d-none d-sm-inline d-xl-block px-1 header-links">Home</span>
                                   </Link>
                               </li>
                               <li className="nav-item text-center">
                                   <Link to="/about" className="nav-link">
                                       <span className="d-none d-sm-inline d-xl-block px-1 header-links">About Us</span>
                                   </Link>
                               </li>
                               <li className="nav-item text-center">
                                   <Link to="/expenses" className="nav-link">
                                       <span className="d-none d-sm-inline d-xl-block px-1 header-links">Expenses</span>
                                   </Link>
                               </li>
                           </ul>
                           <ul className="nav navbar-nav">
                               <li className="nav-item text-center" id="signup-btn">
                                   <Link to="./register" className="nav-link">
                                       <FontAwesomeIcon icon={faUser}/>
                                       <span className="d-none d-sm-inline d-xl-block px-1 header-links">Sign Up</span>
                                   </Link>
                               </li>
                               <li className="nav-item text-center" id="login-btn">
                                   <Link to="./login" className="nav-link">
                                       <FontAwesomeIcon icon={faSignInAlt}/>
                                       <span className="d-none d-sm-inline d-xl-block px-1 header-links">Log In</span>
                                   </Link>
                               </li>
                           </ul>
                       </div>
                   </nav>
               </div>
           </Header>
      </div>
   );
  }
}