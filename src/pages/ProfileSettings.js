import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Breadcrumb, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "./Footer/Footer";
import { user } from "../API/User/index";
import user1 from "../assets/img/user/big/1.png";
import { RootContext } from "../context/RootContext";
import { useHistory } from "react-router-dom";
import { city } from "../API/Country/City";
import { language } from "../API/Country/Language";
import PasswordResetModal from "./Modals/PasswordReset";

const ProfileSettings = () => {
  const { currentUser } = useContext(RootContext);
  const [userPersonalDetail, setUserPersonalDetail] = useState(
    currentUser.data
  );
  const [sideMenue, setSideMenu] = useState();
  const [fileDataURL, setFileDataURL] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [cities, setCities] = useState();
  const [languageList, setLanguageList] = useState();
  const [countryList, setCountryList] = useState();
  const [updatePassword, setUpdatePassword] = useState({
    email: null,
    current_password: null,
    new_password: null,
    confirm_password: null
  });
  const [editProfile, setEditProfile] = useState({
    name: null,
    image: null,
    language: null,
    birthDay: null,
    phone: null,
    email: null,
    gender: null,
    country: null,
    city: null,
    username: null
  });

  let history = useHistory();

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (editProfile.image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(editProfile.image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [editProfile.image]);
  useEffect(() => {
    handlePersonalDetail();
    handleDropDownOptions();
  }, []);

  const handleDropDownOptions = async () => {
    const result = await city.getAllCities();
    setCities(result.data.data);

    const response = await language.getAllLanguages();
    setLanguageList(response.data.data);

    const countryArray = await city.getAllCountry();
    setCountryList(countryArray.data.data);
  };

  const handlePersonalDetail = async () => {
    const result = await user.findUser(currentUser.data.id);
    setUserPersonalDetail(result.data);
    setEditProfile({
      name: result.data.name,
      image: result.data.image,
      language:
        result.data.personal_detail && result.data.personal_detail.language,
      birthDay: result.data.personal_detail && result.data.personal_detail.dob,
      phone:
        result.data.personal_detail && result.data.personal_detail.phone_number,
      email: result.data.email,
      gender: result.data.personal_detail && result.data.personal_detail.gender,
      country:
        result.data.personal_detail && result.data.personal_detail.country,
      city: result.data.personal_detail && result.data.personal_detail.city,
      username:
        result.data.personal_detail && result.data.personal_detail.username
    });
    setUpdatePassword({
      ...updatePassword,
      email: result.data.email
    });
  };

  // Toggle side bar menu
  const onSideMenu = (active) => {
    setSideMenu(active);
  };
  const handleUpdateProfile = (value, target) => {
    setEditProfile({
      ...editProfile,
      [target]: value
    });
  };
  const handleUpdatePassword = (value, target) => {
    setUpdatePassword({
      ...updatePassword,
      [target]: value
    });
  };
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("user[profile]", editProfile.image);
      const result = await user.profile(
        editProfile,
        userPersonalDetail.personal_detail
          ? userPersonalDetail.personal_detail.id
          : "",
        formData
      );
      if (result.error === false) {
        history.push("/profile/");
      }
    } catch (error) {}
  };
  const modalClose = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <div className="page-wrapper">
        {/* Navigation */}
        <Navigation onClick={onSideMenu} />
        {/* End Navigation */}
        <div
          className={`main-content d-flex flex-column ${
            sideMenue ? "hide-sidemenu" : ""
          }`}
        >
          {/* Breadcrumb */}
          <div className="main-content-header">
            <Breadcrumb>
              <h1>Edit Profile</h1>
              <Link to="/dashboard" className="breadcrumb-item">
                Dashboard
              </Link>
              <Link to="/profile" className="breadcrumb-item">
                Profile
              </Link>
              <Breadcrumb.Item active>Profile Settings</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* End Breadcrumb */}

          {/* Profile Settings */}
          <Row>
            <Col lg={12}>
              <div className="profile-settings-form mb-3">
                <Button
                  variant="info"
                  className="float-right mb-4"
                  onClick={modalClose}
                >
                  Change Password
                </Button>
                <Form>
                  <Form.Row>
                    <Image
                      src={fileDataURL ? fileDataURL : user1}
                      roundedCircle
                      alt="User Image"
                      width="100px"
                      height="100px"
                      className="m-2"
                      as={Col}
                    />
                    <Form.Group as={Col} className="mt-4">
                      <Form.Label>Upload New Picture</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder=""
                        className="form-control"
                        multiple
                        onChange={(e) => {
                          handleUpdateProfile(e.target.files[0], "image");
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        value={editProfile.name ? editProfile.name : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "name");
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" "
                        value={editProfile.username ? editProfile.username : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "username");
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        disabled={true}
                        value={editProfile.email ? editProfile.email : ""}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="ControlSelect1">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        value={editProfile.gender ? editProfile.gender : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "gender");
                        }}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Date Of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                        value={editProfile.birthDay ? editProfile.birthDay : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "birthDay");
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        value={editProfile.phone ? editProfile.phone : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "phone");
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLanguage">
                      <Form.Label>Language</Form.Label>
                      <Form.Control
                        as="select"
                        value={editProfile.language ? editProfile.language : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "language");
                        }}
                      >
                        <option>Select Language ....</option>
                        {languageList &&
                          languageList.map((item) => {
                            return (
                              <>
                                <option key={item.id}>{item.name}</option>
                              </>
                            );
                          })}
                        <option>English</option>
                        <option>Urdu</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        as="select"
                        value={editProfile.country ? editProfile.country : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "country");
                        }}
                      >
                        <option>Select Country ....</option>
                        {countryList &&
                          countryList.map((item) => {
                            return (
                              <>
                                <option key={item.id}>{item.name}</option>
                              </>
                            );
                          })}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>city</Form.Label>
                      <Form.Control
                        as="select"
                        value={editProfile.city ? editProfile.city : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "city");
                        }}
                      >
                        <option>Select City ....</option>
                        {cities &&
                          cities.map((item, i) => {
                            return (
                              <>
                                <option key={i}>{item.name}</option>
                              </>
                            );
                          })}
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <div className="text-center d-flex justify-content-between mt-5">
                    <div>
                      <Button
                        variant="danger"
                        onClick={() => history.push("/profile/")}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div onClick={updateProfile}>
                      <Button variant="success">Save Changes</Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          <PasswordResetModal
            modalClose={modalClose}
            modalShow={modalShow}
            updatePassword={updatePassword}
            handleUpdatePassword={handleUpdatePassword}
          />
          {/* End Profile Settings */}

          {/* Footer  */}
          <div className="flex-grow-1"></div>
          <Footer />
          {/* End Footer  */}
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
