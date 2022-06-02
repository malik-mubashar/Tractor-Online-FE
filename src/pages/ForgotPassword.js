import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Form, Button, Image } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Logo image file path
import Logo from '../assets/img/logo.png';

class ForgotPassword extends React.Component {

    onForgotHandler = () => {
        this.props.history.push("/");
    }

    render() {
        return (
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
                                                <Icon.Facebook 
                                                    className="icon" 
                                                />
                                                Sign Up with Facebook
                                            </Link>
                                            <Link to="/" className="twi">
                                                <Icon.Twitter 
                                                    className="icon" 
                                                />
                                                Sign Up with Twitter
                                            </Link>
                                            <Link to="/" className="ema">
                                                <Icon.Mail 
                                                    className="icon" 
                                                />
                                                Sign Up with Email
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="form-content">
                                        <h1 className="heading">Forgot password</h1>
                                        <Form onSubmit={this.onForgotHandler}>
                                            <Form.Group>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>

                                            <div className="text-center">
                                                <Button variant="primary" type="submit">
                                                    Send the Reset Instruction
                                                </Button>

                                                <Link to="/login/" className="fp-link">Log In</Link>
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
    }
}

export default ForgotPassword;