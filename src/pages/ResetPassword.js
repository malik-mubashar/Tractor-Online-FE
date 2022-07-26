import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { user } from "../API/User/index";
import toast from "react-hot-toast";
import {useLocation, useHistory} from "react-router-dom";
import Icofont from "react-icofont";

const ResetPassword = () => {

  let history = useHistory();
  const search = useLocation().search;
  const accessToken = new URLSearchParams(search).get('access-token');
  const client = new URLSearchParams(search).get('client');
  const uid = new URLSearchParams(search).get('uid');

  useEffect(() => {
    if(search == ''){
      history.push('/login')
    }
  }, []);

  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

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

  const onResetHandler = async (e) => {
    if (password != confirmPassword) {
      setError("password not match");
      return;
    }
    e.preventDefault();
    const loadingToastId = toast.loading("Loading..!");


    try {
      const result = await user.resetPassword(password, confirmPassword, accessToken, client, uid);
      //success
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success(result.data.message);
        history.push('/login')
      }
      //error
      if (result.error === true) {
        toast.dismiss(loadingToastId);
        toast.error(result.data.errors[0]);
        history.push('/')
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
    }
  };
;

  return (
    <div className="auth-main-content auth-bg-image">
      <div className="d-table">
        <div className="d-tablecell">
          <div className="reset-auth-box">
            <Row>
              <Col md={12}>
                <div className="form-content">
                  <h1 className="heading">Reset Password</h1>
                  <Form>
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
                    <div className="text-center mt-2">
                      <Button variant="primary" className="mb-2" onClick={onResetHandler}>
                        Set Password
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
  );
};
export default ResetPassword;
