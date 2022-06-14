import React, { useState } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  Image,
} from "react-bootstrap";

// import card_thumb_one from '../../assets/img/product/card_thumb_one.jpg'
// import card_thumb_one from '../../assets/img/card-thumb-one.jpg';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import * as Icon from "react-feather";
import { useHistory } from "react-router-dom";
import CustomPopover from "./CustomPopover";

export default function SearchListing() {
  const [showNumberWarning, setShowNumberWarning] = useState(true);
  let history = useHistory();
  const [openShowPhone, setOpenShowPhone] = useState(false);
  const [gridOrList, setGridOrList] = useState("list");
  const onShowPhoneModelClose = () => {
    setOpenShowPhone(false);
    console.log("ping");
  };
  console.log(openShowPhone);

  return (
    <>
      <Col sm={12} lg={12} xl={12}>
        <div className="topSorting">
          <div className="organize-results">
            <div className="col-md-8 d-flex" style={{ marginTop: "10px" }}>
              <span className="sort-by-text mt-2 mr-2">Sort By: </span>
              <select
                className="form-control col-7 mb-2"
                id="sortby"
                name="sortby"
                onchange="callPjax('/used-tractors/search/-/?sortby=' + $(this).val())"
              >
                <option value="bumped_at-desc" selected="selected">
                  Updated Date: Recent First
                </option>
                <option value="bumped_at-asc">
                  Updated Date: Oldest First
                </option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="model_year-desc">
                  Model Year: Latest First
                </option>
                <option value="model_year-asc">Model Year: Oldest First</option>
                <option value="mileage-asc">Mileage: Low to High</option>
                <option value="mileage-desc">Mileage: High to Low</option>
              </select>
            </div>

            {!isMobile && (
              <div className="col-md-4 mt5 text-right">
                <div className="btn-group" data-toggle="buttons-radio">
                  <button
                    onClick={() => setGridOrList("list")}
                    type="button"
                    id="list"
                    className="sortButtonList"
                  >
                    List
                  </button>
                  <button
                    onClick={() => setGridOrList("grid")}
                    type="button"
                    id="grid"
                    className="sortButtonGrid"
                  >
                    Grid
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          // className="searchList"
          className={gridOrList === "list" ? "" : "row"}
        >
          <>
            {[1, 2, 3, 4].map(() => {
              return (
                <>
                  <div className={`${gridOrList === "list" ? "" : "col-4"}`}>
                    <div
                      className={`listCard mb-3 ${
                        gridOrList === "list" ? "list" : "d-block"
                      } ${isMobile ? "d-block" : null}`}
                    >
                      <img
                        // className="card-img-top"
                        // className={gridOrList==='list'?'list':'grid'}
                        src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/01/full/1590987638-6809.png"
                        alt="Card"
                        style={{ width: "200px", height: "140px" }}
                      />
                      <div style={{ width: "100%" }}>
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <h5
                            onClick={() => {
                              history.push("/addDetails");
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            Toyota Prado TX Limited 2.7 2008
                          </h5>
                          <h5>PKR 123 lacs</h5>
                        </div>
                        <p className="card-text">Karachi</p>
                        <p>
                          2008 | 111,123 km | Petrol | 2700cc | Automatic | 4.5
                          Grade
                        </p>
                        <div
                          className={`card-text ${
                            isMobile
                              ? ""
                              : gridOrList === "list"
                              ? "d-flex"
                              : ""
                          } `}
                          style={{ justifyContent: "space-between" }}
                        >
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                          <div className="d-flex">
                            <button className="mr-3" type="submit">
                              <Icon.Heart
                                style={{ height: "14px" }}
                                className="icon"
                              />
                            </button>
                            {showNumberWarning ? (
                              <button
                                onClick={() => {
                                  setOpenShowPhone(true);
                                  setShowNumberWarning(false);
                                }}
                                className="btn-success"
                                type="submit"
                              >
                                <Icon.PhoneCall
                                  style={{ height: "14px" }}
                                  className="icon"
                                />
                                Show Phone Number
                              </button>
														) : (
																<>
                             
																	<CustomPopover />
																	</>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        </div>
        <div className="pagination">
          <span className="mx-auto">
            1&nbsp;2&nbsp;3&nbsp;4&nbsp;&nbsp;...&nbsp;&nbsp;Next
            &nbsp;&nbsp;Last
          </span>
        </div>
        <div className="sellAdd clearfix text-center p20 mt-70">
          <img
            alt="Post an Ad"
            src="https://wsa4.pakwheels.com/assets/sell-car-bf334aeb9cf3001080a3e887d51a3b32.png"
            title="Post an Ad"
          />

          <h3 className="title">
            Post an ad for <span className="generic-red">FREE</span>
          </h3>
          <p className="mt10 mb5 fs16">Sell it faster to thousands of buyers</p>
          <div>
            <img
              alt="Post an Ad Left"
              src="https://wsa4.pakwheels.com/assets/sell-ad-point-left-fcc7bca4d40628d7945426ecf5a2ef00.png"
            />
            <a
              href="/used-tractors/sell"
              className="btn btn-success sign-in-comp"
              onclick="trackEvents('Used tractors', 'Add Car', 'From - Search');"
            >
              Sell Your Car
            </a>
            <img
              alt="Post an Ad Right"
              src="https://wsa4.pakwheels.com/assets/sell-ad-point-right-630620add9bbdd27360acdfcf98d0608.png"
            />
          </div>
        </div>
      </Col>

      {/* Modal */}
      <Modal show={openShowPhone} onHide={onShowPhoneModelClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title ">
            Tips for safe deal
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="justify-content-center mx-auto">
          <Image
            src="https://wsa4.pakwheels.com/assets/tips-for-safe-deal-00805d1034ee7600820049c852bd6163.svg"
            height="40px"
            width="60px"
            alt="Profile Image"
            className="d-flex justify-content-center m-auto"
          />
          <p className="">
            <Image
              src="https://wsa1.pakwheels.com/assets/tip-for-safe-deal-1-a3f472bbbc5249edca9fd01f449f98c3.svg"
              height="40px"
              width="60px"
              alt="Profile Image"
              className="mx-auto"
            />
            Never make payments in advance.
          </p>
          <p className="">
            <Image
              src="https://wsa3.pakwheels.com/assets/tip-for-safe-deal-2-b8b8dded80b193b4de603dd617fd42db.svg"
              height="40px"
              width="60px"
              alt="Profile Image"
              className="mx-auto"
            />
            Do not share unnecessary personal information.
          </p>
          <p className="">
            <Image
              src="https://wsa4.pakwheels.com/assets/tip-for-safe-deal-3-1c4abd79f231a47a7c82cac9fa27e543.svg"
              height="40px"
              width="60px"
              alt="Profile Image"
              className="mx-auto"
            />
            Report suspicious users to Pakwheels.
          </p>
          <p className="">
            <Image
              src="https://wsa3.pakwheels.com/assets/tip-for-safe-deal-4-fd729119f3d0eab6cf43ca7c7f27b6ce.svg"
              height="40px"
              width="60px"
              alt="Profile Image"
              className="mx-auto"
            />
            Use PakWheels Car Inspection Service to avoid fraud.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
