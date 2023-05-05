import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";
import { user } from "../../API/User/index";
import { Link, NavLink } from "react-router-dom";
import noProfilePicture from "../../assets/svg/no-profile-picture.svg";
import { isMobile } from "react-device-detect";


import { Check } from "react-feather";
import { AlertTriangle } from "react-feather";

const users = (props) => {
  const [reqSent, setReqSent] = useState(false);
  const {
    setShowPasswordModel,
    profileInfo,
    currentUser,
    setShowLoader,
    setCurrentUser,
  } = useContext(RootContext);
  const updateAccountStatus = async (userId, status) => {
    setShowLoader(true);
    const result = await user.updateAppUsers(currentUser.id, status);
    if (result.error === false) {
      setShowLoader(false);
      setReqSent(true);
    }
    if (result.error === true) {
      console.error(result.error);
      setShowLoader(false);
    }
  };
  const handleAccountStatus = () => {
    updateAccountStatus(currentUser.id, "nil");
  };
  useEffect(async () => {
    checkifVerified();
  }, []);
  const checkifVerified = async () => {
    setShowLoader(true);
    const result = await user.findUser(currentUser);
    if (result.error === false) {
      setCurrentUser({
        ...currentUser,
        varifiedUser: result.data.varified_user,
      });
    }
    if (result.error === true) {
      console.error(result.data.errors[0]);
    }
  };

  return (
    <div className={`container ${isMobile ? "mt-0" : "user"}`}>
      <div className="user-profile">
        <div className="user-ads mb-40">
          <div className="card my-4">
            <div className="dashboard-profile clearfix">
              {profileInfo && profileInfo.profile_path === null ? (
                <>
                  <img
                    alt="Profile"
                    className="profile-photo pull-left"
                    src={noProfilePicture}
                  ></img>
                </>
              ) : (
                <>
                  <img
                    alt="Profile"
                    className="profile-photo pull-left"
                    src={profileInfo && profileInfo.profile_path}
                  ></img>
                </>
              )}
              <div className={`${isMobile ? "" : "d-flex"}`} style={{textTransform: "capitalize"}}>
                <h1>
                  {" "}
                  {profileInfo && profileInfo.name
                    ? profileInfo.name
                    : "user name"}
                </h1>
								{isMobile === false ? (
                  currentUser.varifiedUser === true ? (
                    <Check className="verifiedIcon mt-3" />
                  ) : (
                    <AlertTriangle style={{ color: "red" }} className="mt-3" />
                  )
                ) : null}                {currentUser.varifiedUser === true ? (
									<div class={`alert alert-success ml-auto ${isMobile?"mt-5":""}`} role="alert">
                    This Account is verified
                  </div>
                ) : currentUser.varifiedUser === null || reqSent ? (
                  <div class="alert alert-warning ml-auto" role="alert">
                    You have requested for account to be verified
                  </div>
                ) : (
                  <div
                    onClick={() => handleAccountStatus()}
                    class="alert alert-danger cursor-pointer ml-auto"
                    role="alert"
                  >
                    Account not verified click to send request
                  </div>
                )}
              </div>
              <p>Member Since {profileInfo && profileInfo.created_at}</p>
              <p className="fs12">
                <Link to="/profile-settings">Edit Profile</Link>
                &nbsp; &nbsp;| &nbsp; &nbsp;
                <Link
                  to="/profile-settings/"
                  onClick={() => {
                    setShowPasswordModel(true);
                  }}
                >
                  Change Password
                </Link>
              </p>
              <div className="row px-3">
                <NavLink
                  to="/profile/my-ads"
                  className="navlink-set col-lg-4 col-12 text-center p-2 my-2"
                  activeClassName="navlink-active"
                >
                  <i className="icofont-bullhorn">
                    <span className="ml-2">My Ads</span>
                  </i>
                </NavLink>

                <NavLink
                  to="/profile/saved-ads"
                  className="navlink-set col-lg-4 col-12 text-center p-2 my-2"
                  activeClassName="navlink-active"
                >
                  <i className="icofont-heart">
                    <span className="ml-2">My Saved Ads</span>
                  </i>
                </NavLink>

                <NavLink
                  to="/profile/my-messages"
                  className="navlink-set col-lg-4 col-12 text-center p-2 my-2"
                  activeClassName="navlink-active"
                >
                  <i className="icofont-ui-message">
                    <span className="ml-2">My Messages</span>
                  </i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default users;
