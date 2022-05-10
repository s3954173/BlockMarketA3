import React from 'react'
import './navbar.css';
import {RiMenu3Linem, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#teamprofiles">Team Profiles</a></p>
          <p><a href="#tools">Tools</a></p>
          <p><a href="#skills">Skills</a></p>
          <p><a href="#projectdescription">Project Description</a></p>
          
          <p><a href="#feedback">Feedback</a></p>
        </div>
       </div>
       
    </div>
  )
}

export default Navbar