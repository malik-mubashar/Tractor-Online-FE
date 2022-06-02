import React from 'react';
import {Row, Col, Breadcrumb, Button, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer'

class ProfileSettings extends React.Component {
    state = {
        sideMenu: true
    };

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        return (
            <div className="page-wrapper"> 
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}
                
                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? 'hide-sidemenu' : ''}`}>
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Profile Settings</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Profile Settings</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Profile Settings */}
                    <Row>
                        <Col lg={12}>
                            <div className="profile-settings-form mb-3">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Upload New Picture</Form.Label>
                                        <Form.Control 
                                            type="file" 
                                            placeholder="" 
                                            className="form-control"
                                        />
                                        <Form.Text className="text-muted">
                                            Picture size 80 x 80 pixels.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows="3"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Language</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Birthday Date</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                        />
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                        <Button variant="primary" type="submit">
                                            Update Settings
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    {/* End Profile Settings */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default ProfileSettings;