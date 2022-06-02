import React from 'react';
import {Row, Col, Breadcrumb, ListGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';

class ListGroups extends React.Component {
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
                            <h1>List Groups</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>List Groups</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        {/* Basic List Groups */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Basic List Groups</h5>
                                    </div>

                                    <ListGroup>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        {/* End Basic List Groups */}

                        {/* Active Items List */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Active Items List</h5>
                                    </div>

                                    <ListGroup as="ul">
                                        <ListGroup.Item as="li" active>
                                            Cras justo odio
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item as="li" disabled>
                                            Morbi leo risus
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        {/* End Active Items List */}
                    </Row>

                    {/* Flush List */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title">Flush List</h5>
                            </div>

                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                    {/* End Flush List */}

                    <Row>
                        {/* Contextual Classes List */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Contextual Classes List</h5>
                                    </div>

                                    <ListGroup>
                                        <ListGroup.Item>No style</ListGroup.Item>
                                        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                                        <ListGroup.Item variant="success">Success</ListGroup.Item>
                                        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                                        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                                        <ListGroup.Item variant="info">Info</ListGroup.Item>
                                        <ListGroup.Item variant="light">Light</ListGroup.Item>
                                        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        {/* End Contextual Classes List */}

                        {/* Actions List */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Actions List</h5>
                                    </div>

                                    <ListGroup>
                                        <ListGroup.Item>No style</ListGroup.Item>
                                        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                        <ListGroup.Item action variant="secondary">
                                            Secondary
                                        </ListGroup.Item>
                                        <ListGroup.Item action variant="success">
                                            Success
                                        </ListGroup.Item>
                                        <ListGroup.Item action variant="danger">
                                            Danger
                                        </ListGroup.Item>
                                        <ListGroup.Item action variant="warning">
                                            Warning
                                        </ListGroup.Item>
                                        <ListGroup.Item action variant="info">
                                            Info
                                        </ListGroup.Item>
                                        <ListGroup.Item action variant="light">
                                            Light
                                        </ListGroup.Item>
                                        <ListGroup.Item action variant="dark">
                                            Dark
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        {/* End Actions List */}
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

export default ListGroups;