import React, { useContext, useState } from "react";
import { withRouter, Link, NavLink, useHistory } from "react-router-dom";
import * as Icon from "react-feather";
import "./Navigation.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap";

import ColorSwitch from "../Common/ColorSwitch";

// Default dark side menu
import SideMenuDark from "./SideMenu/SideMenuDark";
// If want to active light sidebar then please uncomment below & comment above component
import SideMenuLight from "./SideMenu/SideMenuLight";


// Profile & user image path
import profile from "../../assets/img/profile.jpg";
import user1 from "../../assets/img/user/user1.jpg";
import user2 from "../../assets/img/user/user2.jpg";
import user3 from "../../assets/img/user/user3.jpg";
import { RootContext } from "../../context/RootContext";

const Navigation = ({onClick }) => {
	const {
    currentUser,
    setCurrentUser,
    signUpMessage,
		setUserProfilePicture,
		userProfilePicture
  } = useContext(RootContext);
	const history=useHistory()
  const[state,setState] =useState( {
    sideMenu: false,
    term: "",
    menuColor: true
  });

  const _toggleClass = () => {
    const currentSideMenu = state.sideMenu;
    setState({ ...state,sideMenu: !currentSideMenu });
    onClick();
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    if (state.term) {
      history.push( "/dashboard/search");
    }
  };

  const onSideMenuHandler = (activeColor) => {
    setState({ menuColor: activeColor });
  };
  
    return (
      <div className="page-wrapper">
        <Navbar fixed="top" className="top-menu">
          <Link to="/dashboard" className={`navbar-brand`}>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Burger menu */}
          <div
            className={`burger-menu ${
              state.sideMenu ? "" : "toggle-menu"
            }`}
            onClick={()=>_toggleClass()}
          >
            <span className="top-bar"></span>
            <span className="middle-bar"></span>
            <span className="bottom-bar"></span>
          </div>
          {/* End Burger menu */}

          <Navbar.Collapse id="basic-navbar-nav">
            <Form
              className="nav-search-form d-none d-sm-block"
              onSubmit={()=>_handleSubmit()}
              action= "/dashboard/search"
            >
              <FormControl
                type="text"
                value={state.term}
                onChange={(e) => setState({...state, term: e.target.value })}
                placeholder="Search..."
              />

              <Button className="search-success" type="submit">
                <Icon.Search className="icon" />
              </Button>
            </Form>

            <Nav className="ml-auto right-nav">
              <NavDropdown
                title={
                  <div className="count-info">
                    <Icon.Mail className="icon" />
                    <span className="ci-number theme-bg">
                      <span className="ripple theme-bg"></span>
                      <span className="ripple theme-bg"></span>
                      <span className="ripple theme-bg"></span>
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
                className="message-box d-none d-sm-block"
              >
                <NavLink to="#" className="dropdown-item">
                  <div className="message-item">
                    <span className="user-pic">
                      <Image src={user1} alt="User Image" roundedCircle />
                      <span className="profile-status online"></span>
                    </span>

                    <span className="chat-content">
                      <h5 className="message-title">Aaron Rossi</h5>
                      <span className="mail-desc">
                        Just sent a new comment!
                      </span>
                    </span>
                    <span className="time">0 seconds ago</span>
                  </div>
                </NavLink>

                <NavLink to="#" className="dropdown-item">
                  <div className="message-item">
                    <span className="user-pic">
                      <Image src={user2} alt="User Image" roundedCircle />
                      <span className="profile-status ofline"></span>
                    </span>

                    <span className="chat-content">
                      <h5 className="message-title">Marco Gomez</h5>
                      <span className="mail-desc">
                        Just sent a new comment!
                      </span>
                    </span>
                    <span className="time">5 minutes ago</span>
                  </div>
                </NavLink>

                <NavLink to="#" className="dropdown-item">
                  <div className="message-item">
                    <span className="user-pic">
                      <Image src={user3} alt="User Image" roundedCircle />
                      <span className="profile-status away"></span>
                    </span>

                    <span className="chat-content">
                      <h5 className="message-title">Mitch Petty</h5>
                      <span className="mail-desc">
                        Just sent a new comment!
                      </span>
                    </span>
                    <span className="time">9:00 AM</span>
                  </div>
                </NavLink>
              </NavDropdown>

              <NavDropdown
                title={
                  <div className="count-info">
                    <Icon.Bell className="icon" />
                    <span className="ci-number">
                      <span className="ripple"></span>
                      <span className="ripple"></span>
                      <span className="ripple"></span>
                    </span>
                  </div>
                }
                id="basic-nav-dropdown"
                className="message-box"
              >
                <NavLink to="#" className="dropdown-item">
                  <div className="message-item">
                    <span className="user-pic">
                      <Image src={user1} alt="User Image" roundedCircle />
                      <span className="profile-status online"></span>
                    </span>

                    <span className="chat-content">
                      <h5 className="message-title">Aaron Rossi</h5>
                      <span className="mail-desc">
                        Just sent a new comment!
                      </span>
                    </span>
                    <span className="time">0 seconds ago</span>
                  </div>
                </NavLink>

                <NavLink to="#" className="dropdown-item">
                  <div className="message-item">
                    <span className="user-pic">
                      <Image src={user2} alt="User Image" roundedCircle />
                      <span className="profile-status ofline"></span>
                    </span>

                    <span className="chat-content">
                      <h5 className="message-title">Marco Gomez</h5>
                      <span className="mail-desc">
                        Just sent a new comment!
                      </span>
                    </span>
                    <span className="time">5 minutes ago</span>
                  </div>
                </NavLink>

                <NavLink to="#" className="dropdown-item">
                  <div className="message-item">
                    <span className="user-pic">
                      <Image src={user3} alt="User Image" roundedCircle />
                      <span className="profile-status away"></span>
                    </span>

                    <span className="chat-content">
                      <h5 className="message-title">Mitch Petty</h5>
                      <span className="mail-desc">
                        New order received! <span className="amount">$250</span>
                      </span>
                    </span>
                    <span className="time">9:00 AM - 02-02-2019</span>
                  </div>
                </NavLink>
              </NavDropdown>

              <NavDropdown
                title={
                  <div className="menu-profile">
										<span className="name">Welcome </span>
										{
											userProfilePicture && (userProfilePicture != null && userProfilePicture !== undefined) ?
												<Image src={userProfilePicture && userProfilePicture} alt="ProfileImage" roundedCircle />
												:
											<Image src={user1} alt="ProfileImage" roundedCircle />

												
										}
                  </div>
                }
                id="basic-nav-dropdown"
                className="profile-nav-item"
              >
                <NavLink to="/profile/" className="dropdown-item">
                  <Icon.User className="icon" />
                  Profile
                </NavLink>
                <NavLink to="/profile-settings/" className="dropdown-item">
                  <Icon.Edit className="icon" />
                  Edit Profile
                </NavLink>

								<button
                  // to="/"
                  className="dropdown-item"
									onClick={()=>{history.push('/')}}
									
                >
                  <Icon.Shuffle className="icon" />
                  Landing Page
								</button>

								<button
                  // to="/"
                  className="dropdown-item"
									onClick={() => {
                    localStorage.setItem("currentUser", null);
                    localStorage.setItem("user", null);
										localStorage.setItem("headers", null);
										setUserProfilePicture(null);
										setCurrentUser(null)
										 history.push('/')
										
									}}
									
                >
                  <Icon.LogOut className="icon" />
                  Logout
								</button>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Side Menu File Path: src/components/Navigation/SideMenu/SideMenu.js */}
        {!state.menuColor ? (
          <SideMenuDark sideMenu={state.sideMenu} />
        ) : (
          <SideMenuLight sideMenu={state.sideMenu} />
				)}
				
      </div>
    );

}

export default withRouter(Navigation);
