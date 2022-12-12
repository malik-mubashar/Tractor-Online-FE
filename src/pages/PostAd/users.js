import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";
import { user } from "../../API/User/index";
import { Link, NavLink } from "react-router-dom";
import noProfilePicture from "../../assets/svg/no-profile-picture.svg";


const users = (props) => {
  const {setShowPasswordModel, profileInfo } = useContext(RootContext);
  // const [profile, setProfile] = useState();

  // useEffect(() => {
  //   handlePersonalDetail();
  // }, []);

  // const handlePersonalDetail = async () => {
  //   const loadingToastId = toast.loading("Loading..!");

  //   const result = await user.findUser(currentUser);
  //   if (result.error === false) {
  //     toast.dismiss(loadingToastId);
	// 		setProfile(result.data);
	// 		setUserProfilePicture(result.data.profile_path)
  //   }
  // };

  return (
    <div className="user container">
      <div className="user-profile">
        <div className="user-ads mb-40">
          <div className="card my-4">
            <div className="dashboard-profile clearfix">
							{profileInfo && profileInfo.profile_path === null ?
								<>
								<img
									alt="Profile"
									className="profile-photo pull-left"
									src={noProfilePicture}
								></img>									
								</>	
								:
								<>
								<img
									alt="Profile"
									className="profile-photo pull-left"
									src={profileInfo && profileInfo.profile_path}
								></img>
								</>
							}
              <h1> {profileInfo && profileInfo.name ? profileInfo.name : "user name"}</h1>
              <p>Member Since {profileInfo && profileInfo.created_at}</p>
              <p className="fs12">
                <Link to="/profile-settings" >Edit Profile</Link>
                &nbsp; &nbsp;| &nbsp; &nbsp;
                <Link to="/profile-settings/" onClick={() => {setShowPasswordModel(true)}}>Change Password</Link>
              </p>
              <div className="row px-3">
                <NavLink to="/profile/my-ads" className='navlink-set col-lg-4 col-12 text-center p-2 my-2' activeClassName="navlink-active">
                  <i className="icofont-bullhorn"><span className="ml-2">My Ads</span></i>
                </NavLink>

                <NavLink to="/profile/saved-ads" className='navlink-set col-lg-4 col-12 text-center p-2 my-2' activeClassName="navlink-active">
                  <i className="icofont-heart"><span className="ml-2">My Saved Ads</span></i>
                </NavLink>

                <NavLink  to="/profile/my-messages" className='navlink-set col-lg-4 col-12 text-center p-2 my-2' activeClassName="navlink-active">
                  <i className="icofont-ui-message"><span className="ml-2">My Messages</span></i>
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
