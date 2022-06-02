import React, { useState, useContext, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Footer() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.FeaturedProducts
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    return (
      <div>
        <div className="footer">
          <div className="container-lg">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                      <div className="col-md-3">
                        <ul className="nomargin footer-links list-unstyled" id="footer-Make">
                          <li><h5 className="text-white">Cars By Make</h5></li>
                          <li><a href="#" className="footer-link">Toyota Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Suzuki Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Honda Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Daihatsu Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Mitsubishi Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Nissan Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Mercedes Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">Hyundai Cars for Sale</a></li>
                          <li><a href="#" className="footer-link">BMW Cars for Sale</a></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="nomargin footer-links list-unstyled" id="footer-City">
                          <li><h5 className="text-white">Cars By City</h5></li>
                            <li><a href="#" className="footer-link">Cars in Lahore</a></li>
                            <li><a href="#" className="footer-link">Cars in Karachi</a></li>
                            <li><a href="#" className="footer-link">Cars in Islamabad</a></li>
                            <li><a href="#" className="footer-link">Cars in Rawalpindi</a></li>
                            <li><a href="#" className="footer-link">Cars in Peshawar</a></li>
                            <li><a href="#" className="footer-link">Cars in Faisalabad</a></li>
                            <li><a href="#" className="footer-link">Cars in Multan</a></li>
                            <li><a href="#" className="footer-link">Cars in Gujranwala</a></li>
                            <li><a href="#" className="footer-link">Cars in Sialkot</a></li>
                        </ul>
                      </div>
                  <div className="col-md-3">
                    <ul className="nomargin footer-links list-unstyled">
                      <li><h5 className="text-white">Explore TractorOnline</h5></li>
                      <li><a href="#" className="footer-link">Used Cars</a></li>
                      <li><a href="#" className="footer-link">Used Bikes</a></li>
                      <li><a href="#" className="footer-link">New Cars</a></li>
                      <li><a href="#" className="footer-link">Auto Parts &amp; Accessories</a></li>
                      <li><a href="#" className="footer-link">Cool Rides</a></li>
                      <li><a href="#" className="footer-link">Forums</a></li>
                      <li><a href="#" className="footer-link">Autoshow</a></li>
                      <li><a href="#" className="footer-link">Sitemap</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="nomargin footer-links list-unstyled">
                      <li><h5 className="text-white">TractorOnline.com</h5></li>
                      <li><a href="#" className="footer-link">About TractorOnline.com</a></li>
                      <li><a href="#" className="footer-link">Our Products</a></li>
                      <li><a href="#" className="footer-link">Advertise With Us</a></li>
                      <li><a href="#" className="footer-link">How To Pay</a></li>
                      <li><a href="#" className="footer-link">FAQs</a></li>
                      <li><a href="#" className="footer-link">Refunds &amp; Returns</a></li>
                      <li><a href="#" className="footer-link">Careers</a></li>
                      <li><a href="#" className="footer-link">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                {/* <div className="row mt20">
                    <div className="col-md-3">
                      <ul className="nomargin footer-links list-unstyled" id="footer-category"><li><h5>Cars by Category</h5></li><li><a href="/used-cars/jeep/72893" title="Jeeps for sale in Pakistan">Jeep</a></li><li><a href="/used-cars/japanese/65933" title="Used Japanese Cars for sale in Pakistan - Japan Auction Cars">Japanese Cars</a></li><li><a href="/used-cars/imported/57428" title="Imported Cars for Sale in Pakistan">Imported Cars</a></li><li><a href="/used-cars/automatic/57336" title="Automatic Cars for Sale in Pakistan">Automatic Cars</a></li><li><a href="/used-cars/low-priced/328875" title="Low Price Cars in Pakistan for Sale">Low Priced Cars</a></li><li><a href="/used-cars/4x4/107784" title="4x4 Cars for sale in Pakistan - Four Wheel Cars">4x4 Cars</a></li><li><a href="/used-cars/660cc-cars/190519" title="660cc Cars for Sale in Pakistan">660cc Cars</a></li><li><a href="/used-cars/1000cc-cars/190769" title="1000cc Cars for Sale in Pakistan">1000cc Cars</a></li></ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nomargin footer-links list-unstyled" id="footer-body_type"><li><h5>Cars by Body Type</h5></li><li><a href="/used-cars/suv/107776" title="SUV Cars for Sale">SUV</a></li><li><a href="/used-cars/crossover/107782" title="Crossover Cars for Sale">Crossover</a></li><li><a href="/used-cars/mini-van/107785" title="Mini Van Cars for Sale">Mini Van</a></li><li><a href="/used-cars/double-cabin/266839" title="Double Cabin Cars for Sale">Double Cabin</a></li><li><a href="/used-cars/mpv/145760" title="MPV Cars for Sale">MPV</a></li><li><a href="/used-cars/van/162471" title="Van Cars for Sale">Van</a></li><li><a href="/used-cars/hatchback/107774" title="Hatchback Cars for Sale">Hatchback</a></li><li><a href="/used-cars/sedan/107775" title="Sedan Cars for Sale">Sedan</a></li></ul> 
                    </div>
                    <div className="col-md-3">
                      <ul className="nomargin footer-links list-unstyled" id="footer-color"><li><h5>Cars by Color</h5></li><li><a href="/used-cars/black/107787" title="Black Cars for Sale">Black Cars</a></li><li><a href="/used-cars/blue/107788" title="Blue Cars for Sale">Blue Cars</a></li><li><a href="/used-cars/gold/107792" title="Gold Cars for Sale">Gold Cars</a></li><li><a href="/used-cars/green/107793" title="Green Cars for Sale">Green Cars</a></li><li><a href="/used-cars/grey/107794" title="Grey Cars for Sale">Grey Cars</a></li><li><a href="/used-cars/red/107801" title="Red Cars for Sale">Red Cars</a></li><li><a href="/used-cars/silver/107802" title="Silver Cars for Sale">Silver Cars</a></li><li><a href="/used-cars/white/107804" title="White Cars for Sale">White Cars</a></li></ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nomargin footer-links list-unstyled" id="footer-province"><li><h5>Cars by Province</h5></li><li><a href="/used-cars/punjab/201902" title="Punjab Cars for Sale">Cars in Punjab</a></li><li><a href="/used-cars/sindh/201932" title="Sindh Cars for Sale">Cars in Sindh</a></li><li><a href="/used-cars/kpk/201917" title="KPK Cars for Sale">Cars in KPK</a></li><li><a href="/used-cars/balochistan/201947" title="Balochistan Cars for Sale">Cars in Balochistan</a></li><li><a href="/used-cars/azad-kashmir/201953" title="Azad Kashmir Cars for Sale">Cars in Azad Kashmir</a></li><li><a href="/used-cars/federally-administered-tribal-areas/201951" title="Federally Administered Tribal Areas Cars for Sale">Cars in Federally Administered Tribal Areas</a></li></ul>
                    </div>
                </div> */}
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nomargin footer-links list-unstyled">
                        <li>
                          <h5 className="text-white">Sell On TractorOnline</h5>
                        </li>
                    <li><a href="#" className="footer-link">Sell Your Car</a></li>
                    <li><a href="#" className="footer-link">Sell Your Bike</a> </li>
                    <li><a href="#" className="footer-link">Sell Accessory</a></li>
                  </ul></div>
                </div>

                {/* <div className="row">
                  <form id="subscribe_newsletter" className="form-horizontal newsletter-subscription">
                  <h5>Subscribe to our Newsletter</h5>
                  <div id="newsletter-message"></div>
                  <div className="form-fields">
                    <input type="text" id="email" name="email" placeholder="name@email.com" />
                    <button type="submit" className="btn btn-success btn-xs">Subscribe</button>
                    <div className="error-message"></div>
                  </div>
                  </form>
                  <div className="mb30 footer-social clearfix">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled list-inline networks primary-lang">
                      <li>
                        <a href="https://www.twitter.com/TractorOnline" className="twitter" rel="nofollow" target="_blank" title="Follow Us On Twitter"><i className="fa fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/TractorOnline" className="facebook" rel="nofollow" target="_blank" title="Follow Us On Facebook"><i className="fa fa-facebook"></i></a>
                      </li>
                      <li>
                        <a href="https://plus.google.com/117775652035228984610" className="googleplus" rel="me" target="_blank" title="Follow Us On Google Plus"><i className="fa fa-google-plus"></i></a>
                      </li>
                      <li>
                        <a href="https://pinterest.com/TractorOnline/" className="pinterest" rel="nofollow" target="_blank" title="Follow Us On Pinterest"><i className="fa fa-pinterest"></i></a>
                      </li>
                      <li>
                        <a href="https://instagram.com/TractorOnline" className="instagram" rel="nofollow" target="_blank" title="Follow Us On Instagram"><i className="fa fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/user/TractorOnline" className="youtube" rel="me" target="_blank" title="Follow Us On Youtube"><i className="fa fa-youtube"></i></a>

                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>
                      <a href="/apps" className="generic-white">Download Mobile Apps</a>
                    </h5>
                    <a href="https://play.google.com/store/apps/details?id=com.TractorOnline&amp;referrer=utm_source%3DTractorOnline.com%26utm_medium%3Dweb-link%26utm_content%3Dfooter%26utm_campaign%3Dorganic-installs" target="_blank" title="TractorOnline Android App"><img alt="Google-play-badge" height="40" loading="lazy" src="https://wsa4.TractorOnline.com/assets/google-play-badge-f4bed6cbd8a3a1be7c79377c4441447a.svg" /></a>
                    <a href="https://click.google-analytics.com/redirect?tid=UA-642162-19&amp;url=https%3A%2F%2Fitunes.apple.com%2Fpk%2Fapp%2FTractorOnline%2Fid739776365%3Fmt%3D8&amp;aid=com.TractorOnline.www&amp;idfa={idfa}&amp;cs=TractorOnline.com&amp;cm=web-link&amp;cn=organic-installs&amp;cc=footer&amp;hash=md5" target="_blank" title="TractorOnline iOS App"><img alt="App-store-badge" height="40" loading="lazy" src="https://wsa1.TractorOnline.com/assets/app-store-badge-4d05ff70e5546f31e3891739ea40abad.svg" /></a>
                    <a href="https://appgallery.huawei.com/#/app/C101437147" target="_blank" title="TractorOnline Android App"><img alt="Huawei-store-badge" height="40" loading="lazy" src="https://wsa4.TractorOnline.com/assets/huawei-store-badge-7ad06f9ffe74b644d49c6221af98f5b3.svg" /></a>
                  </div>
                </div> */}
              </div>
            </div>

            <hr className="dark" />

            <div className="copyright footer-links mt30">
              Copyright © 2003 - 2022 TractorOnline (Pvt) Ltd. - All Rights Reserved.
              <a href="#" rel="nofollow" title="Terms of Service">Terms of Service</a>&nbsp;|&nbsp;
              <a href="#" rel="nofollow" title="Privacy Policy">Privacy Policy</a>
            </div>

            <p className="copyright mt5">
              Reproduction of material from any TractorOnline.com pages without permission is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    );
}
