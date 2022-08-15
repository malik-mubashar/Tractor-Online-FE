import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";
import { user } from "../../API/User/index";
import { Link } from "react-router-dom";

const users = (props) => {
  const { currentUser, setShowPasswordModel } = useContext(RootContext);
  const [profile, setProfile] = useState();

  useEffect(() => {
    handlePersonalDetail();
  }, []);

  const handlePersonalDetail = async () => {
    const loadingToastId = toast.loading("Loading..!");

    const result = await user.findUser(currentUser);
    if (result.error === false) {
      toast.dismiss(loadingToastId);
      setProfile(result.data);
    }
  };

  return (
    <div className="user container">
      <div className="post-ad">
        <div className="user-ads mb-40">
          <div className="well mb40">
            <div className="dashboard-profile clearfix">
              <img
                className="profile-photo pull-left"
                src={profile && profile.profile_path}
              ></img>
              <h1> {profile && profile.name ? profile.name : "user name"}</h1>
              <p>Member Since {profile && profile.created_at}</p>
              <p className="fs12">
                <Link to="/profile-settings" >Edit Profile</Link>
                &nbsp; &nbsp;| &nbsp; &nbsp;
                <Link to="/profile-settings/" onClick={() => {setShowPasswordModel(true)}}>Change Password</Link>
              </p>
              <ul className="dashboard-nav">
                <li>
                  <Link to="/users/my-ads">
                    <i className="icofont-bullhorn">My Ads</i>
                  </Link>
                </li>
                <li>
                  <Link to="/users/saved-ads">
                    <i className="icofont-heart">My Saved Ads</i>
                  </Link>
                </li>
                <li>
                  <Link to="/my-messages">
                    <i className="icofont-ui-message">My Messages</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default users;
