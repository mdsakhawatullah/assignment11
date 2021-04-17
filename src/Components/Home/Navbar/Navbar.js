import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <img class="logo" src={logo} alt=""/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Software Solution Bd</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Meet Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
      <Link to="/dashboard">
      <button type="button" class="btn btn-dark mr-5">Sign In</button>
      </Link>

      </li>

     
    </ul>
    
  </div>
  <img src="" alt=""/>
</nav>
    );
};

export default Navbar;