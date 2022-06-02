import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Loader from '../../components/Common/Loader';
import SalesStatistics from '../../components/DashboardTwo/SalesStatistics';
import PriceMovements from '../../components/DashboardTwo/PriceMovements';
import LastMonthSales from '../../components/DashboardTwo/Sales/LastMonthSales';
import ProductSolds from '../../components/DashboardTwo/Sales/ProductSolds';
import NewOrders from '../../components/DashboardTwo/Sales/NewOrders';
import NewCustomers from '../../components/DashboardTwo/Sales/NewCustomers';
import NewCustomersList from '../../components/DashboardTwo/NewCustomersList';
import NewOrdersTable from '../../components/DashboardTwo/NewOrdersTable';
import SocialMarketing from '../../components/DashboardTwo/SocialMarketing';
import ProductsOfTheMonth from '../../components/DashboardTwo/ProductsOfTheMonth';
import OrderStats from '../../components/DashboardTwo/OrderStats';

class DashboardTwo extends React.Component {
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
                            <Breadcrumb.Item to="/dashboard-two">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Dashboard v.2</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardTwo/Sales/SalesLastMonthSales.js */}
                            <LastMonthSales />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardTwo/Sales/ProductSolds.js */}
                            <ProductSolds />
                        </Col>
 
                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardTwo/Sales/NewOrders.js */}
                            <NewOrders />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File Path: src/components/DashboardTwo/Sales/NewCustomers.js */}
                            <NewCustomers />
                        </Col>
                    </Row>

                    {/* Sales Statistics & New Customers Card */}
                    <div className="row">
                        <Col lg={12}>
                            {/* File Path: src/components/DashboardTwo/SalesStatistics.js */}
                            <SalesStatistics />
                        </Col>

                        <Col lg="8">
                            {/* File Path: src/components/DashboardTwo/PriceMovements.js */}
                            <PriceMovements />
                        </Col>

                        <Col lg={4}>
                            {/* File Path: src/components/DashboardTwo/NewCustomersList.js */}
                            <NewCustomersList />
                        </Col>
                    </div>
                    {/* End Sales Statistics & New Customers Card */}

                    {/* New Orders & Marketing Card */}
                    <div className="row">
                        <Col lg={8}>
                            {/* File Path: src/components/DashboardTwo/NewOrdersTable.js */}
                            <NewOrdersTable />
                        </Col>

                        <Col lg={4}>
                            {/* File Path: src/components/DashboardTwo/SocialMarketing.js */}
                            <SocialMarketing />
                        </Col>
                    </div>
                    {/* End New Orders & Marketing Card */}

                    {/* Top Product & Notification */}
                    <Row>
                        <Col lg={7}>
                            {/* File Path: src/components/DashboardTwo/ProductsOfTheMonth.js */}
                            <ProductsOfTheMonth />
                        </Col>

                        <Col lg={5}>
                            {/* File Path: src/components/DashboardTwo/OrderStats.js */}
                            <OrderStats />
                        </Col>
                    </Row>
                    {/* End Top Product & Notification */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default DashboardTwo;