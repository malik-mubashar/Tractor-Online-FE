import React from "react";

export default function Footer() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.FeaturedProducts
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className="footer">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <ul
                    className="nomargin footer-links list-unstyled"
                    id="footer-Make"
                  >
                    <li>
                      <h5 className="text-white">Cars By Make</h5>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Toyota Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Suzuki Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Honda Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Daihatsu Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Mitsubishi Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Nissan Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Mercedes Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Hyundai Cars for Sale
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        BMW Cars for Sale
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul
                    className="nomargin footer-links list-unstyled"
                    id="footer-City"
                  >
                    <li>
                      <h5 className="text-white">Cars By City</h5>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Lahore
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Karachi
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Islamabad
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Rawalpindi
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Peshawar
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Faisalabad
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Multan
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Gujranwala
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cars in Sialkot
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nomargin footer-links list-unstyled">
                    <li>
                      <h5 className="text-white">Explore TractorOnline</h5>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Used Cars
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Used Bikes
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        New Cars
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Auto Parts &amp; Accessories
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Cool Rides
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Forums
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Autoshow
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nomargin footer-links list-unstyled">
                    <li>
                      <h5 className="text-white">TractorOnline.com</h5>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        About TractorOnline.com
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Advertise With Us
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        How To Pay
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Refunds &amp; Returns
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nomargin footer-links list-unstyled">
                    <li>
                      <h5 className="text-white">Sell On TractorOnline</h5>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Sell Your Car
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Sell Your Bike
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Sell Accessory
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="dark" />

          <div className="copyright footer-links mt30">
            Copyright © 2003 - 2022 TractorOnline (Pvt) Ltd. - All Rights
            Reserved.
            <a href="/" rel="nofollow" title="Terms of Service">
              Terms of Service
            </a>
            &nbsp;|&nbsp;
            <a href="/" rel="nofollow" title="Privacy Policy">
              Privacy Policy
            </a>
          </div>

          <p className="copyright mt5">
            Reproduction of material from any TractorOnline.com pages without
            permission is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
