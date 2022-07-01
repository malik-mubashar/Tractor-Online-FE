import React from "react";

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
        <div className="">
          <div className="row col-12">
            <div className="col-md-8 ml-auto">
              <div className="row">
                <div className="col-md-3">
                  <ul
                    className="nomargin footer-links list-unstyled"
                    id="footer-Make"
                  >
                    <li className="mt-1">
                      <h5 className="text-white">Tractors By Make</h5>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        AGTL Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        IMT Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Millat Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Belarus Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Messy Ferguson Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        New Holland Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Orient Automotive Tractors for Sale
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul
                    className="nomargin footer-links list-unstyled"
                    id="footer-City"
                  >
                    <li className="mt-1">
                      <h5 className="text-white">Tractors By City</h5>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Lahore
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Karachi
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Islamabad
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Rawalpindi
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Peshawar
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Faisalabad
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Multan
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Gujranwala
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Sialkot
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nomargin footer-links list-unstyled">
                    <li className="mt-1">
                      <h5 className="text-white">Explore TractorOnline</h5>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Used Tractors
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        New Tractors
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Parts &amp; Accessories
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        New Agriculture machinery
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Seeds &amp; Fertilizers
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Plants &amp; Horticulture
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <ul className="nomargin footer-links list-unstyled">
                    <li className="mt-1">
                      <h5 className="text-white">TractorOnline.com</h5>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        About TractorOnline.com
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Our Products
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Advertise With Us
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        How To Pay
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        FAQs
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Refunds &amp; Returns
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Careers
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              <div className="col-md-2 mr-auto">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nomargin footer-links list-unstyled">
                      <li className="mt-1">
                        <h5 className="text-white">Sell On TractorOnline</h5>
                      </li>
                      <li className="mt-1">
                        <a href="/" className="footer-link">
                          Sell Your Tractors
                        </a>
                      </li>
                      <li className="mt-1">
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
