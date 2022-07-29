import React from "react";

const postad = (props) => {
  return (
    <div className="post-ad">
      <section>
        <div className="container">
          <div className="user-ads mb40">
            <div className="well mb40">
              <div className="dashboard-profile clearfix">
                <div className="profile-photo pull-left"></div>
                <h2>Aysha Areej</h2>
                <p>Member Since Jul 20, 2022</p>
                <p className="fs12">
                  <a href="/users/6067605/edit">Edit Profile</a> |{" "}
                  <a href="/password_resets/6067605/edit">Change Password</a>
                </p>
              </div>
              <ul className="dashboard-nav">
                <li className="active">
                  <a href="/users/my-ads">
                    <i className="fa fa-bullhorn"></i> My Ads
                  </a>
                </li>
                <li className="">
                  <a href="/users/saved-ads">
                    <i className="fa fa-heart"></i> My Saved Ads
                  </a>
                </li>
                <li className="">
                  <a href="/rides/my_rides/">
                    <i className="fa fa-truck"></i> My Rides
                  </a>
                </li>
                <li className="">
                  <a href="/alerts">
                    <i className="fa fa-bell"></i> My Alerts
                  </a>
                </li>
                <li className="">
                  <a href="/conversations">
                    <i className="fa fa-envelope"></i> My Messages
                  </a>
                </li>
                <li className="">
                  <a href="/users/my-orders">
                    <i className="fa fa-shopping-cart"></i> My Orders
                  </a>
                </li>
                <li className="">
                  <a href="/users/my-credits">
                    <i className="fa fa-credit-card"></i> Payment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {props.children}
    </div>
  );
};

export default postad;
