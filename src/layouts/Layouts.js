import React, { useEffect, useContext } from "react";
import Footer from "../pages/LandingPage/Footer";
import DeskTopBanner from "../pages/LandingPage/DeskTopBanner";
import MobileBanner from "../pages/LandingPage/MobileTopbar";
import MobileFooter from "../pages/LandingPage/MobileFooter";
import { isMobile } from "react-device-detect";
import MobileBannerFooter from "../pages/LandingPage/MobileBannerFooter";
import Topbar from "../pages/LandingPage/Topbar";
import { websiteName } from "../API/websiteNameApi";
import { RootContext } from "../context/RootContext";

const Layout = (props) => {
  const { setWebsiteName } = useContext(RootContext)
  useEffect(() => {
    window.scrollTo(0, 0);
    getWebsiteName();
  }, []);
  const getWebsiteName = async () => {
    
    const result = await websiteName.getWebsiteName();
    if(result.error=== false){
      debugger
      setWebsiteName(result.data && result.data.data[0].title);
    }
  };
  
  return (
    <>
      <main>
        <div className="">
          {!isMobile ? <Topbar /> : <MobileBanner />}
          <div style={{marginTop: "4rem"}}>
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
