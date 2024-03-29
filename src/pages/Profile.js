import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Breadcrumb, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "./Footer/Footer";
import * as Icon from "react-feather";
import { RootContext } from "../context/RootContext";

// User Images
import user1 from "../assets/img/user/user1.jpg";
import user2 from "../assets/img/user/user2.jpg";
import user3 from "../assets/img/user/user3.jpg";
import user4 from "../assets/img/user/user4.jpg";
import user5 from "../assets/img/user/user5.jpg";

// Post Image
import postImageOne from "../assets/img/post/post-img.jpg";
import postImageTwo from "../assets/img/post/post-img2.jpg";
import postImageThree from "../assets/img/post/post-img3.jpg";
import { user } from "../API/User/index";
import ProfileSettings from "./ProfileSettings";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const { currentUser } = useContext(RootContext);
  const [profile, setProfile] = useState();
  const [flag, setFlag] = useState(false);

  const [sideMenu, setSideMenu] = useState(true);
  let history = useHistory();

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
    <>
      {flag ? (
        <ProfileSettings />
      ) : (
        <div className="page-wrapper">
            {/* Breadcrumb */}
            <div className="main-content-header">
              <Breadcrumb>
                <h1>Profile</h1>
                <Link to="/dashboard" className="breadcrumb-item">
                  Dashboard
                </Link>
                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {/* End Breadcrumb */}

            {/* Profile area */}
            <Row>
              <Col lg={12}>
                <div className="profile-header mb-4">
                  <Image
                    src={profile && profile.profile_path}
                    alt="Profle"
                    roundedCircle
                  />
                  <h3 className="name mt-3">
                    {profile && profile.name ? profile.name : "user name"}
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <div className="profile-stats">
                    <Link to="#">
                      <strong>587</strong> Posts
                    </Link>
                    <Link to="#">
                      <strong>963</strong> Following
                    </Link>
                    <Link to="#">
                      <strong>576</strong> Followers
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg="3">
                <div className="profile-left-content">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="card-header">
                        <h5 className="card-title">Info</h5>
                      </div>
                      <ul className="info">
                        <li>
                          <Icon.MapPin className="icon" />
                          Location: {profile && profile.personal_detail && profile.personal_detail.city} ,
                          {profile && profile.personal_detail ? profile.personal_detail.country :  "null"} .
                        </li>
                        <li>
                          <Icon.Edit className="icon" />
                          Language:{" "}
                          {profile && profile.personal_detail ? profile.personal_detail.language :  "null"}
                        </li>
                        <li>
                          <Icon.Calendar className="icon" />
                          Joined:{" "}
                          {profile &&
                            profile.personal_detail ? profile.personal_detail.created_at.slice(0, 10) :  "null"}
                        </li>
                        <li>
                          <Icon.Aperture className="icon" />
                          Birthday: {profile && profile.personal_detail ? profile.personal_detail.dob : "null"}
                        </li>
                        <li>
                          <Icon.Phone className="icon" />
                          Phone:{" "}
                          {profile && profile.personal_detail ? profile.personal_detail.phone_number :  "null"}
                        </li>
                        <li>
                          <Icon.Mail className="icon" />
                          Email: {profile ? profile.email :  "null"}
                        </li>
                      </ul>
                      <Button
                        as={Col}
                        variant="info"
                        onClick={() => {
                          setFlag(true);
                          history.push("/profile-settings");
                        }}
                      >
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="6">
                <div className="profile-middle-content mb-4">
                  {/* Post card */}
                  <div className="post-card">
                    <Card>
                      <Image
                        width={50}
                        height={50}
                        className="mr-3"
                        src={user1}
                        roundedCircle
                        alt="User"
                      />
                      <Card.Body>
                        <h5>
                          <Link to="">
                            There are many variations of passages of Lorem Ipsum
                          </Link>
                        </h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis.
                        </p>
                        <Link to="">
                          <Image src={postImageOne} alt="Post Image" />
                        </Link>
                        <div className="feed-back mt-3">
                          <Link to="">
                            <Icon.MessageSquare className="icon" />
                            897
                          </Link>
                          <Link to="">
                            <Icon.ThumbsUp className="icon" />
                            897
                          </Link>
                          <Link to="">
                            <Icon.Share2 className="icon" />
                            897
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  {/* End post card */}

                  {/* Post card */}
                  <div className="post-card">
                    <Card>
                      <Image
                        width={50}
                        height={50}
                        className="mr-3"
                        src={user1}
                        roundedCircle
                        alt="User"
                      />
                      <Card.Body>
                        <h5>
                          <Link to="">
                            There are many variations of passages of Lorem Ipsum
                          </Link>
                        </h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis.
                        </p>
                        <Link to="">
                          <Image src={postImageTwo} alt="Post Image" />
                        </Link>
                        <div className="feed-back mt-3">
                          <Link to="">
                            <Icon.MessageSquare className="icon" />
                            897
                          </Link>
                          <Link to="">
                            <Icon.ThumbsUp className="icon" />
                            897
                          </Link>
                          <Link to="">
                            <Icon.Share2 className="icon" />
                            897
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  {/* End post card */}

                  {/* Post card */}
                  <div className="post-card">
                    <Card>
                      <Image
                        width={50}
                        height={50}
                        className="mr-3"
                        src={user1}
                        roundedCircle
                        alt="User"
                      />
                      <Card.Body>
                        <h5>
                          <Link to="">
                            There are many variations of passages of Lorem Ipsum
                          </Link>
                        </h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis.
                        </p>
                        <Link to="">
                          <Image src={postImageThree} alt="Post Image" />
                        </Link>
                        <div className="feed-back mt-3">
                          <Link to="">
                            <Icon.MessageSquare className="icon" />
                            897
                          </Link>
                          <Link to="">
                            <Icon.ThumbsUp className="icon" />
                            897
                          </Link>
                          <Link to="">
                            <Icon.Share2 className="icon" />
                            897
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  {/* End post card */}
                </div>
              </Col>

              <Col lg="3">
                <div className="profile-right-content">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="card-header">
                        <h5 className="card-title">Connect</h5>
                      </div>

                      <div className="connecting-list">
                        {/* Card */}
                        <Card>
                          <Link to="">
                            <Image
                              width={35}
                              height={35}
                              className="mr-2"
                              src={user1}
                              roundedCircle
                              alt="User"
                            />
                          </Link>

                          <Card.Body>
                            <h5>
                              <Link to="">Amber Gibs</Link>
                            </h5>
                            <Button variant="outline-primary rounded">
                              Follow
                            </Button>
                          </Card.Body>
                        </Card>
                        {/* End Card */}

                        {/* Card */}
                        <Card>
                          <Link to="">
                            <Image
                              width={35}
                              height={35}
                              className="mr-2"
                              src={user2}
                              roundedCircle
                              alt="User"
                            />
                          </Link>

                          <Card.Body>
                            <h5>
                              <Link to="">Carl Roland</Link>
                            </h5>
                            <Button variant="outline-primary rounded">
                              Follow
                            </Button>
                          </Card.Body>
                        </Card>
                        {/* End Card */}

                        {/* Card */}
                        <Card>
                          <Link to="">
                            <Image
                              width={35}
                              height={35}
                              className="mr-2"
                              src={user3}
                              roundedCircle
                              alt="User"
                            />
                          </Link>

                          <Card.Body>
                            <h5>
                              <Link to="">Paul Wilson</Link>
                            </h5>
                            <Button variant="outline-primary rounded">
                              Follow
                            </Button>
                          </Card.Body>
                        </Card>
                        {/* End Card */}

                        {/* Card */}
                        <Card>
                          <Link to="">
                            <Image
                              width={35}
                              height={35}
                              className="mr-2"
                              src={user4}
                              roundedCircle
                              alt="User"
                            />
                          </Link>

                          <Card.Body>
                            <h5>
                              <Link to="">Alice Jenkins</Link>
                            </h5>
                            <Button variant="outline-primary rounded">
                              Follow
                            </Button>
                          </Card.Body>
                        </Card>
                        {/* End Card */}

                        {/* Card */}
                        <Card>
                          <Link to="">
                            <Image
                              width={35}
                              height={35}
                              className="mr-2"
                              src={user5}
                              roundedCircle
                              alt="User"
                            />
                          </Link>

                          <Card.Body>
                            <h5>
                              <Link to="">Lauren Cox</Link>
                            </h5>
                            <Button variant="outline-primary rounded">
                              Follow
                            </Button>
                          </Card.Body>
                        </Card>
                        {/* End Card */}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* End Profile area */}

            {/* Footer  */}
            <div className="flex-grow-1"></div>
            <Footer />
            {/* End Footer  */}
        </div>
      )}
    </>
  );
};

export default Profile;
