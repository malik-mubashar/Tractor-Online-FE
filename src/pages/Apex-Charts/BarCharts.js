import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
import BasicBarChart from '../../pages/Apex-Charts/bar-charts-components/BasicBarChart';
import GroupedBarChart from '../../pages/Apex-Charts/bar-charts-components/GroupedBarChart';
import StackedBarChart from '../../pages/Apex-Charts/bar-charts-components/StackedBarChart';
import BarWithNegativeValuesChart from '../../pages/Apex-Charts/bar-charts-components/BarWithNegativeValuesChart';

class BarCharts extends React.Component {
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
                            <Breadcrumb.Item active>Apex Bar Charts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Apex Bar charts area */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Basic Bar Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/bar-charts-components/BasicBarChart */}
                                    <BasicBarChart /> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Grouped Bar Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/bar-charts-components/GroupedBarChart */}
                                    <GroupedBarChart /> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Stacked Bar Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/bar-charts-components/StackedBarChart */}
                                    <StackedBarChart /> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Bar With Negative Values Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/bar-charts-components/BarWithNegativeValuesChart */}
                                    <BarWithNegativeValuesChart /> 
                                </div>
                            </div>
                        </Col> 
                    </Row>
                    {/* End Apex Bar charts */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default BarCharts;