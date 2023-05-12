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
import { productApis } from "../../API/ProductApis";
import { dashboardApis } from "../../API/DashboardApis";

const Dashboard = () => {
	const { setShowLoader,setVerificationRequestedUsersCount,setSystemData,systemData } = useContext(RootContext);
	const [state,setState] =useState( {
    sideMenu: true,
    loading: true
	});
	useEffect(() => {
		getAllUsers(1, '', 10000)
		getSystemNotifications()
	}, [])
	const getAllUsers = async (page,mainS,no_of_record) => {
		setShowLoader(true)
		const result = await user.getVerificationRequstedUsers(page,mainS,no_of_record);
		if (result.error === false) {

			console.log('req_varified', result.data.data.req_varified)
			setVerificationRequestedUsersCount(result.data.data.req_varified)
			setShowLoader(false)
		}
		if (result.error === true) {
			console.error(result.error)
			setShowLoader(false)
		}
		// const result2 = await user.updateAppUsers()
		// console.log('result2', result2)


	}
	
	const getSystemNotifications = async() => {
		try {
			const result = await dashboardApis.getAllNotification()
			if (result.error == false && result.data.status == "success") {
				setSystemData(result.data.data)
			} else {
				console.error(result.data)
			}

			} catch (error) {
			console.error(error)
		} 
	}


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
	console.log('checking')
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
              <h1>DashboarD</h1>
              <Breadcrumb.Item to="/dashboard">Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* End Breadcrumb */}

          <Row>
            <Col sm={6} lg={3}>
              {/* File path: src/components/Dashboard/Sales/MonthlySales.js */}
              <MonthlySales systemData={systemData} />
            </Col>

            <Col sm={6} lg={3}>
              {/* File path: src/components/Dashboard/Sales/TotalOrders.js */}
              <TotalOrders systemData={systemData}/>
            </Col>

            <Col sm={6} lg={3}>
              {/* File path: src/components/Dashboard/Sales/CompletedOrders.js */}
              <CompletedOrders systemData={systemData}/>
            </Col>

            <Col sm={6} lg={3}>
              {/* File path: src/components/Dashboard/Sales/PendingOrders.js */}
              <PendingOrders systemData={systemData}/>
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
