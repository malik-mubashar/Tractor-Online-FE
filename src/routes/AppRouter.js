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
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import ProfileSettings from "../pages/ProfileSettings";
import FourHandedFourError from "../pages/FourHandedFourError";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/dashboard.scss";
import "../assets/css/landingPage.scss";
import "../assets/css/usedTractor.scss";
import "../assets/css/addDetails.scss";
import "../assets/css/Loader.scss";
import ProtectedRoute from "../components/ProtectedRoutes/index";
import UnProtectedRoute from "../components/UnprotectedRoutes/index";

import Layout from "../layouts/Layouts";
import AddDetails from "../pages/AddDetails/AddDetails";
import City from "../pages/City/City";
import toast, { Toaster } from 'react-hot-toast';
import Country from "../pages/Country/Country";
import ProdCategories from "../pages/ProductCategories/ProdCategories";
import ProdSubCategories from "../pages/ProductSubCategories /ProdSubCategories";
import ProdCategoryHeads from "../pages/ProductCategoryHeads/ProdCategoryHeads";
import Languages from "../pages/Languages/Languages";
import Products from "../pages/Products/Products";
import Roles from "../pages/Roles/Roles";
import UserRoles from "../pages/UserRoles/UserRoles";
import CategoryBrands from "../pages/CategoryBrands/CategoryBrands";
import Brands from "../pages/Brands/Brands";
import Models from "../pages/Models/Models";
import Budgets from "../pages/Models copy/Budgets";
import DashboardLayout from "../layouts/DashboardLayout";
import SellTractor from "../pages/PostAd/sellTractor.js";
import PostAd from "../pages/PostAd/post-ad"
import ProductMappings from "../pages/Product Mapping/ProductMappings";


const AppRouter = () => {
  return (
		<>
			<Toaster />

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
					{/* /// */}
					<ProtectedRoute exact path="/city">
            <DashboardLayout>
              <City />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/country">
            <DashboardLayout>
              <Country />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/productCategoryHeads">
            <DashboardLayout>
              <ProdCategoryHeads />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/categoryBrands">
            <DashboardLayout>
              <CategoryBrands />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/brands">
            <DashboardLayout>
              <Brands />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/models">
            <DashboardLayout>
              <Models />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/budgets">
            <DashboardLayout>
              <Budgets />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/productCategories">
            <DashboardLayout>
              <ProdCategories />
            </DashboardLayout>
					</ProtectedRoute>

					<ProtectedRoute exact path="/languages">
            <DashboardLayout>
              <Languages />
            </DashboardLayout>
					</ProtectedRoute>

					<ProtectedRoute exact path="/productSubCategories">
            <DashboardLayout>
              <ProdSubCategories />
            </DashboardLayout>
					</ProtectedRoute>

					<ProtectedRoute exact path="/products">
            <DashboardLayout>
              <Products />
            </DashboardLayout>
					</ProtectedRoute>

					<ProtectedRoute exact path="/roles">
            <DashboardLayout>
              <Roles />
            </DashboardLayout>
					</ProtectedRoute>

					<ProtectedRoute exact path="/userRoles">
            <DashboardLayout>
              <UserRoles />
            </DashboardLayout>
					</ProtectedRoute>
					<ProtectedRoute exact path="/productmappings">
            <DashboardLayout>
              <ProductMappings />
            </DashboardLayout>
					</ProtectedRoute>
          <UnProtectedRoute exact path="/usedtractor/search">
            <Layout>
              <UsedTractor />
            </Layout>
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/sellTractor">
            <Layout>
              <SellTractor />
            </Layout>
          </UnProtectedRoute>
        
          <UnProtectedRoute exact path="/sellTractor/postAd">
            <Layout>
              <PostAd />
            </Layout>
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/addDetails/:id">
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
          <UnProtectedRoute exact path="/reset-password/">
            <ResetPassword />
          </UnProtectedRoute>
          {/* unprotected routes */}
          <ProtectedRoute exact path="/dashboard/">
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile/">
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile-settings/">
            <DashboardLayout>
              <ProfileSettings />
            </DashboardLayout>
          </ProtectedRoute>

          <ProtectedRoute exact path="/search/">
            <DashboardLayout>
              <Search />
            </DashboardLayout>
          </ProtectedRoute>

          {/* <Route exact path="/calendar/" component={Calendar} /> */}
          <Route component={FourHandedFourError} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
