/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import "../../components/Navigation/Navigation.css";
import { Navbar, Nav, Image, NavDropdown,Form, Button, Modal } from "react-bootstrap";
import { NavLink, useHistory,Link } from "react-router-dom";
import DropDownTopbar from "./DropDownTopbar";
import "../Categories/SideMenue.css";
import Logo from "../../assets/img/tractoronline.png";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import Icofont from "react-icofont";
import * as Icon from "react-feather";
import toast from "react-hot-toast";
import {RootContext} from "../../context/RootContext"
import {user} from "../../API/User/index"


function MyVerticallyCenteredModal(props) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [signUp, setSignUp] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  let history = useHistory();
    const [passwordInput, setPasswordInput] = useState("");
    const { currentUser, setCurrentUser, signUpMessage, setSignUpMessage } = useContext(RootContext);
    const [alertMessage, setAlertMessage]  = useState('Confirmation Mail mail sent to your Email Address. Kindly Confirm Your email to continue..')
    const [alertType, setAlertType] = useState('alert-success')
    


    const onLoginHandler = async (e) => {
      e.preventDefault();
      const loadingToastId = toast.loading("Loading..!");
  
      try {
        const result = await user.login(email, password);
        console.log(result);
        //success
        if (result.error === false) {
          toast.dismiss(loadingToastId);
  
          toast.success('welcome')
          setCurrentUser({
            ...result.data.data,
            accessToken: result.headers["access-token"],
            client: result.headers["client"],
            uid: result.headers["uid"]
          });
  
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              ...result.data.data,
              accessToken: result.headers["access-token"],
              client: result.headers["client"],
              uid: result.headers["uid"]
            })
          );
          localStorage.setItem("headers", JSON.stringify(result.headers));
          history.push("/sell-tractor");
          setSignUpMessage(false)
        }
  
        //error
        if (result.error === true) {
          toast.dismiss(loadingToastId);
          // toast.error('Login failed');
          setAlertMessage(result.data.errors[0])
          setSignUpMessage(true)
          setAlertType('alert-danger')
        }
      } catch (error) {
        toast.dismiss(loadingToastId);
  
        console.error(error);
      }
    };

    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {signUp ? "Sign Up" : "Login" }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-content p-0">
          {signUp ?
            <Form>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    // setFullName(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="relative">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={passwordType}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                {/* <i className="password-icons cursor-pointer" onClick={togglePassword}>
                {
                  passwordType==="password"?
                    <Icofont
                      icon="eye"
                      className="icofont-2x"
                    />
                  :
                    <Icofont
                      icon="eye-blocked"
                      className="icofont-2x"
                    />
                }
              </i> */}
              </Form.Group>

              <Form.Group className="relative">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  // type={confirmPasswordType}
                  onChange={(event) => {
                    // setConfirmPassword(event.target.value);
                  }}
                />
                {/* <i className="password-icons cursor-pointer" onClick={confirmTogglePassword}>
                {
                  confirmPasswordType==="password"?
                    <Icofont
                      icon="eye"
                      className="icofont-2x"
                    />
                  :
                    <Icofont
                      icon="eye-blocked"
                      className="icofont-2x"
                    />
                }
              </i> */}
              </Form.Group>
              {/* {error ? (
                <span className="text-danger">{error}</span>
              ) : (
                ""
              )} */}
              <div className="text-center">
                <Button variant="primary" className="mb-2">
                  Sign Up
                </Button>
                <Link to="/login/" className="">
                  Already have an Account?
                </Link>
              </div>
            </Form>
          :
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="relative">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={passwordType}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <i className="password-icons cursor-pointer" onClick={togglePassword}>
                  {
                    passwordType==="password"?
                      <Icofont
                        icon="eye"
                        className="icofont-2x"
                      />
                    :
                      <Icofont
                        icon="eye-blocked"
                        className="icofont-2x"
                      />
                  }
                </i>
              </Form.Group>
              <div className="text-center">
                <Button
                  className="mb-2"
                  variant="primary"
                  type="submit"
                  onClick={onLoginHandler}
                >
                  Log In
                </Button>
                <Link to="/signup/">
                  Don't Have an Account?
                </Link>
              </div>
            </Form>
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




const Topbar = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();
  const [productCategories, setProductCategories] = useState();
  const [profile, setProfile] = useState();
  const [cities, setCities] = useState([]);
  const [brands, setBrands] = useState();
  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
    handleGetAllProductCategories();
  }, []);

  const handleGetAllProductCategories = async () => {
    const result = await prodApi.getProdCategoriesList();
    if (result.error === false) {
      setBrands(result.data && result.data.data);
    }
  };
  const handleGetAllCities = async () => {
    const result = await city.getPopularCity("popular");

    if (result.error === false) {
      setCities(result.data && result.data.data);
    }
  };

  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
  };

  return (
    <Navbar fixed="top" className="top-menu landingTopbar">
      <Image onClick={() => {history.push("/")}} className="cursor-pointer" src={Logo} height="30px" width="160px" alt="Profile Image" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-5 pl-5">
        {productCategories &&
          productCategories.map((item, i) => {
            return (
              <div key={i}>
                {i < 5 ? (
                  <DropDownTopbar
                    title={item.title}
                    productHead={item.product_category_heads}
                    cities={cities}
                    brands={item.category_brands}
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
            {productCategories &&
              productCategories.map((item, i) => {
                return (
                  <div key={i}>
                    {i > 4 ? (
                      <div className="p-2 dropdown-link">{item.title}</div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        </div>

        {localStorage.currentUser !== undefined ? (
          <>
            <Nav className="ml-auto right-nav">
              <ul className="navbar-nav mr-auto">
                <NavLink to ="/sell-tractor/" className="btn btn-danger btn-lg text-white mr-2">
                  Post An Ad
                </NavLink>
                <NavDropdown
                  title={
                    <div className="menu-profile">
                      <span className="name">
                        Welcome{" "}
                        {profile && profile.name ? profile.name : "user name"}{" "}
                      </span>
											<Image
												// src={profile}
												alt="Profile Image"
												roundedCircle
											/>
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

                  <NavLink
                    to="/"
                    className="dropdown-item"
                    onClick={() => {
                      localStorage.setItem("currentUser", null);
                      localStorage.setItem("user", null);
                      localStorage.setItem("headers", null);
                    }}
                  >
                    <Icon.LogOut className="icon" />
                    Logout
                  </NavLink>
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
            <Nav className="ml-auto right-nav">
              <ul className="navbar-nav mr-auto">
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
                <button onClick={ () => setModalShow(true)} className="btn btn-danger btn-lg text-white mr-2">
                  Post An Ad
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
