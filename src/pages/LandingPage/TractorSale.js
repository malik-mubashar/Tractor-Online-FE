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
      <div className="card shadow bg-white py-4 ml-4 mr-1 mt-4 mb-4" style={{borderRadius:'8px'}}>
        <div className="home-widgets row mb-4">
          <div className="mt-3 w-full-lg">
              <h4 class="text-center mb-2">
                {websiteName} is the best place to sell your tractor for the
                best price.
              </h4>
            </div>
          <div className="col-lg-6 col-12 mt-2 px-5">
            <div className="card px-3 py-4" style={{border:'0.5px solid lightgray', borderRadius:'6px'}}>
              <h5>Place an ad on {websiteName}</h5>
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
                  <i className="fa fa-tick"></i>Sell your tractor as soon as
                  possible for the best price
                </li>
              </ul>
              {localStorage.currentUser === undefined ? (
                <>
                  <LoginModel
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setModalShow={setModalShow}
                    redirect="/product/sell"
                  />
                  <button
                    onClick={() => setModalShow(true)}
                    className="btn btn-danger btn text-white"
                  >
                    Place Your Ad Here
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/product/sell"
                    className="btn btn-danger btn text-white"
                  >
                    Place Your Ad Here
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-2 px-5">
            <div className="card px-3 py-4" style={{border:'0.5px solid lightgray', borderRadius:'6px'}}>
              <h5>Sell It For Me on {websiteName}</h5>
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
              <span className="btn btn-info btn text-white">
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
