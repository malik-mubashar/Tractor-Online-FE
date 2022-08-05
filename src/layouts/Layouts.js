import React, {useEffect} from "react";
import Footer from "../pages/LandingPage/Footer";
import DeskTopBanner from "../pages/LandingPage/DeskTopBanner";
import MobileBanner from "../pages/LandingPage/MobileTopbar";
import MobileFooter from "../pages/LandingPage/MobileFooter";
import { isMobile } from "react-device-detect";
import MobileBannerFooter from "../pages/LandingPage/MobileBannerFooter";
import Topbar from "../pages/LandingPage/Topbar";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <div className="">
          {!isMobile ? <Topbar /> : <MobileBanner />}
          <div style={{marginTop: "5rem"}}>
            {props.children}
          </div>
          {isMobile ? <MobileBannerFooter /> : <Footer />}
          {isMobile && <MobileFooter />}
        </div>
      </main>
    </>
  );
};

export default Layout;
