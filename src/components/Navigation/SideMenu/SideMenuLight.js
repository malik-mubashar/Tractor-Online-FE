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
          this.props.sideMenu ? "sidemenu-expande-width" : "sidemenu-toggle"
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
                  
                >
                  <Icon.UserPlus className="icon" />
                  Sign Up
                </NavLink>
                <NavLink to="/login/" className="dropdown-item" >
                  <Icon.UserCheck className="icon" />
                  Login
                </NavLink>
                <NavLink
                  to="/forgot-password/"
                  className="dropdown-item"
                  
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
                  to="/dashboard/products/"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  Products
                </NavLink>
                <NavLink
                  to="/dashboard/productCategories/"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  Product Categories
                </NavLink>
                {/* <NavLink
                  to="/dashboard/categoryBrands/"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  category Brands
                </NavLink> */}
                <NavLink
                  to= "/dashboard/productSubCategories"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  Product Sub Categories
                </NavLink>

                <NavLink
                  to="/dashboard/productCategoryHeads/"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  Categories Head
                </NavLink>

                <NavLink to= "/dashboard/brands" className="dropdown-item" >
                  <Icon.Plus className="icon" />
                  Brands
								</NavLink>
                <NavLink to= "/dashboard/product-mappings" className="dropdown-item" >
                  <Icon.Plus className="icon" />
                  Product Mappings
								</NavLink>
								<NavLink to= "/dashboard/models" className="dropdown-item" >
                  <Icon.Plus className="icon" />
                  Models
								</NavLink>
								<NavLink to= "/dashboard/city" className="dropdown-item" >
                  <Icon.Plus className="icon" />
                  City
								</NavLink>
								<NavLink to= "/dashboard/budgets" className="dropdown-item" >
                  <Icon.Plus className="icon" />
                  Budgets
                </NavLink>

								<NavLink to= "/dashboard/roles" className="dropdown-item" >
                  <Icon.Plus className="icon" />
                  Roles
                </NavLink>

                <NavLink
                  to= "/dashboard/country"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  Country
                </NavLink>

                <NavLink
                  to="/dashboard/languages/"
                  className="dropdown-item"
                  
                >
                  <Icon.Plus className="icon" />
                  Languages
								</NavLink>
								
								<NavLink
                  to="/dashboard/userRoles/"
                  className="dropdown-item"
                  
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
