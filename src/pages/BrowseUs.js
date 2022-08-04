import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Founded in 2003, TractorOnline.com has become Pakistan’s #1 automotive
        portal. Since its inception, TractorOnline.com has helped millions of
        Pakistanis buy &amp; sell automobiles, read automotive reviews and news,
        check automotive prices and find solutions to all of their automotive
        needs. Today, TractorOnline.com is the first name that comes to mind if
        anyone is looking for a solution to their automotive needs.
      </p>
      <p>
        TractorOnline.com gets over 25 million visitors annually who view more
        than 250 million pages on the website. In last year alone, close to 50%
        of Pakistan’s internet population visited TractorOnline.com to buy and
        sell over 400,000 vehicles.&nbsp;
      </p>
      <img
        alt="About-cover-photo"
        className="mb30"
        src="https://wsa3.pakwheels.com/assets/about-us/about-cover-photo-f430cd6d72868ef1635fa565d0214048.jpg"
        style={{ width: "100%" }}
      />
      <p>
        This kind of success has made TractorOnline.com a prominent name in the
        global e-commerce and classifieds sectors and helped raise USD 3.5
        million in its first round of funding.&nbsp;
      </p>
      <p>
        TractorOnline.com is not only a hub where buyers and sellers can
        interact, but it is also a comprehensive automotive portal with a forum
        dedicated to all automotive discussions, a blog that keeps the users up
        to date with the latest happenings in the auto industry of Pakistan and
        the world at large. There is also a separate review section for all the{" "}
        tractors available in Pakistan and much more!
      </p>
      <p>
        At TractorOnline.com, we believe that it is our duty to provide our
        visitors with the best online experience and this is what our mission
        speaks of - to revolutionize and continuously add value to the way
        people buy and sell vehicles online, in Pakistan. We aim to provide our
        users with the most comprehensive automotive knowledge with respect to
        Pakistan and the world alike and help them develop a sense of belonging
        in the automotive community. Our motto reflects our vision:&nbsp;
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
              <div className="col-3 mt-3" >
                <div className="category p-3">
                  <Link to="/">
                  <img
                        src="https://wsa1.pakwheels.com/assets/about-us/hanif-bhatti-ac556b9b565888fff8b92c93f868f267.jpg"
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
