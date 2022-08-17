import React, { useState, useEffect, useContext } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PT from "prop-types";
import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery,
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import { isMobile } from "react-device-detect";
import mapsBlack from "../../assets/svg/maps-black.svg";
import calender from "../../assets/svg/calendar-line.svg";
import meter from "../../assets/svg/speedometer.svg";
import transmission from "../../assets/svg/6-speed-manual-transmission.svg";
import petrol from "../../assets/svg/gas-station.svg";
import { productApis } from "../../API/ProductApis";
import { useParams } from "react-router";
import TractorClipart from "../../assets/svg/tractor-logo.svg";
import Icofont from "react-icofont";
import Buyers from "../../assets/img/buyers.png";
import FeaturedProducts from "../LandingPage/FeaturedProducts";
import Loader from "../../components/Common/Loader";
import { RootContext } from "../../context/RootContext";

export default function AddDetails() {
  const { id } = useParams();

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
  const [userProfile, setUserProfile] = useState("");
  const [isPhoneAgree, setIsPhoneAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [customReport, setCustomReport] = useState(false);
  const radioValuesArr = [
    {heading: "Duplicate", text: "A similar listing has previously been posted."},
    {heading: "Spam", text: "It's a Spam Ad"},
    {heading: "Wrong Contact Info", text: "Contact information is wrong."},
    {heading: "Sold Already", text: "This item has already been sold by the seller."},
    {heading: "Fake Ads", text: "The item is fake, the phone number is fake, the details are false, etc."},
    {heading: "Wrong Category", text: "This category is inappropriate for it."},
    {heading: "Prohibited/Explicit Content", text: "It contains vulgar language, pornographic or explicit content, etc."},
    {heading: "Other", text: ""}
  ]
  const { setShowLoader, websiteName } = useContext(RootContext);

  useEffect(() => {
    setShowLoader(true)
    handleGetProductDetails();
  }, [id]);

  const handleGetProductDetails = async () => {
    const result = await productApis.getProductDetails(id);
    if (result.error === false) {
      setProduct(result.data && result.data.data);
      setUserData(result.data && result.data.data.user);
      setUserProfile(result.data && result.data.profile);
      setShowLoader(false);
    }
  };

  function handleReport(e){
    if (e.target.value === "Other"){
      setCustomReport(true)
    }
    else{
      setCustomReport(false)
    }
  }

  const handleClose = () => {
    setShowModal(false);
    setShowReportModal(false);
  }

  function phoneAgree(){
    setIsPhoneAgree(true)
    setShowModal(false)
  }

  function phoneAgreeModalHandle(){
    if (!isPhoneAgree){
      setShowModal(true)
    }
  }

  return (
    //sidebar
    <div className="addDetails pt-3">
      <Loader />
      <div className="remove-section">

        <div className="container">
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
                    <a href="/" className="d-flex">
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
                <div className="right-img pull-right cover-photo-zoom">
                      <img
                        alt="Tractor Inspection Rate"
                        src={product.cover_photo_path}
                        width="100%"
                        height="100%"
                      />
                    </div>
                <div className="imageGallery">
                  <div className="content">
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
                {/* after image gallery 
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
                </table>*/}
                {/* car details */}
                <div className="mt-4">
                  <h3 className="mt-3">Product Information:</h3>
                  <div className="row">
                    {product.extra_fields &&
                      Object.entries(product.extra_fields)
                        .length > 0 ? (
                        <>
                          {product.extra_fields &&
                            Object.entries(
                              product.extra_fields
                            ).map((item, i) => {
                              return (
                                <div className="col-lg-6 carDetail">
                                  <div className="borderTop d-flex">
                                  <b>{item[0]}:</b>
                                  <p className="ml-2">{item[1]}</p>
                                  </div>
                                </div>
                              );
                            })}
                        </>
                      ) : (
                        <div className="text-danger text-center">
                          No Record Found...
                        </div>
                    )}
                  </div>
                </div>
                <h3 className="mt-3">Product Description:</h3>
                <p>
                  {
                    product.description ?
                      <p>{product.description}</p>
                    :
                      <strong className="text-danger">No Description</strong>
                  }
                </p>
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

                  <div 
                    className={`btn  ${ isPhoneAgree ? "phoneNumberDisabledBtn" : "btn-success" } btn-block btn-large buttonDiv`}
                    onClick={phoneAgreeModalHandle}
                  >
                    <span className="d-flex">
                      <Icofont
                        icon="phone"
                        className="icofont-2x mt-1"
                      />
                      <div className="ml-3">
                        {
                          isPhoneAgree ?
                          <h3 className={`ml-1`}>{product.phone_no}</h3>
                          :
                            <div>
                              <span className={`ml-1 ${ isPhoneAgree ? "" : "phone_no_truncate"}`}>{product.phone_no}</span>
                              <div>Show Phone Number</div>
                            </div>
                        }
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              {/* second Box */}
              <div className="sellerInfoBox bg-white p-4 mt-5">
                <div className="sellerInfoBoxHeading mb-2">
                  Seller Information
                </div>
                <div className="d-flex align-items-center">
                  <div className="col-md-4">
                    <Image
                      src={userProfile}
                      height="70px"
                      width="70px"
                      alt="No Profile Image"
                      className="mt-2 rounded-circle"
                    />
                  </div>
                  <div className="col-md-8">
                    <div><strong>{ userData && userData.name }</strong></div>
                    <div>Member Since { userData && userData.created_at}</div>
                  </div>
                </div>
              </div>

              {/* third box */}
              <div className="safetyTipsBox bg-white p-4 mt-5">
                <div className="tipsInfoBoxHeading mb-2">
                  Transactional safety tips{" "}
                </div>
                <div className="row">
                  <ol className="ml-3">
                    <li>Meet the seller in a safe area.</li>
                    <li>There should be no cash transactions.</li>
                    <li>Be wary of offers that seem unrealistic.</li>
                  </ol>
                </div>
              </div>
              <button
                className=" btn btn-outline-danger btn-block btn-large mt-2 d-flex"
                onClick={() => setShowReportModal(true)}
              >
                <Icofont
                  icon="exclamation-circle"
                  className="icofont-2x mt-1"
                />
                <h5 className="mt-1 ml-3">Report This Ad</h5>
              </button>
              <div className="sellAdd clearfix text-center p20 mt-70">
                <img
                  alt="Post an Ad"
                  src={TractorClipart}
                  height="80px"
                  width="80px"
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
                    Sell Your Tractor
                  </a>
                  <img
                    alt="Post an Ad Right"
                    src="https://wsa4.pakwheels.com/assets/sell-ad-point-right-630620add9bbdd27360acdfcf98d0608.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Report About Ad Modal*/}
          <Modal size="lg" show={showReportModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tell us what is wrong with this ad.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {radioValuesArr.map( (item, i) => {
                  return(
                    <div key={i}>
                      <input type="radio" className="report-radio-size" id={item.heading} name="report-radio" value={item.heading} onChange={(e) => {handleReport(e)}} />
                      <label for={item.heading} className="ml-2" ><h6><strong>{item.heading}: </strong>{item.text}</h6></label>
                    </div>
                    )
                  })}
                  {customReport ?
                    <>
                      <Form.Control
                        name="description"
                        as="textarea"
                        rows={3}
                        placeholder="Reason of Report"
                        />
                    </>
                  :
                    null
                  }
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Report
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Show Phone Number Modal*/}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Body>
              <div className="d-flex">
                <Icofont
                  icon="close-line"
                  className="icofont-2x ml-auto cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <div className="text-center">
                <Image src={Buyers} alt="Logo" height="80px" width="80px" />
              </div>
              <h4 className="text-center">
                Advice for Safe Dealing
              </h4>
              <div className="">
                <div className="row my-3">
                  <div className="col-1 ml-auto">
                    <Icofont
                      icon="not-allowed"
                      className="icofont-2x"
                    />
                  </div>
                  <div className="col-6 mr-auto">
                    <strong>Never pay for anything in advance.</strong>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-1 ml-auto">
                    <Icofont
                      icon="code-not-allowed"
                      className="icofont-2x"
                    />
                  </div>
                  <div className="col-6 mr-auto">
                    <strong>Keep your personal details to yourself.</strong>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-1 ml-auto">
                    <Icofont
                      icon="flag"
                      className="icofont-2x"
                    />
                  </div>
                  <div className="col-6 mr-auto">
                    <strong>Inform TractorOnline about any untrustworthy users.</strong>
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="primary" onClick={phoneAgree}>
                    Continue
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className="bg-white my-4">
          <div className="container-lg py-4 ">
            <FeaturedProducts
              title={`SIMILAR ADS`}
              link={``}
              prodCategoryId={product.product_category_id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
