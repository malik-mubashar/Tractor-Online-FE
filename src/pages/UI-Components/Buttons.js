import React from 'react';
import {Row, Col, Breadcrumb, ButtonToolbar, Button, ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';

class Buttons extends React.Component {
    state = {
        sideMenu: true
    };
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render(){
        return(
            <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}

                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? 'hide-sidemenu' : ''}`}>
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Buttons</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Buttons</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}
 
                    {/* Default Buttons */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Default Buttons</h5>
                                    </div>

                                    <ButtonToolbar>
                                        <Button variant="primary" className="mt-2 mr-2">Primary</Button>
                                        <Button variant="secondary" className="mt-2 mr-2">Secondary</Button>
                                        <Button variant="success" className="mt-2 mr-2">Success</Button>
                                        <Button variant="warning" className="mt-2 mr-2">Warning</Button>
                                        <Button variant="danger" className="mt-2 mr-2">Danger</Button>
                                        <Button variant="info" className="mt-2 mr-2">Info</Button>
                                        <Button variant="light" className="mt-2 mr-2">Light</Button>
                                        <Button variant="dark" className="mt-2 mr-2">Dark</Button>
                                        <Button variant="link" className="mt-2 mr-2">Link</Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Default Buttons */}

                    {/* Rounded Buttons */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Rounded Buttons</h5>
                                    </div>
                                    
                                    <ButtonToolbar>
                                        <Button variant="primary" className="rounded mt-2 mr-2">Primary</Button>
                                        <Button variant="secondary" className="rounded mt-2 mr-2">Secondary</Button>
                                        <Button variant="success" className="rounded mt-2 mr-2">Success</Button>
                                        <Button variant="warning" className="rounded mt-2 mr-2">Warning</Button>
                                        <Button variant="danger" className="rounded mt-2 mr-2">Danger</Button>
                                        <Button variant="info" className="rounded mt-2 mr-2">Info</Button>
                                        <Button variant="light" className="rounded mt-2 mr-2">Light</Button>
                                        <Button variant="dark" className="rounded mt-2 mr-2">Dark</Button>
                                        <Button variant="link" className="rounded mt-2 mr-2">Link</Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Rounded Buttons */}

                    {/* Outline Buttons */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Outline Buttons</h5>
                                    </div>

                                    <ButtonToolbar>
                                        <Button variant="outline-primary" className="mt-2 mr-2">Primary</Button>
                                        <Button variant="outline-secondary" className="mt-2 mr-2">Secondary</Button>
                                        <Button variant="outline-success" className="mt-2 mr-2">Success</Button>
                                        <Button variant="outline-warning" className="mt-2 mr-2">Warning</Button>
                                        <Button variant="outline-danger" className="mt-2 mr-2">Danger</Button>
                                        <Button variant="outline-info" className="mt-2 mr-2">Info</Button>
                                        <Button variant="outline-light" className="mt-2 mr-2">Light</Button>
                                        <Button variant="outline-dark" className="mt-2 mr-2">Dark</Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Outline Buttons */}

                    {/* Outline Rounded Buttons */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Outline Rounded Buttons</h5>
                                    </div>

                                    <ButtonToolbar>
                                        <Button variant="outline-primary" className="rounded mt-2 mr-2">Primary</Button>
                                        <Button variant="outline-secondary" className="rounded mt-2 mr-2">Secondary</Button>
                                        <Button variant="outline-success" className="rounded mt-2 mr-2">Success</Button>
                                        <Button variant="outline-warning" className="rounded mt-2 mr-2">Warning</Button>
                                        <Button variant="outline-danger" className="rounded mt-2 mr-2">Danger</Button>
                                        <Button variant="outline-info" className="rounded mt-2 mr-2">Info</Button>
                                        <Button variant="outline-light" className="rounded mt-2 mr-2">Light</Button>
                                        <Button variant="outline-dark" className="rounded mt-2 mr-2">Dark</Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Outline Rounded Buttons */}

                    {/* Button Sizes */}
                    <Row>
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Button Sizes</h5>
                                    </div>
                                    <h6 className="mt-3 mb-0">Large Button</h6>
                                    <ButtonToolbar>
                                        <Button variant="primary" size="lg" className="mt-2 mr-2 rounded-0">
                                            Large Button
                                        </Button>

                                        <Button variant="success" size="lg" className="mt-2 mr-2">
                                            Large Button
                                        </Button>

                                        <Button variant="secondary" size="lg" className="mt-2 mr-2 rounded-pill">
                                            Large Button
                                        </Button>
                                    </ButtonToolbar>

                                    <h6 className="mt-3 mb-0">Small Button</h6>
                                    <ButtonToolbar>
                                        <Button variant="primary" size="md" className="mt-2 mr-2 rounded-0">
                                            Small Button
                                        </Button>

                                        <Button variant="success" size="md" className="mt-2 mr-2">
                                            Small Button
                                        </Button>

                                        <Button variant="secondary" size="md" className="mt-2 mr-2 rounded-pill">
                                            Small Button
                                        </Button>
                                    </ButtonToolbar>

                                    <h6 className="mt-3 mb-0">Extra Small Button</h6>
                                    <ButtonToolbar>
                                        <Button variant="primary" size="xs" className="mt-2 mr-2 rounded-0">
                                            Extra Small Button
                                        </Button>

                                        <Button variant="success" size="xs" className="mt-2 mr-2">
                                            Extra Small Button
                                        </Button>

                                        <Button variant="secondary" size="xs" className="mt-2 mr-2 rounded-pill">
                                            Extra Small Button
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>

                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header mb-3">
                                        <h5 className="card-title">Block Buttons</h5>
                                    </div>

                                    <Button variant="primary" size="lg" block className="mt-3 rounded-pill">
                                        Block level button
                                    </Button>

                                    <Button variant="success" size="lg" block className="mt-3 rounded-pill">
                                        Block level button
                                    </Button>

                                    <Button variant="secondary" size="lg" block className="mt-3 rounded-pill">
                                        Block level button
                                    </Button>

                                    <Button variant="outline-info" size="lg" block className="mt-3 rounded-pill">
                                        Block level button
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Button Sizes */}
 
                    {/* State Button */}
                    <Row>
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">State Button</h5>
                                    </div>

                                    <ButtonToolbar>
                                        <Button variant="primary" size="lg" className="mt-2 mr-2 rounded-pill" active>
                                            Primary Button
                                        </Button>

                                        <Button variant="secondary" size="lg" className="mt-2 mr-2 rounded-pill" active>
                                            Button
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>

                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Disabled State Button</h5>
                                    </div>

                                    <ButtonToolbar>
                                        <Button variant="primary" size="lg" className="mt-2 mr-2 rounded-pill" disabled>
                                            Primary button
                                        </Button>

                                        <Button variant="secondary" size="lg" className="mt-2 mr-2 rounded-pill" disabled>
                                            Button
                                        </Button>

                                        <Button href="#" variant="secondary" size="lg" className="mt-2 mr-2 rounded-pill" disabled>
                                            Link
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End State Button */}

                    {/* Button Groups */}
                    <Row>
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Button Groups</h5>
                                    </div>

                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="primary">Left</Button>
                                        <Button variant="primary">Middle</Button>
                                        <Button variant="primary">Right</Button>
                                    </ButtonGroup>

                                    <h6 className="mt-4">Button toolbar</h6>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2" aria-label="First group">
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                    </ButtonGroup>

                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                        <Button>5</Button>
                                        <Button>6</Button>
                                        <Button>7</Button>
                                    </ButtonGroup>

                                    <ButtonGroup aria-label="Third group">
                                        <Button>8</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>

                                    <h6 className="mt-4">Sizing</h6>
                                    <ButtonGroup size="lg">
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                    <br />
                                    <ButtonGroup className="mt-3">
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                    <br />
                                    <ButtonGroup size="sm" className="mt-3">
                                        <Button>Left</Button>
                                        <Button>Middle</Button>
                                        <Button>Right</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </Col>

                        <Col xl="6">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Nesting Groups</h5>
                                    </div>

                                    <h6>Nesting</h6>
                                    <ButtonGroup>
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>

                                    <h6 className="mt-4">Vertical variation</h6>
                                    <ButtonGroup vertical>
                                        <Button>Button</Button>
                                        <Button>Button</Button>
                                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                        </DropdownButton>
                                        <Button>Button</Button>
                                        <Button>Button</Button>
                                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Outline Button Groups */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Buttons;