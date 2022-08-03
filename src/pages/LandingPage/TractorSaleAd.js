import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { RootContext } from "../../context/RootContext";
import { user } from "../../API/User/index";
import toast from "react-hot-toast";
import Icofont from "react-icofont";
import Cookies from 'universal-cookie';


function MyVerticallyCenteredModal(props) {
	const cookies = new Cookies();

	const [confirmPassword, setConfirmPassword] = useState();
	const [confirmPasswordError, setConfirmPasswordError] = useState();
	const [fullName, setFullName] = useState();
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
  } = useContext(RootContext);
  const [alertMessage, setAlertMessage] = useState(
    "Confirmation Mail mail sent to your Email Address. Kindly Confirm Your email to continue.."
  );
  const [alertType, setAlertType] = useState("alert-success");

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
	const createUserAccount = async (e) => {
    // e.preventDefault()
    if (password != confirmPassword) {
      setConfirmPasswordError("password not match");
      return;
    }
    const loadingToastId = toast.loading("Loading..!");
    try {
       
      const result = await user.signUp(
        email,
        password,
        confirmPassword,
        fullName
      );

      //success
      if (result.error === false) {
      	toast.dismiss(loadingToastId);
				setSignUpMessage(true);
				localStorage.setItem("placeAdClicked", JSON.stringify(true));
				cookies.set('placeAdClicked', 'true', { path: '/' });


				history.push('/login');
      }

      //error
      if (result.error === true) {
        toast.dismiss(loadingToastId);
        toast.error("signup failed");
				setSignUpMessage(result.data.errors.full_messages)
				setAlertMessage(result.data.errors.full_messages)
        setAlertType('alert-danger')
        console.error(result.data.errors.full_messages);
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
				{signUpMessage ?
        <div class={`alert ${alertType} alert-dismissible fade show mt-2`} role="alert">
          {alertMessage}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={ () => {setSignUpMessage(false)}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        :
        null
      }
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
                    setFullName(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="relative">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                
              </Form.Group>

              <Form.Group className="relative">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
          
              </Form.Group>
              {confirmPasswordError ? (
                <span className="text-danger">{confirmPasswordError}</span>
              ) : (
                ""
              )}
              <div className="text-center">
								<Button
									onClick={(e)=>{createUserAccount(e)}}
									variant="primary" className="mb-2 mt-5">
                  Sign Up
								</Button>
					
								<Link
										onClick={()=>setSignUp(false)}
									to="/login/"
									className="">
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
                  className="mb-2 mt-4"
                  variant="primary"
                  type="submit"
                  onClick={onLoginHandler}
                >
                  Log In
                </Button>

									<Link
										// to="/signup/"
										onClick={()=>setSignUp(true)}
									>Don't Have an Account?</Link>
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

const TractorSaleAd = () => {

  const [modalShow, setModalShow] = React.useState(false);

  function postAdd() {
    if (localStorage.currentUser === undefined) {
      setModalShow(true);
    } else {
    }
  }

  return (
    <>
      <div className="bg-white">
        <div className="container-lg py-3">
          <div className="home-widgets row">
            <div className="home-widgets-title w-full-lg">
              <h3>
                TractorOnline is the best place to sell your tractor for the
                best price.
              </h3>
            </div>
            <div className="col-lg-6 col-12 mt-4 line or">
              <h2>Place an ad on TractorOnline.com</h2>
              <ul>
                <li>
                  <i className="fa fa-tick"></i>In three simple steps, you can
                  post your free ad.
                </li>
                <li>
                  <i className="fa fa-tick"></i>Get Genuine Offers from Trusted
                  Vendors
                </li>
                <li>
                  <i className="fa fa-tick"></i>Sell your car as soon as
                  possible for the best price
                </li>
              </ul>
              {localStorage.currentUser === undefined ? (
                <>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <button
                    onClick={() => setModalShow(true)}
                    className="btn btn-danger btn-lg text-white"
                  >
                    Place Your Ad Here
                  </button>
                </>
              ) : (
                <>
										<NavLink
                    to="used-tractors/sell"
                    className="btn btn-danger btn-lg text-white"
                  >
                    Place Your Ad Here
                  </NavLink>
                </>
              )}
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <h2>Sell It For Me on TractorOnline</h2>
              <ul>
                <li>
                  <i className="fa fa-tick"></i>Your Tractor Will Be Sold by a
                  Dedicated Sales Expert
                </li>
                <li>
                  <i className="fa fa-tick"></i>We negotiate on your behalf and
                  share the best deal with you.
                </li>
                <li>
                  <i className="fa fa-tick"></i>We guarantee a safe and secure
                  transaction.
                </li>
              </ul>
              <span className="btn btn-info btn-lg text-white">
                Coming Soon....
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TractorSaleAd;
