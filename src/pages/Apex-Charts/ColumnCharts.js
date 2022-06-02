import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
import BasicColumnChart from '../../pages/Apex-Charts/column-charts-components/BasicColumnChart';
import StackedColumnsChart from '../../pages/Apex-Charts/column-charts-components/StackedColumnsChart';
import NegativeValuesChart from '../../pages/Apex-Charts/column-charts-components/NegativeValuesChart';
import DistributedColumnsChart from '../../pages/Apex-Charts/column-charts-components/DistributedColumnsChart';


class ColumnCharts extends React.Component {
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
                            <Breadcrumb.Item active>Apex Column Charts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Apex column charts */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Basic Column Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/column-charts-components/BasicColumnChart */}
                                    <BasicColumnChart /> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Stacked Columns Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/column-charts-components/StackedColumnsChart */}
                                    <StackedColumnsChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Negative Values Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/column-charts-components/NegativeValuesChart */}
                                    <NegativeValuesChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Distributed Columns Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/column-charts-components/DistributedColumnsChart */}
                                    <DistributedColumnsChart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End apex column charts */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default ColumnCharts;