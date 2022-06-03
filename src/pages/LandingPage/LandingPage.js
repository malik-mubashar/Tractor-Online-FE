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


import Topbar from "./Topbar"
import ExploreProducts from "./ExploreProducts"
import Categories from "./Categories"
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import {RootContext} from "../../context/RootContext";

const LandingPage = () => {
	const { currentUser } = useContext(RootContext);
console.log(currentUser)
  return( 
      <div className="overflow-x-hidden">
        <Topbar />
        <div className='dashboard-carousel'>
          <div className="search-classified-text text-center generic-white">
            <h1 className="text-white">Find Used Tractors in Pakistan</h1>
            <p className="text-white">With thousands of tractors, we have just the right one for you</p>
          </div>
          <Form
              className="nav-search-form row"
              // onSubmit={this._handleSubmit}
              // action="/search/"
            >
              <FormControl
                type="text"
                className="col-lg-3 col-6  ml-auto"
                // value={this.state.term}
                // onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Search..."
              />

              <Button className="search-success p-1 mr-auto" type="submit">
                <Icon.Search className="icon" />
              </Button>
          </Form>
        </div>
        <div className="bg-white">
          <div className="container-lg py-5">
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
                <a href="#" className="btn btn-danger btn-lg text-white">Post Your Ad</a>
              </div>
              <div className="col-lg-6 col-12 mt-4">
                <h2>Try TractorOnline Sell It For Me</h2>
                <ul>
                  <li><i className="fa fa-tick"></i>Dedicated Sales Expert to Sell your Car</li>
                  <li><i className="fa fa-tick"></i>We Bargain for you and share the Best Offer</li>
                  <li><i className="fa fa-tick"></i>We ensure Safe &amp; Secure Transaction</li>
                </ul>
                <a href="#" className="btn btn-secondary btn-lg text-white">Register Your Car</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg py-5">
          <Categories />
        </div>
        <div className="bg-white">
          <div className="container-lg py-5">
            <ExploreProducts />
          </div>
        </div>
        <div className="container-lg py-5">
          <FeaturedProducts />
        </div>
        <div>
          <Footer />
        </div>
      </div>
	)
}

export default LandingPage;