import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import ThisYearSales from '../../components/Dashboard/ThisYearSales';
import ThisMonthSales from '../../components/Dashboard/ThisMonthSales';
import TrendingProduct from '../../components/Dashboard/TrendingProduct';
import SalesByCountries from '../../components/Dashboard/SalesByCountries';
import LastWeekSales from '../../components/Dashboard/LastWeekSales';
import TopRatedProducts from '../../components/Dashboard/TopRatedProducts';
import Tickets from '../../components/Dashboard/Tickets';
import ProductCategories from '../../components/Dashboard/ProductCategories';
import UserActivities from '../../components/Dashboard/UserActivities';
import NewUsers from '../../components/Dashboard/NewUsers';
import PaymentsDone from '../../components/Dashboard/Payments/PaymentsDone';
import PaymentsDue from '../../components/Dashboard/Payments/PaymentsDue';
import PaymentsWithdraw from '../../components/Dashboard/Payments/PaymentsWithdraw';
import BestSellers from '../../components/Dashboard/BestSellers';
import MapContainer from '../../components/MapContainer';
import MonthlySales from '../../components/Dashboard/Sales/MonthlySales';
import TotalOrders from '../../components/Dashboard/Sales/TotalOrders';
import PendingOrders from '../../components/Dashboard/Sales/PendingOrders';
import CompletedOrders from '../../components/Dashboard/Sales/CompletedOrders';
import Loader from '../../components/Common/Loader';
import VisitorStats from '../../components/Dashboard/VisitorStats';

class Dashboard extends React.Component {
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
                            <Breadcrumb.Item to="/dashboard">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Dashboard v.1</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/MonthlySales.js */}
                            <MonthlySales />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/TotalOrders.js */}
                            <TotalOrders />
                        </Col>
 
                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/CompletedOrders.js */}
                            <CompletedOrders />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/PendingOrders.js */}
                            <PendingOrders />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            {/* File path: src/components/Dashboard/ThisYearSales.js */}
                            <ThisYearSales />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={5}>
                            {/* File path: src/components/Dashboard/SalesByCountries.js */}
                            <SalesByCountries />
                        </Col>

                        <Col lg={7}>
                            {/* File path: src/components/Dashboard/TrendingProduct.js */}
                            <TrendingProduct />
                        </Col>
                        
                        <Col lg={12}>
                            {/* File path: src/components/Dashboard/ThisMonthSales.js */}
                            <ThisMonthSales />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/LastWeekSales.js */}
                            <LastWeekSales />
                        </Col>
                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/TopRatedProducts.js */}
                            <TopRatedProducts />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/Tickets.js */}
                            <Tickets />
                        </Col>

                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/ProductCategories.js */}
                            <ProductCategories />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/UserActivities.js */}
                            <UserActivities />
                        </Col>

                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/NewUsers.js */}
                            <NewUsers />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            {/* File path: src/components/Deshboard/Payments/PaymentsDone.js */}
                            <PaymentsDone />
                        </Col>

                        <Col lg={4}>
                            {/* File path: src/components/Deshboard/Payments/PaymentsDue.js */}
                            <PaymentsDue />
                        </Col>

                        <Col lg={4}>
                            {/* File path: src/components/Deshboard/Payments/PaymentsWithdraw.js */}
                            <PaymentsWithdraw />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            {/* File path: src/components/Dashboard/VisitorStats.js */}
                            <VisitorStats />
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col lg={6}>
                            {/* File path: src/components/Dashboard/BestSellers.js */}
                            <BestSellers />
                        </Col>
                        
                        <Col lg={6}>
                            {/* File path: src/components/MapContainer.js */}
                            <MapContainer />
                        </Col>
                    </Row>

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default Dashboard;