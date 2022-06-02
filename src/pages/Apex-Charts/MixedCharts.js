import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
import MixedLineColumnChart from '../../pages/Apex-Charts/mixed-charts-components/MixedLineColumnChart';
import MixedMultipleYAxisChart from '../../pages/Apex-Charts/mixed-charts-components/MixedMultipleYAxisChart';
import MixedLineAreaChart from '../../pages/Apex-Charts/mixed-charts-components/MixedLineAreaChart';
import MixedLineColumnAreaChart from '../../pages/Apex-Charts/mixed-charts-components/MixedLineColumnAreaChart';


class MixedCharts extends React.Component {
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
                            <Breadcrumb.Item active>Apex Mixed Charts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Apex mixed charts */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Mixed Line Column Chart
                                        </h5>
                                    </div>
                                    {/* File Path: src/pages/Apex-Charts/mixed-charts-components/MixedLineColumnChart */}
                                    <MixedLineColumnChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Mixed Multiple Y-Axis Chart
                                        </h5>
                                    </div>
                                    {/* File Path: src/pages/Apex-Charts/mixed-charts-components/MixedMultipleYAxisChart */}
                                    <MixedMultipleYAxisChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Mixed Line Area Chart
                                        </h5>
                                    </div>
                                    {/* File Path: src/pages/Apex-Charts/mixed-charts-components/MixedLineAreaChart */}
                                    <MixedLineAreaChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Mixed Line Column Area Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/mixed-charts-components/MixedLineColumnAreaChart */}
                                    <MixedLineColumnAreaChart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End apex mixed charts */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default MixedCharts;