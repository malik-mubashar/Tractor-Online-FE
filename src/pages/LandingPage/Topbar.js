/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../components/Navigation/Navigation.css";
import {
  Navbar,
  Nav,
} from "react-bootstrap";


const  Topbar = () => {

    return (
        <Navbar fixed="top" className="top-menu landingTopbar">

          <Navbar.Collapse id="basic-navbar-nav">
            

            <Nav className="ml-auto right-nav">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link text-primary" href="/login">Login <span className="sr-only">(current)</span></a>
            </li> 
            <li className="nav-item">
              <a className="nav-link text-primary" href="/signup/">SignUp</a>
            </li>
            </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
    );
  
}

export default Topbar;