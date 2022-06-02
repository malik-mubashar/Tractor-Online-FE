import React from 'react';
import {Row, Col, Breadcrumb} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import BasicModal from '../UI-Components/BasicModal';
import VerticallyCenteredModal from '../UI-Components/VerticallyCenteredModal';
import ModalWithGrid from '../UI-Components/ModalWithGrid';
import SmallAndLargeModal from '../UI-Components/SmallAndLargeModal';
import CustomModal from '../UI-Components/CustomModal';
import Footer from '../Footer/Footer';

class Modals extends React.Component {
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
                            <h1>Modals</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Modals</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        {/* Basic Modal */}
                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Basic Modal</h5>
                                    </div>

                                    {/* File path: src/pages/UI-Components/BasicModal.js */}
                                    <BasicModal />
                                </div>
                            </div>
                        </Col>
                        {/* End Basic Modal */}

                        {/* Vertically Centered Modal */}
                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Vertically Centered Modal</h5>
                                    </div>

                                    {/* File path: src/pages/UI-Components/VerticallyCenteredModal.js */}
                                    <VerticallyCenteredModal />
                                </div>
                            </div>
                        </Col>
                        {/* End Vertically Centered Modal */}

                        {/* Modal With Grid */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Modal With Grid</h5>
                                    </div>

                                    {/* File path: src/pages/UI-Components/ModalWithGrid.js */}
                                    <ModalWithGrid />
                                </div>
                            </div>
                        </Col>
                        {/* End Modal With Grid */}

                        {/* Small And Large Modal */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Small and Large Modal</h5>
                                    </div>

                                    {/* File path: src/pages/UI-Components/SmallAndLargeModal.js */}
                                    <SmallAndLargeModal />
                                </div>
                            </div>
                        </Col>
                        {/* End Small And Large Modal */}

                        {/* Custom Modal */}
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Custom Modal</h5>
                                    </div>

                                    {/* File path: src/pages/UI-Components/CustomModal.js */}
                                    <CustomModal />
                                </div>
                            </div>
                        </Col>
                        {/* End Custom Modal */}
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

export default Modals;