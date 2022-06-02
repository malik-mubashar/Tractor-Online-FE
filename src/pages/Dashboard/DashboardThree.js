import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Loader from '../../components/Common/Loader';
import PageViews from '../../components/DashboardThree/PageVisitStats/PageViews';
import NewVisitors from '../../components/DashboardThree/PageVisitStats/NewVisitors';
import TotalVisitors from '../../components/DashboardThree/PageVisitStats/TotalVisitors';
import VisitorsOverview from '../../components/DashboardThree/VisitorsOverview';
import RevenueByCountry from '../../components/DashboardThree/RevenueByCountry';
import LeadsStats from '../../components/DashboardThree/LeadsStats';
import SalesStatistics from '../../components/DashboardTwo/SalesStatistics';
import BounceRate from '../../components/DashboardThree/VisitorsActivities/BounceRate';
import NewSession from '../../components/DashboardThree/VisitorsActivities/NewSession';
import SessionDuration from '../../components/DashboardThree/VisitorsActivities/SessionDuration';
import NewVisits from '../../components/DashboardThree/VisitorsActivities/NewVisits';
import OpenInvoicesTable from '../../components/DashboardThree/OpenInvoicesTable';
import * as Icon from 'react-feather';


class DashboardThree extends React.Component {
    state = {
        sideMenu: true,
        loading: true
    };

    // Loading icon false after DOM loaded
    componentDidMount() {
        this.myInterval = setInterval(() => { 
            this.setState({ loading: false });
        }, 1000); 
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }
    
    render() {
        let loader = null;
        if (this.state.loading) {
            loader = <Loader message="Loading..." />
        }
        
        return (
            <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}
                
                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? 'hide-sidemenu' : ''}`}>
                    {/* Loader */}
                    {loader}
                    {/* End Loader */}

                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Dashboard</h1>
                            <Breadcrumb.Item to="/dashboard-three">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Dashboard v.3</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}
                    
                    <Row>
                        <Col lg={4}>
                            <div className="visitor-stats mb-4">
                                <h3>
                                    55,479
                                </h3>
                                <p>
                                    Page Views
                                    <Icon.TrendingUp 
                                        className="icon purple-text"
                                    />
                                    <span className="purple-text">50%</span>
                                </p>
                                {/* File path: src/components/DashboardThree/PageVisitStats/PageViews.js */}
                                <PageViews />
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="visitor-stats mb-4">
                                <h3>
                                    10,479
                                </h3>
                                <p>
                                    New Visitor
                                    <Icon.TrendingUp 
                                        className="icon primary-text"
                                    />
                                    <span className="primary-text">35%</span>
                                </p>
                                {/* File path: src/components/DashboardThree/PageVisitStats/NewVisitors.js */}
                                <NewVisitors />
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="visitor-stats mb-4">
                                <h3>
                                    76,479
                                </h3>
                                <p>
                                    Total Visitor
                                    <Icon.TrendingUp 
                                        className="icon success-text"
                                    />
                                    <span className="success-text">76%</span>
                                </p>
                                {/* File path: src/components/DashboardThree/PageVisitStats/TotalVisitors.js */}
                                <TotalVisitors />
                            </div>
                        </Col>
                    </Row>

                    {/* Visitors Overview */}
                    <div className="row">
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Visitors Overview</h5>
                                        <span className="day">This Week</span>
                                    </div>

                                    {/* File Path: src/components/DashboardThree/VisitorsOverview.js */}
                                    <VisitorsOverview />
                                </div>
                            </div>
                        </Col>
                    </div>
                    {/* End Visitors Overview */}

                    {/* Visitors Activities */}
                    <Row>
                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardThree/VisitorsActivities/BounceRate.js */}
                            <BounceRate />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardThree/VisitorsActivities/NewSession.js */}
                            <NewSession />
                        </Col>
 
                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardThree/VisitorsActivities/SessionDuration.js */}
                            <SessionDuration />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardThree/VisitorsActivities/NewVisits.js */}
                            <NewVisits />
                        </Col>
                    </Row>
                    {/* End Visitors Activities */}

                    {/* Revenue By Country and Leads Stats */}
                    <div className="row">
                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Revenue By Country</h5>
                                    </div>

                                    {/* File Path: src/components/DashboardThree/RevenueByCountry.js */}
                                    <RevenueByCountry />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Leads Stats</h5>
                                    </div>

                                    {/* File Path: src/components/DashboardThree/LeadsStats.js */}
                                    <LeadsStats />
                                </div>
                            </div>
                        </Col>
                    </div>
                    {/* End Revenue By Country and Leads Stats */}

                    {/* Open Invoices */}
                    <div className="row">
                        <Col lg={12}>
                            {/* File Path: src/components/DashboardThree/OpenInvoicesTable.js */}
                            <OpenInvoicesTable />
                        </Col>
                    </div>
                    {/* End Open Invoices */}

                    {/* Sales Statistics */}
                    <div className="row">
                        <Col lg={12}>
                            {/* File Path: src/components/DashboardTwo/SalesStatistics.js */}
                            <SalesStatistics />
                        </Col>
                    </div>
                    {/* End Sales Statistics */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default DashboardThree;