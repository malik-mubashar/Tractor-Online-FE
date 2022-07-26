import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MobileDropDown = ({show,setShow}) => {
  const [fullscreen, setFullscreen] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }
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
                <h2>Personal</h2>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Language.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Language
                    </span>
                  </div>
                  <strong className="generic-link tdu">English</strong>
                </li>
                <h3>Products</h3>
                <li className="nav-main-ab MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Used-Car.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Used Tractors
                    </span>
                  </div>
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-testid="ExpandMoreIcon"
                  >
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </li>
                <li className="nav-main-ab MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/New-Car.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      New Tractors
                    </span>
                  </div>
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-testid="ExpandMoreIcon"
                  >
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </li>

                <li className="nav-main-ab MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Parts-Line.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Accessories
                    </span>
                  </div>
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-testid="ExpandMoreIcon"
                  >
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </li>
                <h3>Others</h3>
                <li className="nav-main-ab MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Blog.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Blog
                    </span>
                  </div>
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-testid="ExpandMoreIcon"
                  >
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Videos.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Videos
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a itemprop="" id="link/videos" href="/videos"></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Chat.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Forums
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    href="https://www.pakwheels.com/forums/"
                    id="anchor/forums/"
                  ></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Cool-Rides.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Cool Rides
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    id="link/rides/search_rides"
                    href="/rides/search_rides"
                  ></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Import.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Tractor Import
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    href="https://www.pakwheels.com/car-import/"
                    id="anchor/car-import/"
                  ></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Car-Finance.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Tractor Finance
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    id="link/car-loan-calculator/"
                    href="/car-loan-calculator/"
                  ></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/Insurance.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Tractor Insurance
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    id="link/car-insurance/"
                    href="/car-insurance/"
                  ></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/menu-new/MTMIS.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      MTMIS Pakistan
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    id="link/mtmis-online-vehicle-verification"
                    href="/mtmis-online-vehicle-verification"
                  ></a>
                </li>
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1yo8bqd">
                  <img
                    src="https://lite2.pakwheels.com/app/6.0.68/assets/images/fuel-icon.svg"
                    width="20"
                  />
                  <div className="nav-list-super MuiListItemText-root css-1azui93">
                    <span className="MuiTypography-root MuiTypography-body1 nav-list-item MuiListItemText-primary css-1i35o1r">
                      Fuel Prices in Pakistan Today
                    </span>
                  </div>
                  <svg
                    width="7"
                    height="12"
                    className="arrow"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc> Right Arrow </desc>
                    <path
                      d="M6.86035 6L1.24762 4.9068e-07L0.000351546 1.33333L4.36581 6L0.000352361 10.6667L1.24762 12L6.86035 6Z"
                      fill="#878787"
                    ></path>
                  </svg>
                  <a
                    itemprop=""
                    id="link/petroleum-prices-in-pakistan"
                    href="/petroleum-prices-in-pakistan"
                  ></a>
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
