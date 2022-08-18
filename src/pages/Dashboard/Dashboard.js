import React, { useContext, useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Row, Breadcrumb, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MonthlySales from "../../components/Dashboard/Sales/MonthlySales";
import TotalOrders from "../../components/Dashboard/Sales/TotalOrders";
import PendingOrders from "../../components/Dashboard/Sales/PendingOrders";
import CompletedOrders from "../../components/Dashboard/Sales/CompletedOrders";
import Loader from "../../components/Common/Loader";
import toast from "react-hot-toast";
import { user } from "../../API/User";
import { RootContext } from "../../context/RootContext";

const Dashboard = () => {
  const [state,setState] =useState( {
    sideMenu: true,
    loading: true
	});

  // Loading icon false after DOM loaded
  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     this.setState({ loading: false });
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.myInterval);
  // }

  // Toggle side bar menu
  const _onSideMenu = (active) => {
    setState({ ...state,sideMenu: active });
  };

    // let loader = null;
    // if (this.state.loading) {
    //   loader = <Loader message="Loading..." />;
    // }


    return (
      <div className="page-wrapper">
        {/* Navigation */}
				<Navigation onClick={()=>{_onSideMenu()}} />
        {/* End Navigation */}

        <div
          className={`main-content d-flex flex-column ${
            state.sideMenu ? "hide-sidemenu" : ""
          }`}
        >
          {/* Loader */}
          {/* {loader} */}
          {/* End Loader */}

          {/* Breadcrumb */}
          <div className="main-content-header">
            <Breadcrumb>
              <h1>Dashboard</h1>
              <Breadcrumb.Item to="/dashboard">Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
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

          {/* Footer */}
          <div className="flex-grow-1"></div>
          <Footer />
          {/* End Footer */}
        </div>
      </div>
    );
}

export default Dashboard;
