import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";
import UsedTractor from "../pages/usedTractor/UsedTractor";

// import Calendar from "../pages/Calendar";
import Search from "../pages/Search";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import ProfileSettings from "../pages/ProfileSettings";
import FourHandedFourError from "../pages/FourHandedFourError";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/dashboard.scss";
import "../assets/css/usedTractor.scss";
import "../assets/css/addDetails.scss";
import ProtectedRoute from "../components/ProtectedRoutes/index";
import UnProtectedRoute from "../components/UnprotectedRoutes/index";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../layouts/Layouts";
import AddDetails from "../pages/AddDetails/AddDetails";
import City from "../pages/City/City";

const AppRouter = () => {
  return (
    <>
      {/* <ToastContainer /> */}

      <BrowserRouter>
        <Switch>
          {/* unprotected routes */}
          <UnProtectedRoute exact path="/">
            <Layout>
              <LandingPage />
            </Layout>
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/login">
            <Login />
					</UnProtectedRoute>
					<UnProtectedRoute exact path="/city">
            <City />
					</UnProtectedRoute>
          <UnProtectedRoute exact path="/usedtractor">
            <Layout>
              <UsedTractor />
            </Layout>
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/addDetails">
            <Layout>
              <AddDetails />
            </Layout>
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/signup/">
            <Signup />
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/forgot-password/">
            <ForgotPassword />
          </UnProtectedRoute>
          {/* unprotected routes */}
          <ProtectedRoute exact path="/dashboard/">
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile/">
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile-settings/">
            <ProfileSettings />
          </ProtectedRoute>

          <ProtectedRoute exact path="/search/">
            <Search />
          </ProtectedRoute>

          {/* <Route exact path="/calendar/" component={Calendar} /> */}
          <Route component={FourHandedFourError} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
