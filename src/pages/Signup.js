import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";
// Logo image file path
import Logo from "../assets/img/logo.png";
import { user } from "../API/User/index";
import {  toast } from 'react-toastify';
import {RootContext} from "../context/RootContext";


const SignUp = () => {
	const { currentUser,setCurrentUser } = useContext(RootContext);

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
		try {
			debugger;
			console.log(email, password, confirmPassword,fullName)
			const result = await user.signUp(email, password, confirmPassword, fullName);
			debugger;
			console.log('signUp result Api', result);

			//success
			if (result.error === false) {
				toast.success("Wow so easy registered!")
				setCurrentUser(result.data)
				localStorage.setItem("currentUser", JSON.stringify(result.data));
				history.push("/dashboard")
			}

			//error
			if (result.error === true) {
				console.error(result.data.errors.full_messages)
				alert("Error user not create");
			}

		} catch (error) {
			debugger;
			console.error(error);
		}
  };

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
                          type="email"
                          onChange={(event) => {
                            setFullName(event.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(event) => {
                            setConfirmPassword(event.target.value);
                          }}
                        />
                      </Form.Group>
                      {error ? (
                        <span className="text-danger">{error}</span>
                      ) : (
                        ""
                      )}
                      <div className="text-center">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={createUserAccount}
                        >
                          Sign Up
                        </Button>
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
