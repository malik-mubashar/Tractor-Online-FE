import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
import SimplePieChart from '../../pages/Apex-Charts/pie-donuts-charts-components/SimplePieChart'; 
import SimpleDonutChart from '../../pages/Apex-Charts/pie-donuts-charts-components/SimpleDonutChart';
import UpdateDonutChart from '../../pages/Apex-Charts/pie-donuts-charts-components/UpdateDonutChart'; 
import MonochromePieChart from '../../pages/Apex-Charts/pie-donuts-charts-components/MonochromePieChart';


class PieDonutsCharts extends React.Component {
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
                            <Breadcrumb.Item active>Apex Pie and Donuts Charts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Apex pie and donuts charts area */}
                    <Row> 
                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Simple Pie Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/pie-donuts-charts-components/SimplePieChart.js */}
                                    <SimplePieChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Simple Donut Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/pie-donuts-charts-components/SimpleDonutChart.js */}
                                    <SimpleDonutChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Update Donut Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/pie-donuts-charts-components/UpdateDonutChart.js */}
                                    <UpdateDonutChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Monochrome Pie Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/pie-donuts-charts-components/MonochromePieChart.js */}
                                    <MonochromePieChart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Apex pie and donuts charts area */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default PieDonutsCharts;