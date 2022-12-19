import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import { user } from "../API/User/index";
// Logo image file path
import Logo from "../assets/img/logo.png";
import { RootContext } from "../context/RootContext";
import toast from "react-hot-toast";
import Icofont from 'react-icofont';
import Cookies from 'universal-cookie';
import BootstrapSwitchButton from "bootstrap-switch-button-react";


const Login = () => {
	const cookies = new Cookies();

  const { currentUser, setCurrentUser, signUpMessage, setSignUpMessage,userProfilePicture, setUserProfilePicture } = useContext(RootContext);
  const [alertMessage, setAlertMessage]  = useState('Confirmation Mail mail sent to your Email Address. Kindly Confirm Your email to continue..')
  const [alertType, setAlertType] = useState('alert-success')

	const [signInWithPhone, setSignInWithPhone] = useState(true);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState();
  let history = useHistory();

  const handlePersonalDetail = async (currentUser) => {
    const loadingToastId = toast.loading("Loading..!");

    const result = await user.findUser(currentUser);
    if (result.error === false) {
      toast.dismiss(loadingToastId);
      localStorage.setItem(
        "userProfilePicture",
        JSON.stringify(result.data.profile_path || null)
      );
      setUserProfilePicture(result.data.profile_path);
    }
  };

  const onLoginHandler = async (e) => {
		e.preventDefault();
		const loadingToastId = toast.loading("Loading..!");

    try {
			const result = await user.login(phone,email, password);
			debugger;
      //success
			if (result.error === false) {
				toast.dismiss(loadingToastId);
				toast.success('welcome')
				let userRoles = [];
				result.data.role.forEach((item) => {
					userRoles.push(item.name);
				})
        setCurrentUser({
          ...result.data.data,
          accessToken: result.headers["access-token"],
          client: result.headers["client"],
					uid: result.headers["uid"],
					roles:userRoles
        });

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            ...result.data.data,
            accessToken: result.headers["access-token"],
            client: result.headers["client"],
						uid: result.headers["uid"],
						roles:userRoles

          })
        );
        if (userProfilePicture == null) {
          handlePersonalDetail({
            ...result.data.data,
            accessToken: result.headers["access-token"],
            client: result.headers["client"],
            uid: result.headers["uid"],
            roles: userRoles,
          });
        }

				if (cookies.get('placeAdClicked') == 'true') {
					cookies.remove('placeAdClicked')
					history.push("/sell");
				} else {
					if (userRoles.indexOf('admin')>-1) {
						history.push("/dashboard");
					} else {
						history.push("/");
					}
				}
        setSignUpMessage(false)
      }

      //error
			if (result.error === true) {
				toast.dismiss(loadingToastId);
				// toast.error('Login failed');
        setAlertMessage(result.data.errors[0])
        setAlertType('alert-danger')
        setSignUpMessage(true)
      }
		} catch (error) {
			toast.dismiss(loadingToastId);

      console.error(error);
    }
  };

  const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
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
    <div className="auth-main-content auth-bg-image">
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
									<div className="d-flex justify-content-between">
										<h1 className="heading">Sign In</h1>
										<div className="login-form" >
											<BootstrapSwitchButton
											className="col-md-8 d-flex"
											checked={false}
											onstyle="warning"
											offstyle="info"
											onlabel="Phone"
											offlabel="Email"
												onChange={(checked) => {
													if (checked) {
														setSignInWithPhone(!signInWithPhone);
														setPhone(null) 
													} else {
														setSignInWithPhone(!signInWithPhone);
														setEmail(null)
													}
												}
											}
										/>
										</div>
									</div>
									<Form>
										{signInWithPhone ?
											<Form.Group>
												<Form.Label>Phone</Form.Label>
												<Form.Control
													type="phone"
													onChange={(event) => setPhone(event.target.value)}
												/>
											</Form.Group>
											:
											<Form.Group>
												<Form.Label>Email address</Form.Label>
												<Form.Control
													type="email"
													onChange={(event) => setEmail(event.target.value)}
												/>
											</Form.Group>
											
										}
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
                        className="mb-2 mt-4"
                        variant="primary"
                        type="submit"
                        onClick={onLoginHandler}
                      >
                        Log In
                      </Button>
                      <Link to="/signup/">
                        Dont Have an Account?
                      </Link>
                      <Link to="/forgot-password/" className="fp-link">
                        Forgot Password?
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
  );
};
export default Login;
