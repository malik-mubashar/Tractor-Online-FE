import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { user } from "../API/User/index";
import toast from "react-hot-toast";

const ForgotPassword = () => {

  const [alertMessage, setAlertMessage] = useState("");
  const [alertShow, setAlertShow] = useState(false);
  const [alertType, setAlertType] = useState("alert-success");
  const [email, setEmail] = useState();

  const onForgotHandler = async (e) => {
    e.preventDefault();
    const loadingToastId = toast.loading("Loading..!");
    var url = 'https://tractoronline.com.pk/reset-password'
    if (window.location.host === "localhost:3000"){
      url = 'http://localhost:3000/reset-password'
    }

    try {
      const result = await user.forgotPassword(email, url);
      //success
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success("Email Sent");
        setAlertType("alert-success");
        setAlertMessage(result.data.message)
        setAlertShow(true)
      }
      //error
      if (result.error === true) {
        toast.dismiss(loadingToastId);
        setAlertMessage(result.data.errors[0]);
        setAlertShow(true)
        setAlertType("alert-danger");
        setAlertMessage(result.data.errors[0])
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
    }
  };
;

  return (
    <div className="auth-main-content auth-bg-image">
      {alertShow ?
        <div class={`alert ${alertType} alert-dismissible fade show mt-2`} role="alert">
          {alertMessage}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={ () => {setAlertShow(false)}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        :
        null
      }
      <div className="d-table">
        <div className="d-tablecell">
          <div className="reset-auth-box">
            <Row>
              <Col md={12}>
                <div className="form-content">
                  <h1 className="heading">Forgot password</h1>
                  <Form>
                    <Form.Group>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>

                    <div className="text-center mt-2">
                      <Button variant="primary" onClick={onForgotHandler}>
                        Send the Reset Instruction
                      </Button>

                      <Link to="/login" className="fp-link">
                        Log In
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
export default ForgotPassword;
