import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import * as Icon from "react-feather";
import "./SideMenu.css";
import Icofont from "react-icofont";

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

                <Icofont icon="ghost" className="icon" />
               
                <span className="title">Dashboard</span>
              </NavLink>

              <NavDropdown
                title={
                  <div className="dropdown-title">
                    <Icofont icon="user" className="icon" />
                    <span className="title">
                      User
                      
                      {/* <Icofont icon="rounded-right" className="icon fr" /> */}
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
              >
                {/* <NavLink to="/signup/" className="dropdown-item">
                  <Icon.UserPlus className="icon" />
                  Sign Up
                </NavLink>
                <NavLink to="/login/" className="dropdown-item">
                  <Icon.UserCheck className="icon" />
                  Login
                </NavLink>
                <NavLink to="/forgot-password/" className="dropdown-item">
                  <Icon.Unlock className="icon" />
                  Forgot Password
                </NavLink> */}
              </NavDropdown>

              {/* <NavDropdown
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
              </NavDropdown> */}

              <NavLink to="/dashboard/products/" className="nav-link">
                <Icofont icon="package" className="icon" />
                <span className="title">Products</span>
              </NavLink>
              <NavLink to="/dashboard/productCategories/" className="nav-link">
                <Icofont icon="site-map" className="icon" />
                <span className="title">Product Categories</span>
              </NavLink>
              <NavLink
                to="/dashboard/productSubCategories/"
                className="nav-link"
              >
                <Icofont icon="expand" className="icon" />
                <span className="title">Product Sub Categories</span>
              </NavLink>
              <NavLink
                to="/dashboard/productCategoryHeads/"
                className="nav-link"
              >
                <Icon.Plus className="icon" />
                <span className="title">Category Head</span>
              </NavLink>
              <NavLink to="/dashboard/brands/" className="nav-link">
                <Icofont icon="ui-tag" className="icon" />
                <span className="title">Brands</span>
              </NavLink>
              <NavLink to="/dashboard/product-mappings/" className="nav-link">
                <Icofont icon="map" className="icon" />
                <span className="title">Product Mappings</span>
              </NavLink>
              <NavLink to="/dashboard/models/" className="nav-link">
                <Icofont icon="dropbox" className="icon" />
                <span className="title">Models</span>
              </NavLink>
              <NavLink to="/dashboard/city/" className="nav-link">
                <Icofont icon="building-alt" className="icon" />
                <span className="title">City</span>
              </NavLink>
              {/* <NavLink to="/dashboard/budgets/" className="nav-link">
                <Icofont icon="bars" className="icon" />
                <span className="title">Budgets</span>
              </NavLink> */}
              <NavLink to="/dashboard/roles/" className="nav-link">
                <Icofont icon="users-alt-5" className="icon" />
                <span className="title">Roles</span>
              </NavLink>
              <NavLink to="/dashboard/country/" className="nav-link">
                <Icofont icon="globe" className="icon" />
                <span className="title">Country</span>
              </NavLink>
              <NavLink to="/dashboard/languages/" className="nav-link">
                <Icofont icon="globe-alt" className="icon" />
                <span className="title">Languages</span>
              </NavLink>
              <NavLink to="/dashboard/userRoles/" className="nav-link">
                <Icofont icon="users-alt-5" className="icon" />
                <span className="title">User Roles</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SideMenuLight;
