import React from 'react';
import {Row, Col, Breadcrumb, ProgressBar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';

class ProgressBars extends React.Component {
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
                            <h1>Progress Bars</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Progress Bars</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}
 
                    <Row>
                        {/* Default Progress Bar */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Default Progress Bar</h5>
                                    </div>

                                    <ProgressBar 
                                        variant="primary" 
                                        now={50} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        variant="secondary" 
                                        now={55} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        variant="success" 
                                        now={60} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        variant="warning" 
                                        now={65} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        variant="danger" 
                                        now={70} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        variant="info" 
                                        now={75} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        variant="dark" 
                                        now={80} 
                                        className="mt-3 radius-0"
                                    />
                                </div>
                            </div>
                        </Col>
                        {/* End Default Progress Bar */}

                        {/* Progress Bar With Label */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Progress Bar With Label</h5>
                                    </div>

                                    <ProgressBar 
                                        label={`${50}%`} 
                                        variant="primary" 
                                        now={50} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        label={`${55}%`} 
                                        variant="secondary" 
                                        now={55} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        label={`${60}%`} 
                                        variant="success" 
                                        now={60} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        label={`${65}%`} 
                                        variant="warning" 
                                        now={65} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        label={`${70}%`} 
                                        variant="danger" 
                                        now={70} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        label={`${75}%`} 
                                        variant="info" 
                                        now={75} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        label={`${80}%`} 
                                        variant="dark" 
                                        now={80} 
                                        className="mt-3 radius-0"
                                    />
                                </div>
                            </div>
                        </Col>
                        {/* End Progress Bar With Label */}

                        {/* Striped Progress Bar */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Striped Progress Bar</h5>
                                    </div>

                                    <ProgressBar 
                                        striped 
                                        variant="primary" 
                                        now={50} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        striped 
                                        variant="secondary" 
                                        now={55} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        striped 
                                        variant="success" 
                                        now={60} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        striped 
                                        variant="warning" 
                                        now={65} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        striped 
                                        variant="danger" 
                                        now={70} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        striped 
                                        variant="info" 
                                        now={75} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        striped 
                                        variant="dark" 
                                        now={80} 
                                        className="mt-3 radius-0"
                                    />
                                </div>
                            </div>
                        </Col>
                        {/* End Striped Progress Bar */}

                        {/* Animated Progress Bar */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Animated Progress Bar</h5>
                                    </div>

                                    <ProgressBar 
                                        animated 
                                        variant="primary" 
                                        now={50} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        animated 
                                        variant="secondary" 
                                        now={55} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        animated 
                                        variant="success" 
                                        now={60} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        animated 
                                        variant="warning" 
                                        now={65} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        animated 
                                        variant="danger" 
                                        now={70} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        animated 
                                        variant="info" 
                                        now={75} 
                                        className="mt-3 radius-0"
                                    />
                                    <ProgressBar 
                                        animated 
                                        variant="dark" 
                                        now={80} 
                                        className="mt-3 radius-0"
                                    />
                                </div>
                            </div>
                        </Col>
                        {/* End Animated Progress Bar */}

                        {/* Stacked Progress Bar */}
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Stacked Progress Bar</h5>
                                    </div>

                                    <ProgressBar className="mt-3 radius-0">
                                        <ProgressBar 
                                            striped 
                                            variant="primary" 
                                            now={25} key={1} 
                                        />
                                        <ProgressBar 
                                            variant="secondary" 
                                            now={15} 
                                            key={2} 
                                        />
                                        <ProgressBar 
                                            striped 
                                            variant="success" 
                                            now={10} 
                                            key={3} 
                                        />
                                    </ProgressBar>

                                    <ProgressBar className="mt-3 radius-0">
                                        <ProgressBar 
                                            striped 
                                            variant="success" 
                                            now={30} key={1} 
                                        />
                                        <ProgressBar 
                                            variant="warning" 
                                            now={20} 
                                            key={2} 
                                        />
                                        <ProgressBar 
                                            striped 
                                            variant="danger" 
                                            now={15} 
                                            key={3} 
                                        />
                                    </ProgressBar>

                                    <ProgressBar className="mt-3 radius-0">
                                        <ProgressBar 
                                            striped 
                                            variant="secondary" 
                                            now={35} key={1} 
                                        />
                                        <ProgressBar 
                                            variant="success" 
                                            now={25} 
                                            key={2} 
                                        />
                                        <ProgressBar 
                                            striped 
                                            variant="warning" 
                                            now={15} 
                                            key={3} 
                                        />
                                    </ProgressBar>

                                    <ProgressBar className="mt-3 radius-0">
                                        <ProgressBar 
                                            striped 
                                            variant="success" 
                                            now={40} key={1} 
                                        />
                                        <ProgressBar 
                                            variant="warning" 
                                            now={30} 
                                            key={2} 
                                        />
                                        <ProgressBar 
                                            striped 
                                            variant="danger" 
                                            now={20} 
                                            key={3} 
                                        />
                                    </ProgressBar>

                                    <ProgressBar className="mt-3 radius-0">
                                        <ProgressBar 
                                            striped 
                                            variant="warning" 
                                            now={40} key={1} 
                                        />
                                        <ProgressBar 
                                            variant="danger" 
                                            now={35} 
                                            key={2} 
                                        />
                                        <ProgressBar 
                                            striped 
                                            variant="info" 
                                            now={25} 
                                            key={3} 
                                        />
                                    </ProgressBar>
                                </div>
                            </div>
                        </Col>
                        {/* End Stacked Progress Bar */}
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

export default ProgressBars;