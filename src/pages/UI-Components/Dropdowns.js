import React from 'react';
import {Row, Col, Breadcrumb, Dropdown, ButtonGroup, Button, ButtonToolbar, DropdownButton, SplitButton} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';

class Dropdowns extends React.Component {
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
                            <h1>Dropdowns</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Dropdowns</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col xl={12}>
                            {/* Single Button Dropdowns */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Single Button Dropdowns</h5>
                                    </div>

                                    <Dropdown className="d-inline-block mr-2 mt-2">
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            Primary
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block mr-2 mt-2">
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Success
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block mr-2 mt-2">
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Secondary
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block mr-2 mt-2">
                                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                                            Info
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            {/* End Single Button Dropdowns */}

                            {/* Split Button Dropdowns */}
                            <div className="card mb-4">
                                <div className="card-body todo-list">
                                    <div className="card-header">
                                        <h5 className="card-title">Split Button Dropdowns</h5>
                                    </div>

                                    <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mt-2">
                                        <Button variant="primary">Primary</Button>
                                        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mt-2">
                                        <Button variant="success">Success</Button>
                                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown as={ButtonGroup} className="d-inline-block mr-2 mt-2">
                                        <Button variant="secondary">Secondary</Button>
                                        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            {/* End Split Button Dropdowns */}
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            {/* Button Sizing */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Button Sizing</h5>
                                    </div>

                                    <ButtonToolbar className="d-inline-block mr-2 mt-2">
                                        {[DropdownButton].map((DropdownType, idx) => (
                                            <DropdownType
                                                size="lg"
                                                title="Drop small"
                                                id={`dropdown-button-drop-${idx}`}
                                                key={idx}
                                            >
                                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </DropdownType>
                                        ))}
                                    </ButtonToolbar>

                                    <ButtonToolbar className="d-inline-block mr-2 mt-2">
                                        {[SplitButton].map((DropdownType, idx) => (
                                            <DropdownType
                                                size="lg"
                                                title="Drop small"
                                                id={`dropdown-button-drop-${idx}`}
                                                key={idx}
                                            >
                                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </DropdownType>
                                        ))}
                                    </ButtonToolbar>
                                    
                                    <ButtonToolbar className="d-inline-block mr-2 mt-2">
                                        {[DropdownButton].map((DropdownType, idx) => (
                                            <DropdownType
                                                size="sm"
                                                variant="secondary"
                                                title="Drop small"
                                                id={`dropdown-button-drop-${idx}`}
                                                key={idx}
                                            >
                                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </DropdownType>
                                        ))}
                                    </ButtonToolbar>

                                    <ButtonToolbar className="d-inline-block mr-2 mt-2">
                                        {[SplitButton].map((DropdownType, idx) => (
                                            <DropdownType
                                                size="sm"
                                                variant="secondary"
                                                title="Drop small"
                                                id={`dropdown-button-drop-${idx}`}
                                                key={idx}
                                            >
                                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </DropdownType>
                                        ))}
                                    </ButtonToolbar>
                                </div>
                            </div>
                            {/* End Button Sizing */}

                            {/* Drop Directions */}                   
                            <div className="card mb-4">
                                <div className="card-body todo-list">
                                    <div className="card-header">
                                        <h5 className="card-title">Drop Directions</h5>
                                    </div>
 
                                    <ButtonToolbar>
                                        {['up', 'down', 'left', 'right'].map(direction => (
                                            <DropdownButton
                                                drop={direction}
                                                variant="secondary"
                                                title={` Drop ${direction} `}
                                                id={`dropdown-button-drop-${direction}`}
                                                key={direction} 
                                                className="mr-2 mt-2"
                                            >
                                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                        ))}
                                    </ButtonToolbar>
                                </div>
                            </div>
                            {/* End Drop Directions */}  
                        </Col>
                    </Row>

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Dropdowns;