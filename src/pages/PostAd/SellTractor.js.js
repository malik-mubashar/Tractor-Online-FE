import React from "react";
import postAdLogo from "../../assets/img/postAd.png";
import postInspect from "../../assets/img/postInspection.png";
import Icofont from "react-icofont";
import { useHistory } from "react-router-dom";

const SellTractor = () => {
	const history =useHistory()
  return (
    <div className="sell-tractor mt-4 pt-3">
      <section>
        <div className="container">
          <div className="card my-4">
            <div>
              <h1 className="text-center my-4">
                Sell Your Tractor at the Best Price
              </h1>
              <ul className="pitching-widgets pre-sell-select">
                <li className="d-flex cursor-pointer">
                  <div className="col-1">
                    <input
                      checked="checked"
                      className="checkbox-size"
                      name="sell_option"
                      type="radio"
                    />
                  </div>
                  <div className="col-7">
                    <h3 className="">
                      Post your Ad on TractorOnline
                    </h3>
                    <ul className="list-unstyled fs14">
                      <li>
                        <Icofont
                          icon="tick-mark text-success"
                          className="icofont-2x"
                        />
                        Free Ad Posting in 3 Simple Steps
                      </li>
                      <li>
                        <Icofont
                          icon="tick-mark text-success"
                          className="icofont-2x"
                        />
                        Receive sincere bids from confirmed buyers.
                      </li>
                      <li>
                        <Icofont
                          icon="tick-mark text-success"
                          className="icofont-2x"
                        />
                        Sell Your Tractor Quickly and for the Highest Price
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <img alt="Post-ad-art" src={postAdLogo} width="220" />
                  </div>
                </li>
                <li>
                  <div className="d-flex cursor-not-allowed">
                    <div className="col-1">
                      <input
                        className="checkbox-size"
                        name="sell_option"
                        type="radio"
                        disabled="true"
                      />
                    </div>
                    <div className="col-7">
                        <h3>
                          Try TractorOnline Sell It For Me
                        </h3>
                        <ul className="list-unstyled fs14">
                          <li>
                            <Icofont
                              icon="tick-mark text-success"
                              className="icofont-2x"
                            />
                            Dedicated Sales Expert to Sell Your Tractor
                          </li>
                          <li>
                            <Icofont
                              icon="tick-mark text-success"
                              className="icofont-2x"
                            />
                            We Bargain on Your Behalf and Share the Best Offer
                          </li>
                          <li>
                            <Icofont
                              icon="tick-mark text-success"
                              className="icofont-2x"
                            />
                            We ensure Safe &amp; Secure Transaction
                          </li>
                        </ul>
                        {/*<p className="generic-red mt10 fs12">
                          * Service available only in Karachi, Lahore, Islamabad
                          and Rawalpindi
                        </p>*/}
                        <h2 className="text-danger mt-4">Coming Soon...</h2>
                    </div>
                    <div className="col-4">
                      <img
                        alt="Pitching-sifm-widget"
                        src={postInspect}
                        width="220"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <input
                  name="Submit"
                  value="Continue"
                  className="btn btn-success btn-lg"
									type="submit"
									onClick={()=>{history.push('/used-tractor/sell/post-ad')}}
                />
                <p className="text-danger mt-3">
                  * By clicking "Continue" you are agreeing to the{" "}
                  <span
                    className="text-decoration-underline text-danger cursor-pointer"
                    onClick={()=>{history.push('/terms')}}
                  >
                    terms of service
                  </span>
                  {" "}and{" "}
                  <span
                    className="text-decoration-underline text-danger cursor-pointer"
                    onClick={()=>{history.push('/privacy-policy')}}
                  >
                    privacy policy.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellTractor;
