import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import * as Icon from "react-feather";
import "./SideMenu.css";

class SideMenuLight extends React.Component {
  render() {
    return (
      <div
        className={`sidemenu-area sidemenu-light ${
          this.props.sideMenu ? "" : "sidemenu-toggle"
        }`}
      >
        <Navbar
          className={`sidemenu ${this.props.sideMenu ? "" : "hide-nav-title"}`}
        >
          <Navbar.Collapse>
            <Nav>
              <NavLink to="/dashboard/" className="nav-link">
                <Icon.Grid className="icon" />
                <span className="title">Dashboard</span>
              </NavLink>

              <NavDropdown
                title={
                  <div className="dropdown-title">
                    <Icon.User className="icon" />
                    <span className="title">
                      User
                      <Icon.ChevronRight className="icon fr" />
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavLink
                  to="/signup/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.UserPlus className="icon" />
                  Sign Up
                </NavLink>
                <NavLink to="/login/" className="dropdown-item" target="_blank">
                  <Icon.UserCheck className="icon" />
                  Login
                </NavLink>
                <NavLink
                  to="/forgot-password/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Unlock className="icon" />
                  Forgot Password
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SideMenuLight;
