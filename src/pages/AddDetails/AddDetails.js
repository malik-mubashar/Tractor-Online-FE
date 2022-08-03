import React, { useState, useEffect } from "react";
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
// import ImageGallery from "react-image-gallery";
import PT from "prop-types";
import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery,
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import Footer from "../LandingPage/Footer";
import { isMobile } from "react-device-detect";
import cellPhoneSvg from "../../assets/svg/cellPhone.svg";
import mapsBlack from "../../assets/svg/maps-black.svg";
import call from "../../assets/svg/call.svg";
import email from "../../assets/svg/email.svg";
import profilePicture from "../../assets/svg/no-profile-picture.svg";
import facebookSvg from "../../assets/svg/facebook-round-color.svg";
import mobileRounded from "../../assets/svg/mobile-phone-round.svg";
import calender from "../../assets/svg/calendar-line.svg";
import meter from "../../assets/svg/speedometer.svg";
import transmission from "../../assets/svg/6-speed-manual-transmission.svg";
import petrol from "../../assets/svg/gas-station.svg";
import radio from "../../assets/svg/radio-fm.svg";
import airBag from "../../assets/svg/car-seat-belt.svg";
import carDoor from "../../assets/svg/car-door.svg";
// import carAC from "../../assets/svg/car-seat-belt.svg";
import flag from "../../assets/svg/black-flag.svg";
import remoteKey from "../../assets/svg/remote-car-key.svg";
import key from "../../assets/svg/vehicle-key.svg";
import carAC from "../../assets/svg/air-conditioner.svg";
import steering from "../../assets/svg/steering-wheel.svg";
import tick from "../../assets/svg/tick-symbol.svg";
// import cellPhoneSvg from "../../assets/svg/cellPhone.svg";
import { productApis } from "../../API/ProductApis";
import { useParams } from "react-router";

export default function AddDetails() {
  const { id } = useParams();
  console.log("idasd", id);

  var GROUP2 = [
    
  ];

  const PhotoItem = ({ image, thumb, group }) => (
    <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} style={{ width: "100%" }} />
      </LightgalleryItem>
    </div>
  );
  PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired,
  };

  const [visible, setVisible] = useState(true);
  const [userData, setUserData] = useState("");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    handleGetProductDetails();
  }, []);
  const handleGetProductDetails = async () => {
    const result = await productApis.getProductDetails(id);
    if (result.error === false) {
      setProduct(result.data && result.data.data);
      setUserData(result.data && result.data.data.user)
      console.log("showproducts", result.data && result.data.data);
      GROUP2 = result.data.data.active_images_path;
    }
  };
  return (
    //sidebar
    <div className="addDetails">
      <div className="remove-section">

        <div className="container">
          <img
            style={{ width: "100%" }}
            alt="add"
            src={"https://tpc.googlesyndication.com/simgad/5923361064753698031"}
          />
          <div className="breadcrumbWrapper">
            <ul className="breadcrumb bread">
              <li>
                <a>
                  <span itemProp="name">Home /</span>
                </a>
              </li>
              <li>
                <a>
                  <span itemProp="name">Used Tractor /</span>
                </a>
              </li>
              <li>
                <span itemProp="name">Used Tractor For Sale In Pakistan</span>
              </li>
            </ul>
          </div>

          <div className="row">
            {/* left side */}
            <div className="col-lg-8 col-md-8">
              <div className="bg-white p-4">
                <div className="">
                  <h3>{product.title} </h3>
                  <p className="detail-sub-heading d-flex">
                    <a href="#" className="d-flex">
                      <Image
                        src={mapsBlack}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center m-auto"
                      />{" "}
                      {product.city}
                    </a>
                  </p>
                </div>
                <div className="right-img pull-right">
                      <img
                        alt="Tractor Inspection Rate"
                        src={product.cover_photo_path}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  
                <div className="imageGallery">
                  <div className="content">
                    {/* <button
                      className="button is-light"
                      style={{
                        position: "absolute",
                      }}
                      onClick={() => setVisible(!visible)}
                    >
                      {visible ? (
                        <i className="fas fa-eye-slash" />
                      ) : (
                        <i className="fas fa-eye" />
                      )}
                    </button> */}

                    <div>
                      {visible ? (
                        <LightgalleryProvider
                          onBeforeOpen={() => console.info("onBeforeOpen")}
                          onAfterOpen={() => console.info("onAfterOpen")}
                          onSlideItemLoad={() =>
                            console.info("onSlideItemLoad")
                          }
                          onBeforeSlide={() => console.info("onBeforeSlide")}
                          onAfterSlide={() => console.info("onAfterSlide")}
                          onBeforePrevSlide={() =>
                            console.info("onBeforePrevSlide")
                          }
                          onBeforeNextSlide={() =>
                            console.info("onBeforeNextSlide")
                          }
                          onDragstart={() => console.info("onDragstart")}
                          onDragmove={() => console.info("onDragmove")}
                          onDragend={() => console.info("onDragend")}
                          onSlideClick={() => console.info("onSlideClick")}
                          onBeforeClose={() => console.info("onBeforeClose")}
                          onCloseAfter={() => console.info("onCloseAfter")}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* {GROUP2.map((p, idx) => ( */}
                            {product&&product.active_images_path&& product.active_images_path.map((p, idx) => (
                                <PhotoItem key={idx} image={p} group="group2" />
                              ))}
                          </div>
                        </LightgalleryProvider>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/* after image gallery */}
                <table
                  width="100%"
                  className="table table-bordered text-center table-engine-detail fs16"
                >
                  <tbody>
                    <tr>
                      <td>
                        <span className="mx-auto mt-3">
                          <Image
                            src={calender}
                            height="20px"
                            width="30px"
                            alt="Profile Image"
                            className="d-flex justify-content-center "
                          />
                          <p>
                            <a
                              href="/used-cars/2021/651422"
                              title="Year 2021 Cars for sale in Pakistan"
                            >
                              2021
                            </a>
                          </p>
                        </span>
                      </td>
                      <td>
                        <span className="mx-auto mt-3">
                          <Image
                            src={meter}
                            height="20px"
                            width="30px"
                            alt="Profile Image"
                            className="d-flex justify-content-center m-auto"
                          />{" "}
                          <p>4,100 km</p>
                        </span>
                      </td>
                      <td>
                        <span className="mx-auto mt-3">
                          <Image
                            src={petrol}
                            height="20px"
                            width="30px"
                            alt="Profile Image"
                            className="d-flex justify-content-center m-auto"
                          />{" "}
                          <p>
                            <a
                              href="/used-cars/petrol/57338"
                              title="Petrol Cars for Sale in Pakistan"
                            >
                              Petrol
                            </a>
                          </p>
                        </span>
                      </td>
                      <td>
                        <span className="mx-auto mt-3">
                          <Image
                            src={transmission}
                            height="20px"
                            width="30px"
                            alt="Profile Image"
                            className="d-flex justify-content-center m-auto"
                          />{" "}
                          <p>
                            <a
                              href="/used-cars/manual/2112427"
                              title="Manual Cars for Sale in Pakistan"
                            >
                              Manual
                            </a>
                          </p>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* inception add */}
                <div className="inspection  clearfix mb40 ">
                  <div id="" className="row">
                    <div className="col-7">
                      <h6 className="mt0 mb10 title">
                        Never buy a used Tractor without{" "}
                        <strong className="generic-blue show fs24">
                          TractorOnline{" "}
                          <span className="generic-red">
                            Tractor Inspection<span></span>
                          </span>
                        </strong>
                      </h6>
                      <p className="fs18 mb10">
                        Over 200 checkpoints will be used to inspect the
                        tractor.{" "}
                      </p>
                      <ul className="list-unstyled list-inline fs16 mb15">
                        <li>
                          <i className="fa fa-tick generic-green"></i> Engine
                        </li>
                        <li>
                          <i className="fa fa-tick generic-green"></i>{" "}
                          Suspension
                        </li>
                        <li>
                          <i className="fa fa-tick generic-green"></i> Exterior
                        </li>
                        <li>
                          <i className="fa fa-tick generic-green"></i> Interior
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn-lg btn-success "
                        style={{ color: "white" }}
                      >
                        Inspection Schedule
                      </a>
                      <br />
                      <a
                        href="/products/tractoronline-inspection"
                        id=""
                        className="ib mt15 fs18"
                      >
                        Learn More
                      </a>
                    </div>
                    <div className="right-img pull-right">
                      <img
                        alt="Tractor Inspection Rate"
                        src={product.cover_photo_path}
                        width="266"
                      />
                    </div>
                  </div>
                </div>

                {/* car details */}
                <div className="mt-4">
                  <div className="row">
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Registered In</p>
                        <p> Punjab</p>
                      </div>
                    </div>
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Color In</p>
                        <p> White</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Assembly</p>
                        <p> Local</p>
                      </div>
                    </div>
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Engine Capacity</p>
                        <p> 660 cc</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Body Type</p>
                        <p> Hatchback</p>
                      </div>
                    </div>
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Last Updated:</p>
                        <p> Jun 09, 2022</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 carDetail">
                      <div className="borderTop d-flex">
                        <p> Ad Ref #</p>
                        <p> 6279348</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* car features */}
                <div className="carFeature">
                  <h5 className="mb-4 mt-3">Tractor Features</h5>
                  <div className="row mb-2">
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={radio}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      AM/FM Radio
                    </div>
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={airBag}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      Air Bags
                    </div>
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={carAC}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      Air Conditioning
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={key}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      Immobilizer Key
                    </div>
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={remoteKey}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      Keyless Entry
                    </div>
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={carDoor}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      Power Locks
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-4 d-flex">
                      <Image
                        src={steering}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      Power Steering
                    </div>
                  </div>
                </div>
                {/* Sellers comment */}
                <div className="sellersComment">
                  <h5 className="mb-4 mt-3">Tractor Specifications</h5>
                  <p>Model 2021 Dec Registered 2022 Mahindra</p>
                  <p>As new as a tractor, this is a brand new product.</p>
                  <p>There isn't a scratch on the tract.</p>
                  <p>Orignal Documents</p>
                  <p>Orignal 2 krys</p>
                </div>
              </div>

              {/*add at bottom  */}
              <div className="sellAdd clearfix text-center p20 mt-70">
                <img
                  alt="Post an Ad"
                  src="https://wsa4.pakwheels.com/assets/sell-car-bf334aeb9cf3001080a3e887d51a3b32.png"
                  title="Post an Ad"
                />

                <h3 className="title">
                  Post an ad for <span className="generic-red">FREE</span>
                </h3>
                <p className="mt10 mb5 fs16">
                  Sell it to tens of thousands of people in less time.{" "}
                </p>
                <div>
                  <img
                    alt="Post an Ad Left"
                    src="https://wsa4.pakwheels.com/assets/sell-ad-point-left-fcc7bca4d40628d7945426ecf5a2ef00.png"
                  />
                  <a
                    style={{ color: "white" }}
                    href="/used-tractor/sell"
                    className="btn btn-success sign-in-comp"
                  >
                    Sell Your Car
                  </a>
                  <img
                    alt="Post an Ad Right"
                    src="https://wsa4.pakwheels.com/assets/sell-ad-point-right-630620add9bbdd27360acdfcf98d0608.png"
                  />
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="col-lg-4 col-md-8 rightSidebar">
              {/* first box */}
              <div className="bg-white p-4">
                <div className="">
                  <div className="priceBox">
                    <strong className="genericGreen">
                      PKR {product.price}
                    </strong>
                  </div>

                  <div className="btn btn-large btn-block btn-success buttonDiv">
                    <span className="d-flex">
                      <Image
                        src={call}
                        height="20px"
                        width="30px"
                        alt="Profile Image"
                        className="d-flex justify-content-center"
                      />
                      <div>
                        <span className="ml-1">03090814...</span>
                        <div>Show Phone Number</div>
                      </div>
                    </span>
                  </div>

                  <div className="btn btn-link-outline btn-lg btn-block sendMessageButton mt-20 d-flex">
                    <Image
                      src={email}
                      height="20px"
                      width="30px"
                      alt="Profile Image"
                      className="d-flex justify-content-center "
                    />{" "}
                    Send Message
                  </div>
                </div>
              </div>

              {/* second Box */}
              <div className="sellerInfoBox bg-white p-4 mt-5">
                <div className="sellerInfoBoxHeading mb-2">
                  Seller Information
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <Image
                      src={profilePicture}
                      height="70px"
                      width="120px"
                      alt="Profile Image"
                      className="mt-2"
                    />
                  </div>
                  <div className="col-md-9">
                    <div>{ userData.name }</div>
                    <div>Member Since { userData.created_at && userData.created_at.split("T")[0]}</div>
                  </div>
                </div>
                <div className="justify-content-center d-flex mt-3 mb-3">
                  <Image
                    src={mobileRounded}
                    height="40px"
                    width="80px"
                    alt="Profile Image"
                    className="d-flex justify-content-center"
                  />
                  <Image
                    src={email}
                    height="40px"
                    width="80px"
                    alt="Profile Image"
                    className="d-flex justify-content-center"
                  />
                  <Image
                    src={facebookSvg}
                    height="40px"
                    width="80px"
                    alt="Profile Image"
                    className="d-flex justify-content-center"
                  />
                </div>
                <div className="justify-content-center">
                  <h6>See if</h6>
                  <a href="google.com">Connect with Facebook</a>
                </div>
              </div>

              {/* third box */}
              <div className="safetyTipsBox bg-white p-4 mt-5">
                <div className="tipsInfoBoxHeading mb-2">
                  Transactional safety tips{" "}
                </div>
                <div className="row">
                  <ol>
                    <li>Meet the seller at a secure location.</li>
                    <li>Cash transactions should be avoided.</li>
                    <li>Beware of proposals that are too good to be true.</li>
                  </ol>
                </div>
              </div>
              <a
                href="google.com"
                className="d-flex justify-content-center mb10 mt30 btn btn-link-outline btn-sm btn-block fs14 notifyAsSold mt-3"
              >
                <Image
                  src={tick}
                  height="20px"
                  width="40px"
                  alt="Profile Image"
                  className=""
                />
                Notify As Sold
              </a>
              <a
                href="google.com.PK"
                className="d-flex justify-content-center mb10 mt30 btn btn-link-outline btn-sm btn-block fs14 notifyAsSold mt-2"
              >
                <Image
                  src={flag}
                  height="20px"
                  width="40px"
                  alt="Profile Image"
                  className=""
                />
                Report This Ad
              </a>
            </div>
          </div>
          <div className="similarAd">
            <div>
              <h3>SIMILAR ADS</h3>
            </div>
            <div className={`${isMobile ? "" : "d-flex"} mt-2`}>
              {[1, 2, 3, 4].map((x) => {
                return (
                  <>
                    <div className="listCard d-block">
                      <Image
                        src={
                          "https://images.freeimages.com/images/large-previews/bf5/tractor-1533535.jpg"
                        }
                        height="200px"
                        width="150px"
                        alt="Profile Image"
                        className=""
                      />
                      <div>Suzuki Alto Vxr</div>
                      <div>PKR 1915000</div>
                      <div>Lahore</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={`notifyMe mt-4 mb-4 ${isMobile ? "" : "d-flex"}`}>
            <div className="col-lg-3" style={{ color: "#233d7b" }}>
              <Image
                src={cellPhoneSvg}
                height="30px"
                width="20px"
                alt="Profile Image"
                className=""
              />
              Notify Me
              <div>
                Set up a search alert for Mahindra in Lahore, and we'll send you
                relevant results.
              </div>
            </div>
            <div className="col-lg-3">
              Email
              <input className="form-control" type="email" />
            </div>
            <div className="col-lg-3">
              Frequency
              <select className="form-control mb-2" id="sortby" name="sortby">
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
            <div className="col-lg-3">
              <input
                className="btn btn-info btn-large btn-block btn-create mt-2"
                name="commit"
                style={{ display: "inline-block" }}
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
