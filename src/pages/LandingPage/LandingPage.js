import React, { useContext } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import "../../components/Navigation/Navigation.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import Tractor from '../../assets/img/tractor.png'


import Topbar from "./Topbar"
import ExploreProducts from "./ExploreProducts"
import Categories from "./Categories"
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import {RootContext} from "../../context/RootContext";
import SearchAble from './searchable';
import NewCarByMake from "./NewCar";
import FeaturedNewTractor from "./FeaturedNewTractor";
import SelectSearch from './SelectSearch';
import MobileFooter from './MobileFooter';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Logo from "../../assets/img/tractoronline.png";
import { useHistory } from "react-router-dom";



const LandingPage = () => {
	const { currentUser } = useContext(RootContext);
  const history = useHistory();

  return( 
      <div className="overflow-x-hidden">
       {!isMobile ? <><Topbar />
        <div className='dashboard-carousel'>
          <div className="search-classified-text text-center generic-white">
            <h1 className="text-white">Find Used Tractors in Pakistan</h1>
            <p className="text-white">With thousands of tractors, we have just the right one for you</p>
          </div>
          <SearchAble />
          <Button  className="mt-2 mr-2 d-flex justify-content-center m-auto bg-transparent border border-white">{"Advanced Filter >>"}</Button>
        </div>
        <div className="bg-white">
          <div className="container-lg py-3">
            <div className="home-widgets row">
              <div className="home-widgets-title w-full-lg">
                <h3>Sell Your Tractor on TractorOnline and Get the Best Price</h3>
              </div>
              <div className="col-lg-6 col-12 mt-4 line or">
                <h2>Post your Ad on TractorOnline</h2>
                <ul>
                  <li><i className="fa fa-tick"></i>Post your Ad for Free in 3 Easy Steps</li>
                  <li><i className="fa fa-tick"></i>Get Genuine offers from Verified Buyers</li>
                  <li><i className="fa fa-tick"></i>Sell your car Fast at the Best Price</li>
                </ul>
                <a href={'/'} className="btn btn-danger btn-lg text-white">Post Your Add</a>
              </div>
              <div className="col-lg-6 col-12 mt-4">
                <h2>Try TractorOnline Sell It For Me</h2>
                <ul>
                  <li><i className="fa fa-tick"></i>Dedicated Sales Expert to Sell your Tractor</li>
                  <li><i className="fa fa-tick"></i>We Bargain for you and share the Best Offer</li>
                  <li><i className="fa fa-tick"></i>We ensure Safe &amp; Secure Transaction</li>
                </ul>
                <a href={'/'} className="btn btn-info btn-lg text-white">Register Your Tractor</a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-3">
              <Image src={Tractor} border="0" width="75%" height="50%" alt="" class="img_ad" />
        </div>  
        </div></>
       : <div className={`dashboard-carousel ${isMobile ? 'p-3' : null}`}>
       
           
          <Image src={Logo} height="20px" width="100px" alt="Profile Image" className="d-flex justify-content-center m-auto"/>
          <div className="d-flex mt-2 mb-2 justify-content-between text-align-center align-content-center p-2">   
              <div className="col-4 p-0 mobile-tabs">
                <span
                  onClick={() => history.push("/usedtractor")}
                  className="btn btn-info rounded p-2 w-100 "
                >
                  Used Tractor
                </span>
              </div>
              <div className="col-4 p-0 mobile-tabs">
                <span
                  onClick={() => history.push("/new/tractor")}
                  className="btn btn-info rounded p-2 w-100"
                >
                  New Tractor
                </span> 
              </div>
              <div className="col-4 p-0 mobile-tabs" >
                <span
                  onClick={() => history.push("/autoparts/")}
                  className="btn btn-info rounded p-2 w-100"
                >
                  Auto Parts
                </span>  
              </div>                                   
                 
          </div>
                       
          <Form className="nav-search-form d-sm-block relative" action="/search/">
                            <FormControl 
                                type="text" 
                                // value={this.state.term}
                                // onChange={ e => this.setState({term: e.target.value}) }
                                placeholder="Search..." 
                                className="rounded"
                            />

                            <Button className="search-success" type="submit">
                                <Icon.Search 
                                    className="icon"
                                />
                            </Button>
                        </Form>

         </div>
}

        <div className={`container-lg py-5 mt-2 ${isMobile ? "bg-white":""}`}>
          <Categories />
        </div>
        <div className="bg-white">
          <div className="container-lg py-5">
            <ExploreProducts />
          </div>
        </div>
       
        <div className="container-lg py-5">
          <FeaturedProducts title="Managed by TractoOnline" link="View all managed by TractorOnline" />
        </div> 
        <div className="bg-white">
          <div className="container-lg py-5">
          <FeaturedProducts  title ="Featured Used Tractor for Sale" link="View all featured used tractors"/>
          </div>
        </div>

        <div className="container-lg py-5 mt-2">
          <FeaturedNewTractor  title="Featured New Tractors" link="view all tractors"/>
        </div>
        <div className="container-lg py-5">
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