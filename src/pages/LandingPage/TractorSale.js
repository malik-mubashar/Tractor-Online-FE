import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { RootContext } from "../../context/RootContext";
import LoginModel from "../LoginModel";

const TractorSaleAd = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { websiteName } = useContext(RootContext);

  return (
    <>
      <div className="bg-white">
        <div className="container-lg py-3">
          <div className="home-widgets row">
            <div className="home-widgets-title w-full-lg">
              <h3>
                {websiteName} is the best place to sell your tractor for the
                best price.
              </h3>
            </div>
            <div className="col-lg-6 col-12 mt-4 line or">
              <h2>Place an ad on {websiteName}</h2>
              <ul>
                <li>
                  <i className="fa fa-tick"></i>In three simple steps, you can
                  post your free ad.
                </li>
                <li>
                  <i className="fa fa-tick"></i>Get Genuine Offers from Trusted
                  Vendors
                </li>
                <li>
                  <i className="fa fa-tick"></i>Sell your car as soon as
                  possible for the best price
                </li>
              </ul>
              {localStorage.currentUser === undefined ? (
                <>
                  <LoginModel
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    redirect="/product/sell"
                  />
                  <button
                    onClick={() => setModalShow(true)}
                    className="btn btn-danger btn-lg text-white"
                  >
                    Place Your Ad Here
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/product/sell"
                    className="btn btn-danger btn-lg text-white"
                  >
                    Place Your Ad Here
                  </NavLink>
                </>
              )}
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <h2>Sell It For Me on {websiteName}</h2>
              <ul>
                <li>
                  <i className="fa fa-tick"></i>Your Tractor Will Be Sold by a
                  Dedicated Sales Expert
                </li>
                <li>
                  <i className="fa fa-tick"></i>We negotiate on your behalf and
                  share the best deal with you.
                </li>
                <li>
                  <i className="fa fa-tick"></i>We guarantee a safe and secure
                  transaction.
                </li>
              </ul>
              <span className="btn btn-info btn-lg text-white">
                Coming Soon....
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TractorSaleAd;
