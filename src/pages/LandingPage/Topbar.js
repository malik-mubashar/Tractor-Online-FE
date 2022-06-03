/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../components/Navigation/Navigation.css";
import {
  Navbar,
  Nav,
  NavLink
} from "react-bootstrap";
import { useHistory } from "react-router-dom";


const  Topbar = () => {
const history = useHistory();

    return (
        <Navbar fixed="top" className="top-menu landingTopbar">

          <Navbar.Collapse id="basic-navbar-nav">
            

            <Nav className="ml-auto right-nav">
            <ul className="navbar-nav mr-auto">
            <NavLink onClick={()=> history.push('/login/')} > Login </NavLink>
            <NavLink onClick={()=> history.push('/signup/')}> Sign Up </NavLink>
            </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
    );
  
}

export default Topbar;