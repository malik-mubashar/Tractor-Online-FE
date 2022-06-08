import React from "react";
import "../../components/Navigation/Navigation.css";
import ExploreProducts from "./ExploreProducts"
import Categories from "./Categories"
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import NewCarByMake from "./NewCar";
import FeaturedNewTractor from "./FeaturedNewTractor";
import MobileFooter from './MobileFooter';
import { isMobile } from 'react-device-detect';
import DeskTopBanner from "./DeskTopBanner";
import MobileBanner from "./MobileBanner";



const LandingPage = () => {

  return( 
      <div className="overflow-x-hidden">
       {!isMobile ? <DeskTopBanner/>
       : <MobileBanner />
}

        <div className={`container-lg py-4 mt-2 ${isMobile ? "bg-white":""}`}>
          <Categories />
        </div>
        <div className="bg-white">
          <div className="container-lg py-4">
            <ExploreProducts />
          </div>
        </div>
       
        <div className="container-lg py-4">
          <FeaturedProducts title="Managed By TractoOnline" link="View all managed by TractorOnline" />
        </div> 
        <div className="bg-white">
          <div className="container-lg py-4">
          <FeaturedProducts  title ="Featured Used Tractor For Sale" link="View all featured used tractors"/>
          </div>
        </div>

        <div className="container-lg py-4 mt-2">
          <FeaturedNewTractor  title="Featured New Tractors" link="view all tractors"/>
        </div>
        <div className="container-lg py-4">
        <NewCarByMake/>

        </div> 

        <div>
          <Footer />
        </div>
        <div>
          {isMobile && <MobileFooter />}
        </div>
      </div>
	)
}

export default LandingPage;