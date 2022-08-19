import React, {useEffect, useState} from 'react'
import CustomPopover from '../usedTractor/CustomPopover';
import { useHistory } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import * as Icon from "react-feather";
import { productApis } from '../../API/ProductApis';
import team from "../../assets/img/team.jpg"




const savedAds = () => {
  const [showNumberWarning, setShowNumberWarning] = useState(true);
  let history = useHistory();
  const [openShowPhone, setOpenShowPhone] = useState(false);

  const onShowPhoneModelClose = () => {
    setOpenShowPhone(false);
  };


 
  return (
    <div>
        <div className={ "col-4"}>
                  <div
                    className={`listCard mb-3 ${
                       "d-block"
                    } ${isMobile ? "d-block" : null}`}
                  >
                    <img
                     
                      src={team}
                      // {item.cover_photo_path}
                      alt="Card"
                      style={{ width: "200px", height: "140px" }}
                    />
                    <div style={{ width: "100%" }}>
                      <div
                        className={
                           "mt-2"
                        }
                      >
                        <h5
                          className={
                             "cursor-pointer"
                          }
                          onClick={() => {
                            history.push("/add-details");
                          }}
                        >
                          {/* {item.title} */}Title
                        </h5>
                        <h5
                          className={
                           "cursor-pointer"
                          }
                        >
                          PKR 5000
                          {/* {item.price} */}
                        </h5>
                      </div>
                      <p className={ null}>
                        {/* {item.location} */}
                        Location
                      </p>
                      <p style={{ paddingLeft: "8px" }}>
                        2008 | 111,123 km | Petrol | 2700cc | Automatic | 4.5
                        Grade
                      </p>
                      <div
                       
                        style={{ justifyContent: "space-between" }}
                      >
                        <small
                          className="text-muted"
                          style={{ paddingLeft: "8px" }}
                        >
                          Last updated 3 mins ago
                        </small>
                        <div className="d-flex">
                          <button
                            className="mr-3 btn btn-outline-primary p-1"
                            type="submit"
                          >
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
    </div>
 
  )

}

export default savedAds