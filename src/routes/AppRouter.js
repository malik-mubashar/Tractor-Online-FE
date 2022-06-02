import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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

const AppRouter = () => (
	<Switch>
		
		{/* unprotected routes */}
    <Route path="/" exact component={LandingPage} />
    <Route path="/signup/" exact component={Signup} />
    <Route path="/login/" exact component={Login} />
		<Route exact path="/forgot-password/" component={ForgotPassword} />
		{/* unprotected routes */}

    <Route path="/dashboard/" exact component={Dashboard} />
    <Route path="/dashboard-two/" exact component={DashboardTwo} />
    <Route path="/dashboard-three/" exact component={DashboardThree} />
    <Route exact path="/profile/" component={Profile} />
    <Route exact path="/profile-settings/" component={ProfileSettings} />
    <Route exact path="/gallery/" component={CustomGallery} />
    <Route exact path="/ui-components/cards/" component={Cards} />
    <Route exact path="/inbox/" component={Inbox} />
    <Route exact path="/chat/" component={Chat} />
    <Route exact path="/todos/" component={Todos} />
    <Route exact path="/notes/" component={Notes} />
    {/* <Route exact path="/calendar/" component={Calendar} /> */}
    <Route exact path="/search/" component={Search} />
    <Route component={FourHandedFourError} />
    <Route exact path="/notifications/" component={Notification} />
    <Route exact path="/pricing/" component={Pricing} />
    <Route exact path="/users-card/" component={UsersCard} />
    <Route exact path="/ui-components/alerts/" component={Alerts} />
    <Route exact path="/invoice-template/" component={InvoiceTemplate} />
    <Route exact path="/faq/" component={Faq} />
    <Route exact path="/ui-components/badges/" component={Badges} />
    <Route exact path="/ui-components/buttons/" component={Buttons} />
    <Route exact path="/ui-components/dropdowns/" component={Dropdowns} />
    <Route exact path="/ui-components/forms/" component={Forms} />
    <Route exact path="/ui-components/list-groups/" component={ListGroups} />
    <Route exact path="/ui-components/modals/" component={Modals} />
    <Route
      exact
      path="/ui-components/progress-bars/"
      component={ProgressBars}
    />
    <Route exact path="/ui-components/tables/" component={Tables} />
    <Route exact path="/ui-components/tabs/" component={TemplateTabs} />
    <Route exact path="/time-line/" component={TimeLine} />
    <Route exact path="/line-charts/" component={LineCharts} />
    <Route exact path="/area-charts/" component={AreaCharts} />
    <Route exact path="/column-charts/" component={ColumnCharts} />
    <Route exact path="/bar-charts/" component={BarCharts} />
    <Route exact path="/mixed-charts/" component={MixedCharts} />
    <Route exact path="/pie-donuts-Charts/" component={PieDonutsCharts} />
    <Route exact path="/google-map/" component={CustomGoogleMap} />
    <Route exact path="/vector-map/" component={CustomJVectorMap} />
    <Route exact path="/feather-icons/" component={FeatherIcons} />
    <Route exact path="/icofont-icons/" component={IcofontIcons} />
  </Switch>
);

export default AppRouter;
