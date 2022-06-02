import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as Icon from 'react-feather';
import './SideMenu.css';

class SideMenuLight extends React.Component {
    render() { 
        return (
            <div className={`sidemenu-area sidemenu-light ${this.props.sideMenu ? '' : 'sidemenu-toggle'}`}>
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
                                <NavLink 
                                    to="/dashboard-two/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu"> 
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    eCommerce Dashboard
                                </NavLink>
                                <NavLink 
                                    to="/dashboard-three/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Analytics Dashboard
                                </NavLink>
                            </NavDropdown>

                            <NavLink to="/inbox/" className="nav-link">
                                <Icon.Inbox 
                                    className="icon"
                                /> 
                                <span className="title">Inbox</span>
                            </NavLink>

                            <NavLink to="/chat/" className="nav-link">
                                <Icon.MessageSquare 
                                    className="icon"
                                /> 
                                <span className="title">Chat</span>
                            </NavLink>

                            <NavLink to="/todos/" className="nav-link">
                                <Icon.CheckSquare 
                                    className="icon"
                                /> 
                                <span className="title">Todo List</span>
                            </NavLink>

                            <NavLink to="/notes/" className="nav-link">
                                <Icon.FileText 
                                    className="icon"
                                />
                                <span className="title">Notes</span>
                            </NavLink>

                            <NavLink to="/calendar/" className="nav-link">
                                <Icon.Calendar 
                                    className="icon"
                                />
                                <span className="title">Calendar</span>
                            </NavLink>

                            <NavLink to="/search/" className="nav-link">
                                <Icon.Search 
                                    className="icon"
                                />
                                <span className="title">Search</span>
                            </NavLink>
 
                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            UI Components
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/ui-components/alerts/" 
                                    className="dropdown-item">
                                    <Icon.Bell 
                                        className="icon" 
                                    />
                                    Alerts
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/badges/" 
                                    className="dropdown-item"> 
                                    <Icon.Award 
                                        className="icon" 
                                    /> 
                                    Badges
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/buttons/" 
                                    className="dropdown-item">
                                    <Icon.ArrowRightCircle 
                                        className="icon" 
                                    />
                                    Buttons
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/cards/" 
                                    className="dropdown-item">
                                    <Icon.Layers 
                                        className="icon" 
                                    />
                                    Cards
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/dropdowns/" 
                                    className="dropdown-item">
                                    <Icon.ArrowDownCircle 
                                        className="icon" 
                                    /> 
                                    Dropdowns
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/forms/" 
                                    className="dropdown-item">
                                    <Icon.FileText 
                                        className="icon" 
                                    /> 
                                    Forms
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/list-groups/" 
                                    className="dropdown-item">
                                    <Icon.List 
                                        className="icon" 
                                    />
                                    List Groups
                                </NavLink> 
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/modals/" 
                                    className="dropdown-item">
                                    <Icon.Airplay 
                                        className="icon" 
                                    /> 
                                    Modals
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/progress-bars/" 
                                    className="dropdown-item">
                                    <Icon.TrendingUp 
                                        className="icon" 
                                    />
                                    Progress Bars
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/tables/" 
                                    className="dropdown-item">
                                    <Icon.Database 
                                        className="icon" 
                                    /> 
                                    Tables
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/ui-components/tabs/" 
                                    className="dropdown-item">
                                    <Icon.Triangle 
                                        className="icon" 
                                    /> 
                                    Tabs
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
                            
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.BarChart2 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Charts 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/line-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Line Charts
                                </NavLink>
                                <NavLink 
                                    to="/area-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Area Charts
                                </NavLink>
                                <NavLink 
                                    to="/column-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Column Charts
                                </NavLink>
                                <NavLink 
                                    to="/bar-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Bar Charts
                                </NavLink>
                                <NavLink 
                                    to="/mixed-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Mixed Charts
                                </NavLink>
                                <NavLink 
                                    to="/pie-donuts-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Pie and Donuts Charts
                                </NavLink>
                            </NavDropdown>

                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.MapPin 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Map 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/google-map/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Google Map
                                </NavLink>
                                <NavLink 
                                    to="/vector-map/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Vector Maps
                                </NavLink>
                            </NavDropdown>
                            
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.Heart 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Icons 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/feather-icons/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Feather Icons
                                </NavLink>
                                <NavLink 
                                    to="/icofont-icons/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Icofont Icons
                                </NavLink>    
                            </NavDropdown>

                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.FileText 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Pages 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/users-card/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Users Card
                                </NavLink>

                                <NavLink 
                                    to="/notifications/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    <span className="title">Notifications</span>
                                </NavLink>

                                <NavLink 
                                    to="/time-line/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Time line
                                </NavLink>

                                <NavLink 
                                    to="/invoice-template/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Invoice Template
                                </NavLink>

                                <NavLink 
                                    to="/gallery/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Gallery
                                </NavLink>

                                <NavLink 
                                    to="/faq/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Faq
                                </NavLink>
                                <NavLink 
                                    to="/pricing/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Pricing
                                </NavLink>

                                <NavLink 
                                    to="/error-404/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Error 404 
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