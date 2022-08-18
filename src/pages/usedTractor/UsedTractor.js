import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import {
  Navbar,
  Nav,
  Image,
  NavDropdown,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import Ads from "../../assets/img/ads.png";
import Buyers from "../../assets/img/buyers.png";
import Sell from "../../assets/img/sell.png";
import FeaturedProducts from "../LandingPage/FeaturedProducts";
import FeaturedTractor from "../LandingPage/FeaturedTractor";
import { NavLink, useHistory, Link, useLocation } from "react-router-dom";
import "../Categories/SideMenue.css";
import Logo from "../../assets/img/tractoronline.png";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import Icofont from "react-icofont";
import * as Icon from "react-feather";
import toast from "react-hot-toast";
import { RootContext } from "../../context/RootContext";
import { user } from "../../API/User/index";

function MyVerticallyCenteredModal(props) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [signUp, setSignUp] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  let history = useHistory();
  const [passwordInput, setPasswordInput] = useState("");
  const {
    currentUser,
    setCurrentUser,
    signUpMessage,
    setSignUpMessage,
    setUserProfilePicture,
    userProfilePicture
  } = useContext(RootContext);
  const [alertMessage, setAlertMessage] = useState(
    "Confirmation Mail mail sent to your Email Address. Kindly Confirm Your email to continue.."
  );
  const [alertType, setAlertType] = useState("alert-success");

  const handlePersonalDetail = async (currentUser) => {
    const loadingToastId = toast.loading("Loading..!");
    const result = await user.findUser(currentUser);
    if (result.error === false) {
      toast.dismiss(loadingToastId);
      localStorage.setItem('userProfilePicture',JSON.stringify(result.data.profile_path||null))
      setUserProfilePicture(result.data.profile_path)
    }
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await user.login(email, password);
      console.log(result);
      //success
      if (result.error === false) {
        toast.dismiss(loadingToastId);

        toast.success("welcome");
        setCurrentUser({
          ...result.data.data,
          accessToken: result.headers["access-token"],
          client: result.headers["client"],
          uid: result.headers["uid"],
        });

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            ...result.data.data,
            accessToken: result.headers["access-token"],
            client: result.headers["client"],
            uid: result.headers["uid"],
          })
        );
        if (userProfilePicture == null) {
          handlePersonalDetail({ ...result.data.data,
            accessToken: result.headers["access-token"],
            client: result.headers["client"],
            uid: result.headers["uid"],
            role:result.data.role});
        }
        localStorage.setItem("headers", JSON.stringify(result.headers));
        history.push("/used-tractor/sell");
        setSignUpMessage(false);
      }

      //error
      if (result.error === true) {
        toast.dismiss(loadingToastId);
        // toast.error('Login failed');
        setAlertMessage(result.data.errors[0]);
        setSignUpMessage(true);
        setAlertType("alert-danger");
      }
    } catch (error) {
      toast.dismiss(loadingToastId);

      console.error(error);
    }
  };

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {signUp ? "Sign Up" : "Login"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-content p-0">
          {signUp ? (
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
          ) : (
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
                <i
                  className="password-icons cursor-pointer"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <Icofont icon="eye" className="icofont-2x" />
                  ) : (
                    <Icofont icon="eye-blocked" className="icofont-2x" />
                  )}
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
                <Link to="/signup/">Don't Have an Account?</Link>
              </div>
            </Form>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function UsedTractor() {
  const history = useHistory();

  const { setLandingPageSearchOptions } = useContext(RootContext);

  const [tractorModel, setTractorModel] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [cities, setCities] = useState("");
  const [minPrice, setMinPrice] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [prodCategories, setProdCategories] = useState();
  const search = useLocation().search;
  var category = new URLSearchParams(search).get("category");
	useEffect(() => {
	
		handleGetAllProductCategories()
	}, [])
	
  const getAllCity = async () => {
    const result = await city.getAllCity();
    const tempArray = [];
    result &&
      result.data &&
      result.data.data.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCities(tempArray);
	};
	const handleGetAllProductCategories = async () => {
    
    const result = await prodApi.getAllProductCategories();
    if(result.error=== false){
      setProdCategories(result.data && result.data.data);
    
    }
  };

  const [maxPrice, setMaxPrice] = useState();
  const [minPriceOptions, setMinPriceOptions] = useState([
    { label: "10000", value: "10000" },
    { label: "20000", value: "20000" },
    { label: "30000", value: "30000" },
    { label: "40000", value: "40000" },
    { label: "50000", value: "50000" },
    { label: "60000", value: "60000" },
    { label: "70000", value: "70000" },
  ]);
  const [maxPriceOptions, setMaxPriceOptions] = useState([
    { label: "100000", value: "100000" },
    { label: "200000", value: "200000" },
    { label: "300000", value: "300000" },
    { label: "400000", value: "400000" },
    { label: "500000", value: "500000" },
    { label: "600000", value: "600000" },
    { label: "700000", value: "700000" },
  ]);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (minPrice) {
      let temp = maxPriceOptions.filter(function(x) {
        return parseInt(x.label) > parseInt(minPrice);
      });
      setMaxPriceOptions(temp);
    }
  }, [minPrice]);
  useEffect(() => {
    if (maxPrice) {
      let temp = minPriceOptions.filter(function(x) {
        return parseInt(x.label) < parseInt(maxPrice);
      });
      setMinPriceOptions(temp);
    }
  }, [maxPrice]);

  useEffect(() => {
    getAllCity();
  }, []);

  function postAdd() {
    if (localStorage.currentUser === undefined) {
      setModalShow(true);
    } else {
      history.push("/used-tractor/sell/");
    }
  }
  console.log("window.location.href", window.location.href);
  console.log("category", category);
  return (
    <div className="usedTractorMain pt-3">
      <div className="usedTractorsContainer">
        <div className="container">
          <h1>Find {prodCategories && prodCategories.find((cate)=>cate.id==category).title} in Pakistan</h1>
          <p>With thousand of Tractors,we have just the right one for you</p>
        </div>
      </div>
      <div className="container">
        <div className="searchCard card">
          <div className="row mt-3">
            <div className="col-4">
              <Form.Group>
                <Form.Control
                  className="searchTitle fieldHeight"
                  placeholder="Search by Name...."
                  type="email"
                  onChange={(event) => setTractorModel(event.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-4">
              <Select
                className="fieldHeight"
                options={cities}
                label="Select City"
                placeholder="Select City"
                onChange={(e) => setCitySelected(e.label)}
                clearable={false}
              />
            </div>
            <div className="col-4 d-flex">
              <Select
                className="col-6 px-0 fieldHeight"
                options={minPriceOptions}
                label="Select Min Price "
                placeholder="Select Min Price"
                onChange={(e) => setMinPrice(e.label)}
                clearable={false}
              />
              <Select
                className="col-6 px-0 fieldHeight"
                options={maxPriceOptions}
                label="Select Max Price"
                placeholder="Select Max Price"
                onChange={(e) => setMaxPrice(e.label)}
                clearable={false}
              />
            </div>
          </div>
          <div className="d-flex mt-4">
            <button
              className="btn btn-success col-2 ml-auto mr-2"
              type="submit"
              onClick={() => {
                setLandingPageSearchOptions({
                  city: citySelected || "nil",
                  priceRangeTo: maxPrice || "nil",
                  priceRangeFrom: minPrice || "nil",
                  title: tractorModel || "nil",
                });
								// history.push(`/used-tractor/search?category=${category}`);
								history.push(`/used-tractor/search?category=${category}&city=${citySelected||'nil'}&priceRangeTo=${maxPrice||'nil'}&priceRangeFrom=${minPrice||'nil'}&title=${tractorModel||'nil'}`)

              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="container row ml-4">
          <div className="col-3 text-center align-items-center justify-content-center d-flex">
            <div>
              <Image src={Ads} alt="Logo" height="80px" width="80px" />
              <h5>Free Ad</h5>
              <p>In 30 seconds, post a free ad for your tractor.</p>
            </div>
          </div>
          <div className="col-3 text-center align-items-center justify-content-center d-flex">
            <div>
              <Image src={Buyers} alt="Logo" height="80px" width="80px" />
              <h5>Genuine Buyers</h5>
              <p>Receive genuine offers from confirmed purchasers.</p>
            </div>
          </div>
          <div className="col-3 text-center align-items-center justify-content-center d-flex">
            <div>
              <Image src={Sell} alt="Logo" height="80px" width="80px" />
              <h5>Sell Faster</h5>
              <p>
                Sell your tractor at a higher price and faster than competitors.
              </p>
            </div>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div className="col-3 text-center align-items-center justify-content-center d-flex">
            <button
              onClick={() => postAdd()}
              className="btn btn-danger btn-lg text-white mr-2"
            >
              Post An Ad
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white my-4">
        <div className="container-lg py-4 ">
          <FeaturedProducts
            title={category?prodCategories && prodCategories.find((cate)=>cate.id==category).title:'Products'}
            link={``}
            prodCategoryId={category}
          />
        </div>
      </div>
    </div>
  );
}
