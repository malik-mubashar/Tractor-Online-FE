import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Icofont from "react-icofont";
import { useHistory } from "react-router-dom";
import { prodApi } from "../../API/ProdCategoriesApis";
import streeingWheel from "../../assets/svg/steering-wheel.svg";

const MobileDropDown = ({ show, setShow }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [productCategories, setProductCategories] = useState();
  let history = useHistory();
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }
  useEffect(() => {
    handleGetAllCategories();
  }, []);

  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
  };
  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="more">
            <div className="nav-container">
              <nav className="MuiList-root MuiList-padding css-1ontqvh">
                <div className="profile-header">
                  <h2 className="mt0 mb5">Profile</h2>
                  <p className="fs12 mb10">
                    Sign in to start selling or buying vehicles
                  </p>
                  <button className="btn btn-outline btn-lg">Sign Up</button>
                  <button className="btn btn-primary btn-lg">Sign In</button>
                </div>

                <h3>Categories</h3>
                {productCategories &&
                  productCategories.map((item, i) => {
                    return (
                      <div key={i}>
                        <li className="list">
                          <span
                            className="user-pic"
                            onClick={() => history.push(item.link)}
                          >
                            {item.active_image_path !== undefined ? (
                              <Image
                                src={item.active_image_path}
                                alt="icon"
                                roundedCircle
                                width={"24px"}
                              />
                            ) : (
                              <Image
                                src={streeingWheel}
                                alt="icon"
                                roundedCircle
                                width={"34px"}
                              />
                            )}
                          </span>

                          <div className="nav-list-super mob-drop">
                            <span className=" nav-list-item  css-1i35o1r">
                              {item.title}
                            </span>
                          </div>
                          {item.product_category_heads.length > 0 ? (
                            <>
                              <Icofont
                                icon="caret-down"
                                height="10px"
                                width="10px"
                                className="icofont ml-1"
                              />
                            </>
                          ) : null}
                        </li>
                        {/* {item.product_category_heads ?(
                          <>
                            <div className="nav-list-super mob-drop">
                            <span className=" nav-list-item  css-1i35o1r">
                            {item.product_sub_categories !== null &&
                            item.product_sub_categories !== undefined &&
                            item.product_sub_categories.map((y, j) => {
                              return <p key={j}>{y.title}</p>;
                            })}
                            </span>
                          </div>
                          </>
                        ):null} */}
                        {/* <li className="list">
                          <img
                            src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/New-Car.svg"
                            width="20"
                          />
                          <div className="nav-list-super mob-drop">
                            <span className="nav-list-item  css-1i35o1r">
                              New Tractors
                            </span>
                          </div>
                        </li>

                        <li className="list">
                          <img
                            src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Parts-Line.svg"
                            width="20"
                          />
                          <div className="nav-list-super mob-drop">
                            <span className="nav-list-item  css-1i35o1r">
                              Accessories
                            </span>
                          </div>
                        </li> */}
                      </div>
                    );
                  })}
                <h3>Others</h3>
                <li className="list">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Blog.svg"
                    width="20"
                  />
                  <div className="nav-list-super mob-drop">
                    <span className="nav-list-item  css-1i35o1r">Blog</span>
                  </div>
                </li>
                <li className="list">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Videos.svg"
                    width="20"
                  />
                  <div className="nav-list-super mob-drop">
                    <span className="nav-list-item  css-1i35o1r">Videos</span>
                  </div>
                </li>
                <li className="list">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Chat.svg"
                    width="20"
                  />
                  <div className="nav-list-super mob-drop">
                    <span className="nav-list-item  css-1i35o1r">Forums</span>
                  </div>
                </li>
                <li className="list">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Cool-Rides.svg"
                    width="20"
                  />
                  <div className="nav-list-super mob-drop">
                    <span className="nav-list-item  css-1i35o1r">
                      Cool Rides
                    </span>
                  </div>
                </li>
                <li className="list">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Import.svg"
                    width="20"
                  />
                  <div className="nav-list-super mob-drop">
                    <span className="nav-list-item  css-1i35o1r">
                      Tractor Import
                    </span>
                  </div>
                </li>
              </nav>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileDropDown;
