/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../components/Navigation/Navigation.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import DropDown from "./DropDown";
import Logo from "../../assets/img/tractoronline.png";

const Topbar = () => {
  const history = useHistory();

  return (
    <Navbar fixed="top" className="top-menu landingTopbar">
      <Image src={Logo} height="30px" width="160px" alt="Profile Image" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-5 pl-5">
        <DropDown title="Used Tractors" usedCars={true} />
        <DropDown title="New Tractors" newCars={true} />
        <DropDown title="Auto Stores" autoStore={true} />
        <div className="dropdown-button p-2">New Farming Equipment</div>
        <div className="dropdown-button p-2">Accessories and Parts</div>
        <div className="dropdown-button p-2">Fertilizers and seeds</div>
        <div className="dropdown-button p-2">Plants and Horticulture</div>

        <Nav className="ml-auto right-nav">
          <ul className="navbar-nav mr-auto">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
