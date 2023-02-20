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
    <Navbar fixed="top" className="top-menu landingTopbar">
      <Image
        onClick={() => {
          history.push("/");
        }}
        className="cursor-pointer"
        src={Logo}
        height="45px"
        width="260px"
        alt="Profile Image"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="">
        {prodCategories &&
          prodCategories.map((item, i) => {
            return (
              <div key={i}>
                {i < 5 ? (
                  <DropDownTopbar
                    link={item.link}
                    title={item.title}
                    productHead={item.product_category_heads}
                    cities={popularCities}
                    brands={item.category_brands}
                    productCategory={item}
                  />
                ) : null}
              </div>
            );
          })}

        <div className="dropdown-button-more p-2">
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

        {/* {(localStorage.currentUser !== undefined && localStorage.currentUser !== null) ? ( */}
        {currentUser != undefined && currentUser != null ? (
          <>
            {/* login case */}
            <Nav className="ml-auto right-nav">
              <ul className="navbar-nav mr-auto">
                <Link
                  to="/product/sell/"
                  className="btn btn-danger btn-lg text-white mr-2"
                >
                  Post An Add
                </Link>
                <NavDropdown
                  title={
                    <div className="menu-profile">
                      <span className="name">
                        Welcome{" "}
                        {/* {profile && profile.name ? profile.name : "user name"}{" "} */}
                      </span>

                      {userProfilePicture && userProfilePicture !== null ? (
                        <Image
                          src={userProfilePicture && userProfilePicture}
                          alt="Profile Image"
                          roundedCircle
                        />
                      ) : (
                        <Image
                          src={noProfilePicture}
                          alt="no Profile Image"
                          roundedCircle
                        />
                      )}
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
            <Nav className="ml-auto right-nav">
              <ul className="navbar-nav mr-auto">
                <LoginModel
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  setModalShow={setModalShow}
                  redirect="/product/sell"
                />
                <button
                  onClick={() => setModalShow(true)}
                  className="btn btn-danger btn-lg text-white mr-2"
                >
                  Post An Add
                </button>
                <div
                  onClick={() => history.push("/login/")}
                  className="dropdown-button p-2"
                >
                  Login
                </div>
                <div
                  onClick={() => history.push("/signup/")}
                  className="dropdown-button p-2"
                >
                  Sign Up
                </div>
              </ul>
            </Nav>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
