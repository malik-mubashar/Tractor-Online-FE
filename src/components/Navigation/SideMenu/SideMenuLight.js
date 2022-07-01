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

              <NavDropdown
                title={
                  <div className="dropdown-title">
                    <Icon.Settings className="icon" />
                    <span className="title">
                      Settings
                      <Icon.ChevronRight className="icon fr" />
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
							>
								<NavLink
                  to="/products/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  Products
                </NavLink>
                <NavLink
                  to="/productCategories/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  Product Categories
                </NavLink>
                <NavLink
                  to="/categoryBrands/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  category Brands
                </NavLink>
                <NavLink
                  to="/productSubCategories"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  Product Sub Categories
                </NavLink>

                <NavLink
                  to="/productCategoryHeads/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  Categories Head
                </NavLink>

                <NavLink to="/brands" className="dropdown-item" target="_blank">
                  <Icon.Plus className="icon" />
                  Brands
								</NavLink>
								
								<NavLink to="/models" className="dropdown-item" target="_blank">
                  <Icon.Plus className="icon" />
                  Models
								</NavLink>
								<NavLink to="/city" className="dropdown-item" target="_blank">
                  <Icon.Plus className="icon" />
                  City
								</NavLink>
								<NavLink to="/budgets" className="dropdown-item" target="_blank">
                  <Icon.Plus className="icon" />
                  Budgets
                </NavLink>

								<NavLink to="/roles" className="dropdown-item" target="_blank">
                  <Icon.Plus className="icon" />
                  Roles
                </NavLink>

                <NavLink
                  to="/country"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  Country
                </NavLink>

                <NavLink
                  to="/languages/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  Languages
								</NavLink>
								
								<NavLink
                  to="/userRoles/"
                  className="dropdown-item"
                  target="_blank"
                >
                  <Icon.Plus className="icon" />
                  User Roles
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
