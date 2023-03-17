/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import "../../components/Navigation/Navigation.css";
import {
  Navbar,
  Nav,
  Image,
  NavDropdown,
  Form,
  Button,
  Modal,
  Row,
  Col
} from "react-bootstrap";
import { NavLink, useHistory, Link } from "react-router-dom";
import DropDownTopbar from "./DropDownTopbar";
import "../Section-1/SideMenue.css";
import Logo from "../../assets/img/tractoronline.png";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import Icofont from "react-icofont";
import * as Icon from "react-feather";
import toast from "react-hot-toast";
import { RootContext } from "../../context/RootContext";
import { user } from "../../API/User/index";
import noProfilePicture from "../../assets/svg/no-profile-picture.svg";
import LoginModel from "../LoginModel";

const Topbar = () => {
  const {
    setUserProfilePicture,
    userProfilePicture,
    currentUser,
		setCurrentUser,
		prodCategories,
		setProdCategories,
		cities,
		popularCities
  } = useContext(RootContext);

  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();

  return (
    <>
      <Navbar fixed="top" style={{ background: 'white' }} className="p-0 m-0">
        <div className="row col-lg-12" style={{ margin: '0', padding: 0 }} >
          <div class="row" style={{ background: 'linear-gradient(-135deg, #41a746 74%, #FFBF00 40%)', margin: '0', padding: 0 }}>
            <Nav className="ms-auto mr-5">
              <Navbar.Brand href="#home">
              <Image
                onClick={() => {
                  history.push("/");
                }}
                className="cursor-pointer mb-2"
                src={Logo}
                height="40"
                width="280"
                alt="Profile Image"
                      
              />
            </Navbar.Brand>
              {/* {(localStorage.currentUser !== undefined && localStorage.currentUser !== null) ? ( */}
              {currentUser != undefined && currentUser != null ? (
                <>
                  {/* login case */}
                  <Nav className="ml-auto right-nav">
                    <ul className="navbar-nav mr-auto">
                      
                      <NavDropdown
                        title={
                          <span>
                            <span className="menu-profile text-white mr-5" style={{marginRight:'12px'}}>
                              {userProfilePicture && userProfilePicture !== null ? (
                                <span>
                                  <span style={{width: '30px', height:'42px'}}>
                                    <img 
                                      style={{marginTop:'5px', borderRadius:'100%', height:'33px'}}
                                      src={userProfilePicture && userProfilePicture}
                                      alt="Profile"
                                      roundedCircle
                                    />
                                  </span>  
                                </span>
                              ) : (
                                <Image
                                src={noProfilePicture}
                                alt="no Profile Image"
                                roundedCircle
                                />
                                )}
                            </span>
                          
                          </span>
                        }
                        id="basic-nav-dropdown"
                        className="profile-nav-item text-white"
                      >
                      
                        <NavLink to="/profile/" className="dropdown-item">
                          <Icon.User className="icon" />
                          Profile
                        </NavLink>
                        <NavLink to="/profile-settings/" className="dropdown-item">
                          <Icon.Settings className="icon" />
                          Edit Profile
                        </NavLink>

                        <button
                          className="dropdown-item"
                          onClick={() => {
                            localStorage.setItem("currentUser", null);
                            localStorage.setItem("user", null);
                            localStorage.setItem("headers", null);
                            setUserProfilePicture(null);
                            setCurrentUser(null);
                            history.push("/");
                          }}
                        >
                          <Icon.LogOut className="icon" />
                          Logout
                        </button>
                      </NavDropdown>
                      <div>
                        <Link
                          to="/product/sell/"
                          className="btn btn-danger btn-sm text-white mr-2"
                          style={{marginTop:'12.5px'}}
                        >
                          Post An Add
                        </Link>
                      </div>
                      {/* <div className="dropdown-button p-2">
                    Welcome  {profile && profile.name ? profile.name : "user name"}
                  </div>
                  <NavLink
                  to="/login/"
                    onClick={() => {
                      localStorage.setItem("currentUser", null);
                      localStorage.setItem("user", null);
                      localStorage.setItem("headers", null);
                    }}
                    className="dropdown-button p-2"
                  >
                    Log out
                    </NavLink> */}
                    </ul>
                  </Nav>
                </>
              ) : (
                <>
                  {/* logout case */}
                  <Nav className="ml-auto right-nav" style={{ background: 'height: 40px' }}>
                    <ul className="navbar-nav mr-auto">
                      <LoginModel
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        setModalShow={setModalShow}
                        redirect="/product/sell"
                      />
                      <div
                        onClick={() => history.push("/login/")}
                        className="dropdown-button text-white p-3 acc-hover"
                      >
                        Login
                      </div>
                      <div
                        onClick={() => history.push("/signup/")}
                        className="dropdown-button text-white p-3 mr-2 acc-hover"
                      >
                        Sign Up
                      </div>
                      <button
                        onClick={() => setModalShow(true)}
                            className="btn btn-danger text-white mr-2 mt-2"
                            style={{ width: '150px', height: '40px' }}
                      >
                        <span style={{ fontSize:"1em" }}>Post an Ad</span>
                      </button>
                    </ul>
                  </Nav>
                </>
              )}
            </Nav>
          </div>
          <div className="row col-lg-12" style={{ margin: '0', padding: 0 }} >
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-white" style={{height: '40px' }}>
              {prodCategories &&
                prodCategories.map((item, i) => {
                  return (
                    <div key={i} class="mt-2 mb-2 text-white">
                      {i < 5 ? (
                        <DropDownTopbar
                          link={item.link}
                          title={item.title}
                          productHead={item.product_category_heads}
                          cities={popularCities}
                          brands={item.category_brands}
                          productCategory={item}
                          style={{ color: 'white' }}
                        />
                      ) : null}
                    </div>
                  );
                })}

              <div className="dropdown-button-more mt-2 mb-2 text-black">
                <span className="">More</span>
                <Icofont
                  icon="caret-down"
                  height="10px"
                  width="10px"
                  className="icofont ml-1"
                />
                <div className="drop-down-items-more py-3 more-width">
                  {prodCategories &&
                    prodCategories.map((item, i) => {
                      return (
                        <div key={i}>
                          {i > 4 ? (
                            <Link to={item.link}>
                              <div className="p-2 dropdown-link">{item.title}</div>
                            </Link>
                          ) : null}
                        </div>
                      );
                    })}
                </div>
              </div>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Topbar;
