import React, { useContext, useState } from "react";
import HomeSelected from "../../assets/img/home-selected.svg";
import ChatSelected from "../../assets/img/chat-selected.svg";
import MoreSelected from "../../assets/img/more-selected.svg";
import MyAdsSelected from "../../assets/img/my-ads-selected.svg";
import AddSell from "../../assets/img/add-sell.svg";
import MobileDropDown from "./MobileDropDown";
import { RootContext } from "../../context/RootContext";
import { user } from "../../API/User/index";
import toast from "react-hot-toast";
import { Form, Button, Image, Modal } from "react-bootstrap";
import Icofont from "react-icofont";
import { Link, NavLink, useHistory } from "react-router-dom";

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
    userProfilePicture,
    setUserProfilePicture
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
        toast.error(result.data.errors[0]);
        // toast.error('Login failed');
        setAlertMessage(result.data.errors[0]);
        setSignUpMessage(true);
        setAlertType("alert-danger");
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error(error);
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

              </Form.Group>

              <Form.Group className="relative">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={(event) => {
                  }}
                />
              </Form.Group>
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

const MobileFooter = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  let history = useHistory();
  const {
    currentUser,
    setCurrentUser,
    signUpMessage,
    setSignUpMessage,
  } = useContext(RootContext);

  return (
    <div className="overflow-x-hidden">
      <div className="bottom-nav css-de1c49">
        <Link to="/" className="generic-link Mui-selected css-4g4bsj">
          <Image src={HomeSelected} alt="" width="100%" height="18px" />
          <span className="generic-link Mui-selected css-1lnpzxd">Home</span>
        </Link>
        {localStorage.currentUser === undefined ? (
          <>
            {" "}
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Link className="css-4g4bsj" onClick={() => setModalShow(true)}>
              <Image src={MyAdsSelected} alt="" width="100%" height="18px" />
              <span className="css-1lnpzxd">My Ads</span>
            </Link>
          </>
        ) : (
          <>
            <button
              className="css-4g4bsj"
              onClick={() => history.push("/used-tractor/sell")}
            >
              <Image src={MyAdsSelected} alt="" width="100%" height="18px" />
              <span className="css-1lnpzxd">My Ads</span>
            </button>
          </>
        )}

        <div>
          <button
            className="bottom-nav-sell-blue"
            onClick={() => {
              if (currentUser === undefined || currentUser === null ){
                setModalShow(true)
              }
              else{
                history.push("/used-tractor/sell")
              }
            }}
          >
            <Image src={AddSell} alt="" width="100%" height="18px" />
          </button>

          <div className="sell-text"> Sell</div>
        </div>
        <Link to="/" className="css-4g4bsj" onClick={() => history.push("/login/")}>
          <Image src={ChatSelected} alt="" width="100%" height="18px" />
          <span className="css-1lnpzxd">Chat</span>
        </Link>
        <button
          className="css-4g4bsj"
          onClick={() => {
            setShow(true);
          }}
        >
          <Image src={MoreSelected} alt="" width="100%" height="18px" />
          <span className="css-1lnpzxd">More </span>
        </button>
        <MobileDropDown show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default MobileFooter;
