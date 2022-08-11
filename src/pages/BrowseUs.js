import React from "react";
import { Link } from "react-router-dom";
import team from "../assets/img/team.jpg"
import tractorStock from "../assets/img/tractorStock.jpg"

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        TractorOnline.com, which was established in 2021, is now Pakistan's top
        automotive portal. Millions of Pakistanis have used TractorOnline.com to
        buy and sell tractors, read reviews and news about tractors, compare tractor prices,
        and get answers to all of their automotive needs since the site's
        establishment. Today, whenever somebody is looking for a service to meet
        their automobile needs, TractorOnline.com is the first name that comes
        to mind.
      </p>
      <p>
        More than 250 million pages are viewed on TractorOnline.com each year by
        its over 25 million visitors. Nearly 50% of Pakistan's internet users
        visited TractorOnline.com just last year to buy and sell over 400,000
        vehicles..&nbsp;
      </p>
      <img
        alt="About-cover-photo"
        className="mb30"
        src={tractorStock}
        style={{ width: "100%",height:"100%"}}
      />
      <p>
        With this kind of accomplishment, TractorOnline.com has become
        well-known in the international e-commerce and classifieds sectors and
        was able to raise USD 3.5 million in its initial round of funding.&nbsp;
      </p>
      <p>
        TractorOnline.com is not only a place where buyers and sellers can
        connect; it is also a full automotive platform with a forum for all
        automotive discussions and a blog that informs visitors of the most
        recent developments in the global and Pakistani auto industries.
        Additionally, there is a separate review section with information on all
        of the tractors offered in Pakistan.
      </p>
      <p>
        Our objective at TractorOnline.com is to innovate and continually
        improve the way people purchase and sell cars online in Pakistan. We
        feel it is our responsibility to offer our guests the greatest online
        experience. In order to enable our users feel a sense of community
        within the automotive industry, we strive to offer the most thorough
        automotive knowledge regarding Pakistan and the rest of the world. Our
        motto sums up our mission.:&nbsp;
      </p>
      <p className="text-center">
        <span className="blockquote">
          <strong>“THINK TRACTOR, THINK TRACTORONLINE!”</strong>
        </span>
      </p>
      <h3>The Team</h3>

      <div className="container">
        <div className="row">
          {/* {brandProducts &&
            brandProducts.map((item) => ( */}
          <div className="col-3 mt-3">
            <div className="category p-3">
              <Link to="/">
                <img
                  src={team}
                  alt="Card"
                  style={{ width: "100%", height: "160px" }}
                />

                <h5 className="nomargin">Name</h5>
                <p className="pl-2 border-radius">Lahore</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
