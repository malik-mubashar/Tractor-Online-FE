import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";
import DashboardTwo from "../pages/Dashboard/DashboardTwo";
import DashboardThree from "../pages/Dashboard/DashboardThree";
import Inbox from "../pages/Inbox/Inbox";
import Chat from "../pages/Chat/Chat";
import Todos from "../pages/Todos";
import Notes from "../pages/Notes";
// import Calendar from "../pages/Calendar";
import Search from "../pages/Search";
import Alerts from "../pages/UI-Components/Alerts";
import Badges from "../pages/UI-Components/Badges";
import Buttons from "../pages/UI-Components/Buttons";
import Cards from "../pages/UI-Components/Cards";
import Dropdowns from "../pages/UI-Components/Dropdowns";
import Forms from "../pages/UI-Components/Forms";
import ListGroups from "../pages/UI-Components/ListGroups";
import Modals from "../pages/UI-Components/Modals";
import ProgressBars from "../pages/UI-Components/ProgressBars";
import Tables from "../pages/UI-Components/Tables";
import TemplateTabs from "../pages/UI-Components/TemplateTabs";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import ProfileSettings from "../pages/ProfileSettings";
import LineCharts from "../pages/Apex-Charts/LineCharts";
import AreaCharts from "../pages/Apex-Charts/AreaCharts";
import ColumnCharts from "../pages/Apex-Charts/ColumnCharts";
import BarCharts from "../pages/Apex-Charts/BarCharts";
import MixedCharts from "../pages/Apex-Charts/MixedCharts";
import PieDonutsCharts from "../pages/Apex-Charts/PieDonutsCharts";
import CustomGoogleMap from "../pages/Map/CustomGoogleMap";
import CustomJVectorMap from "../pages/Map/CustomJVectorMap";
import FeatherIcons from "../pages/Icons/FeatherIcons";
import IcofontIcons from "../pages/Icons/IcofontIcons";
import Notification from "../pages/Notification";
import UsersCard from "../pages/UsersCard";
import TimeLine from "../pages/TimeLine";
import InvoiceTemplate from "../pages/InvoiceTemplate";
import CustomGallery from "../pages/Gallery/CustomGallery";
import Faq from "../pages/Faq";
import Pricing from "../pages/Pricing";
import FourHandedFourError from "../pages/FourHandedFourError";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/dashboard.scss";
import ProtectedRoute from "../components/ProtectedRoutes/index";
import UnProtectedRoute from "../components/UnprotectedRoutes/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AppRouter = () => {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Switch>
          {/* unprotected routes */}
          <UnProtectedRoute exact path="/">
            <LandingPage />
          </UnProtectedRoute>
          <UnProtectedRoute exact path="/login">
            <Login />
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
          <ProtectedRoute exact path="/dashboard-two/">
            <DashboardTwo />
          </ProtectedRoute>
          <ProtectedRoute exact path="/dashboard-three/">
            <DashboardThree />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/">
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile-settings/">
            <ProfileSettings />
          </ProtectedRoute>
          <ProtectedRoute exact path="/gallery/">
            <CustomGallery />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/cards/">
            <Cards />
          </ProtectedRoute>{" "}
          <ProtectedRoute exact path="/inbox/">
            <Inbox />
          </ProtectedRoute>
          <ProtectedRoute exact path="/chat/">
            <Chat />
          </ProtectedRoute>
          <ProtectedRoute exact path="/todos/">
            <Todos />
          </ProtectedRoute>
          <ProtectedRoute exact path="/notes/">
            <Notes />
          </ProtectedRoute>
          <ProtectedRoute exact path="/search/">
            <Search />
          </ProtectedRoute>
          <ProtectedRoute exact path="/notifications/">
            <Notification />
          </ProtectedRoute>
          <ProtectedRoute exact path="/pricing/">
            <Pricing />
          </ProtectedRoute>
          <ProtectedRoute exact path="/users-card/">
            <UsersCard />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/alerts/">
            <Alerts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/invoice-template/">
            <InvoiceTemplate />
          </ProtectedRoute>
          <ProtectedRoute exact path="/faq/">
            <Faq />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/badges/">
            <Badges />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/dropdowns/">
            <Dropdowns />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/forms/">
            <Forms />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/list-groups/">
            <ListGroups />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/modals/">
            <Modals />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/progress-bars/">
            <ProgressBars />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/tables/">
            <Tables />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ui-components/tabs/">
            <TemplateTabs />
          </ProtectedRoute>
          <ProtectedRoute exact path="/time-line/">
            <TimeLine />
          </ProtectedRoute>
          <ProtectedRoute exact path="/line-charts/">
            <LineCharts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/area-charts/">
            <AreaCharts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/column-charts/">
            <ColumnCharts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/bar-charts/">
            <BarCharts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/mixed-charts/">
            <MixedCharts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/pie-donuts-Charts/">
            <PieDonutsCharts />
          </ProtectedRoute>
          <ProtectedRoute exact path="/google-map/">
            <CustomGoogleMap />
          </ProtectedRoute>
          <ProtectedRoute exact path="/vector-map/">
            <CustomJVectorMap />
          </ProtectedRoute>
          <ProtectedRoute exact path="/feather-icons/">
            <FeatherIcons />
          </ProtectedRoute>
          <ProtectedRoute exact path="/icofont-icons/">
            <IcofontIcons />
          </ProtectedRoute>
          {/* <Route exact path="/calendar/" component={Calendar} /> */}
          <Route component={FourHandedFourError} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
