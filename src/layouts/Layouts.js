import React from "react";
 import Footer from "../pages/LandingPage/Footer";
 import DeskTopBanner from "../pages/LandingPage/DeskTopBanner";
 import MobileBanner from "../pages/LandingPage/MobileBanner";
 import MobileFooter from "../pages/LandingPage/MobileFooter";
 import { isMobile } from 'react-device-detect';

const Layout = (props) =>{

    return (<>
         <main>
          <div className="">
          {!isMobile ? <DeskTopBanner/> : <MobileBanner />}
                  {props.children}
                  <Footer />
          {isMobile && <MobileFooter />}             
        </div>
      </main>
    </>)
}


export default Layout;