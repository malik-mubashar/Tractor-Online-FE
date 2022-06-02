import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
import BasicAreaChart from '../../pages/Apex-Charts/area-charts-components/BasicAreaChart';
import SplineAreaChart from '../../pages/Apex-Charts/area-charts-components/SplineAreaChart';
import DatetimeXAxisChart from '../../pages/Apex-Charts/area-charts-components/DatetimeXAxisChart';
import NegativeChart from '../../pages/Apex-Charts/area-charts-components/NegativeChart';


class AreaCharts extends React.Component {
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
                            <h1>Apex Charts</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Apex Area Charts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Apex area charts */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Basic Area Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/area-charts-components/BasicAreaChart */}
                                    <BasicAreaChart /> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Spline Area Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/area-charts-components/SplineAreaChart */}
                                    <SplineAreaChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Datetime X-Axis Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/area-charts-components/DatetimeXAxisChart */}
                                    <DatetimeXAxisChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Negative Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/area-charts-components/NegativeChart */}
                                    <NegativeChart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End apex area charts */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default AreaCharts;