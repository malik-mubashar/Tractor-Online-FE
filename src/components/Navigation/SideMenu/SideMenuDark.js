import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as Icon from 'react-feather';
import './SideMenu.css';

class SideMenuDark extends React.Component {
    render() { 
        return (
            <div className={`sidemenu-area ${this.props.sideMenu ? '' : 'sidemenu-toggle'}`}>
                <Navbar className={`sidemenu ${this.props.sideMenu ? '' : 'hide-nav-title'}`} >
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.Grid 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Dashboard 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/dashboard/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Default Dashboard
                                </NavLink>
                                
                            </NavDropdown>


                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.User 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        User 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/signup/" 
                                    className="dropdown-item" 
                                    target="_blank">
                                    <Icon.UserPlus 
                                        className="icon" 
                                    /> 
                                    Sign Up
                                </NavLink>
                                <NavLink 
                                    to="/login/" 
                                    className="dropdown-item" 
                                    target="_blank"> 
                                    <Icon.UserCheck 
                                        className="icon" 
                                    /> 
                                    Login
                                </NavLink>
                                <NavLink 
                                    to="/forgot-password/" 
                                    className="dropdown-item" 
                                    target="_blank">
                                    <Icon.Unlock 
                                        className="icon" 
                                    /> 
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

export default SideMenuDark;