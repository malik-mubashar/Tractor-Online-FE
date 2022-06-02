import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
import BasicLineChart from '../../pages/Apex-Charts/line-charts-components/BasicLineChart';
import DataLabelsChart from '../../pages/Apex-Charts/line-charts-components/DataLabelsChart';
import AnnotationsChart from '../../pages/Apex-Charts/line-charts-components/AnnotationsChart';
import GradientChart from '../../pages/Apex-Charts/line-charts-components/GradientChart';


class LineCharts extends React.Component {
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
                            <Breadcrumb.Item active>Apex Line Charts</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Apex basic line charts area */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Basic Line Chart
                                        </h5>
                                    </div>
                                    
                                    {/* File Path: src/pages/Apex-Charts/line-charts-components/BasicLineChart */}
                                    <BasicLineChart /> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Line with Data Labels Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/line-charts-components/DataLabelsChart */}
                                    <DataLabelsChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Annotations Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/line-charts-components/AnnotationsChart */}
                                    <AnnotationsChart />
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Gradient Chart
                                        </h5>
                                    </div>

                                    {/* File Path: src/pages/Apex-Charts/line-charts-components/GradientChart */}
                                    <GradientChart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Apex basic line charts area */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default LineCharts;