import React from 'react';
import {Row, Col, Breadcrumb, Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';

class Alerts extends React.Component {
    state = {
        sideMenu: true
    };

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
                            <h1>Alerts</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Alerts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Rounded Alerts */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Rounded Alerts</h5>
                                    </div>
                                    {
                                        [
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((variant, idx) => (
                                            <Alert key={idx} variant={variant} className="rounded">
                                                This is a {variant} alert—check it out!
                                            </Alert>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Rounded Alerts */}

                    {/* Default Alerts */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Default Alerts</h5>
                                    </div>
                                    {
                                        [
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((variant, idx) => (
                                            <Alert key={idx} variant={variant}>
                                                This is a {variant} alert—check it out!
                                            </Alert>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Default Alerts */}
                    
                    {/* Link Alerts */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Link Alerts</h5>
                                    </div>
                                    {
                                        [
                                            'primary',
                                            'secondary',
                                            'success',
                                            'danger',
                                            'warning',
                                            'info',
                                            'light',
                                            'dark',
                                        ].map((variant, idx) => (
                                            <Alert key={idx} variant={variant}>
                                                This is a {variant} alert with{' '}
                                                <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                                                like.
                                            </Alert>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Link Alerts */}

                    {/* Additional content Alerts */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Additional content Alerts</h5>
                                    </div>
                                    <Alert variant="success">
                                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example
                                            text is going to run a bit longer so that you can see how spacing within an
                                            alert works with this kind of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice
                                            and tidy.
                                        </p>
                                    </Alert>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Additional content Alerts */}

                    {/* Dismissing Alerts */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Dismissing Alerts</h5>
                                    </div>

                                    <Alert dismissible variant="primary" className="rounded">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="secondary" className="rounded">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="success" className="rounded">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="danger">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="warning">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="info">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="light">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="dark">
                                        I am an alert and I can be dismissed!
                                    </Alert>

                                    <Alert dismissible variant="danger">
                                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                        Change this and that and try again. Duis mollis, est non commodo luctus,
                                        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
                                        consectetur purus sit amet fermentum.
                                    </Alert>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Dismissing Alerts */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Alerts;