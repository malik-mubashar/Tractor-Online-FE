import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";
// Logo image file path
import Logo from "../assets/img/logo.png";
import { user } from "../API/User/index";
import { RootContext } from "../context/RootContext";
import toast from "react-hot-toast";
import Icofont from 'react-icofont';

const SignUp = () => {
  const { currentUser, setCurrentUser, setSignUpMessage } = useContext(RootContext);
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [fullName, setFullName] = useState();

  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  let history = useHistory();

  const createUserAccount = async (e) => {
    // e.preventDefault()
    if (password != confirmPassword) {
      setError("password not match");
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

      console.log("signUp result Api", result);

      //success
      if (result.error === false) {
      	toast.dismiss(loadingToastId);

        // toast.success('wellcome')
        setSignUpMessage(true)
        history.push('/login')
        // setCurrentUser({
        //   ...result.data.data,
        //   accessToken: result.headers["access-token"],
        //   client: result.headers["client"],
        //   uid: result.headers["uid"]
        // });

        // localStorage.setItem(
        //   "currentUser",
        //   JSON.stringify({
        //     ...result.data.data,
        //     accessToken: result.headers["access-token"],
        //     client: result.headers["client"],
        //     uid: result.headers["uid"]
        //   })
        // );
        // localStorage.setItem("headers", JSON.stringify(result.headers));
        // history.push("/dashboard");
      }

      //error
      if (result.error === true) {
        toast.dismiss(loadingToastId);
        toast.error("signup failed");

        console.error(result.data.errors.full_messages);
        alert("Error user not create");
      }
    } catch (error) {
      toast.dismiss(loadingToastId);

      console.error(error);
    }
  };

    const confirmTogglePassword =()=>{
      if(confirmPasswordType==="password")
      {
       setConfirmPasswordType("text")
       return;
      }
      setConfirmPasswordType("password")
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
    <>
      <div className="auth-main-content auth-bg-image">
        <div className="d-table">
          <div className="d-tablecell">
            <div className="auth-box">
              <Row>
                <Col md={6}>
                  <div className="form-left-content">
                    <div className="auth-logo">
                      <Image src={Logo} alt="Logo" />
                    </div>

                    <div className="login-links">
                      <Link to="/" className="fb">
                        <Icon.Facebook className="icon" />
                        Sign Up with Facebook
                      </Link>
                      <Link to="/" className="twi">
                        <Icon.Twitter className="icon" />
                        Sign Up with Twitter
                      </Link>
                      <Link to="/" className="ema">
                        <Icon.Mail className="icon" />
                        Sign Up with Email
                      </Link>
                      <Link to="/" className="linkd">
                        <Icon.Linkedin className="icon" />
                        Sign Up with Linkedin
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-content">
                    <h1 className="heading">Sign Up</h1>
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
                          type={passwordType}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
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

                      <Form.Group className="relative">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type={confirmPasswordType}
                          onChange={(event) => {
                            setConfirmPassword(event.target.value);
                          }}
                        />
                        <i className="password-icons cursor-pointer" onClick={confirmTogglePassword}>
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
                      </i>
                      </Form.Group>
                      {error ? (
                        <span className="text-danger">{error}</span>
                      ) : (
                        ""
                      )}
                      <div className="text-center">
                        <Button variant="primary" className="mb-2" onClick={createUserAccount}>
                          Sign Up
                        </Button>
                        <Link to="/login/" className="">
                          Already have an Account?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
