import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Breadcrumb, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import { user } from "../API/User/index";
import { RootContext } from "../context/RootContext";
import { useHistory } from "react-router-dom";
import PasswordResetModal from "./Modals/PasswordResetModal";
import { city } from "../API/City/CityApis";
import { country } from "../API/Country/CountryApis";
import { languageApis } from "../API/LanguagesApis ";
import toast from "react-hot-toast";
import noProfilePicture from "../assets/svg/no-profile-picture.svg";
import Select from "react-select";

const ProfileSettings = () => {
  const {
    setCurrentUser,
    currentUser,
    showPasswordModel,
    setShowPasswordModel,
    setShowLoader,
  } = useContext(RootContext);
  const [userPersonalDetail, setUserPersonalDetail] = useState(currentUser);
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
    confirm_password: null,
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
    username: null,
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
  const [profilePic, setProfilePic] = useState();
  const handleDropDownOptions = async () => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const countryResponse = await country.getAllCountry();
      if (countryResponse.error === false) {
        toast.dismiss(loadingToastId);
        setCountryList(countryResponse.data.data);
      } else if (countryResponse.error === true) {
        toast.error("error getting cities");
        toast.dismiss(loadingToastId);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }

    try {
      const res = await city.getAllCities();
      if (res.error === false) {
        toast.dismiss(loadingToastId);
        const tempArray = [];
        res &&
          res.data &&
          res.data.data.map((item) =>
            tempArray.push({ ...item, label: item.title, value: item.title })
          );
        setCities(tempArray);
      } else if (res.error === true) {
        toast.error("error getting cities");
        toast.dismiss(loadingToastId);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }

    try {
      const res = await languageApis.getAllLanguages();
      if (res.error === false) {
        toast.dismiss(loadingToastId);
        setLanguageList(res.data.data);
      } else if (res.error === true) {
        toast.error("error getting cities");
        toast.dismiss(loadingToastId);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const handlePersonalDetail = async () => {
    const result = await user.findUser(currentUser);

    setUserPersonalDetail(result.data);
    setEditProfile({
      name: result.data && result.data.name,

      language:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.language,
      birthDay:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.dob,
      phone:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.phone_number,
      email: result.data && result.data.email,
      gender:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.gender,
      country:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.country,
      city:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.city,
      username:
        result.data &&
        result.data.personal_detail &&
        result.data.personal_detail.username,
    });
    setUpdatePassword({
      ...updatePassword,
      email: result.data && result.data.email,
    });
    setProfilePic(result.data && result.data.profile_path);
  };

  // handle change
  const handleUpdateProfile = (value, target) => {
    setEditProfile({
      ...editProfile,
      [target]: value,
    });
  };

  const handleUpdatePassword = (value, target) => {
    setUpdatePassword({
      ...updatePassword,
      [target]: value,
    });
  };

  const updateProfile = async (e) => {
    const loadingToastId = toast.loading("Loading..!");

    e.preventDefault();
    if (editProfile.image) {
      try {
        const result = await user.uploadProfilePicture(editProfile.image);
        if (result.error === false) {
          // alert("pic uploaded");
        } else if (result.error === true) {
          alert("not");
        }
      } catch (error) {
        alert("not uploaded");
        console.error(error);
      }
    }
    try {
      const result = await user.profile(
        editProfile,
        userPersonalDetail.personal_detail
          ? userPersonalDetail.personal_detail.id
          : null,
        currentUser
      );
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success("Profile Updated");

        history.push("/profile/");
      }
      if (result.error === true) {
        toast.dismiss(loadingToastId);
        toast.error("Profile Updation failed");

        // history.push("/profile/");
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
    }
  };

  const modalClose = () => {
    setShowPasswordModel(!showPasswordModel);
  };
  const handleSave = () => {
    if (updatePassword.new_password == updatePassword.confirm_password) {
      handleChangePassword(updatePassword);
    } else {
      toast.error("Password Did not match");
    }
  };

  const handleChangePassword = async (temp) => {
    setShowLoader(true);
    try {
      const result = await user.changePassword(temp);
      if (
        result.error == false &&
        result.data.message === "Your password has been successfully updated."
      ) {
        setShowLoader(false);
        toast.success("Password Updated successfully");
        handleSignout();
      } else {
        setShowLoader(false);
        toast.error(result.data.errors.full_messages[0]);
        console.error(result.data);
      }
    } catch (error) {
      setShowLoader(false);
      console.error(error);
    }
  };

  const handleSignout = async () => {
    setShowLoader(true);
    try {
      const result = await user.signout();
      if (result.error == false && result.data.success == true) {
        setShowLoader(false);
        toast.success("signed out");
        localStorage.clear();
        setCurrentUser(null);
        history.push("/login");
      } else {
        setShowLoader(false);

        toast.error("sign out error");
        console.error(result.data);
      }
    } catch (error) {
      setShowLoader(false);

      toast.error("sign out error");
      console.error(error);
    }
  };
  return (
    <>
      <div className="page-wrapper">
        {/* Breadcrumb */}
        {/* <div className="main-content-header">
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
        </div> */}
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
                <Form.Group controlId="formBasicComments">
                  {profilePic || fileDataURL ? (
                    <Image
                      src={fileDataURL ? fileDataURL : profilePic}
                      roundedCircle
                      alt="User Image"
                      width="100px"
                      height="100px"
                      className="m-2"
                      as={Col}
                    />
                  ) : (
                    <Image
                      src={noProfilePicture}
                      roundedCircle
                      alt="User Image"
                      width="100px"
                      height="100px"
                      className="m-2"
                      as={Col}
                    />
                  )}

                  <Form.Group as={Col} className="mt-4">
                    <Form.Label>Upload New Picture</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder=""
                      className="form-control p-1"
                      multiple
                      accept="image/x-png,image/gif,image/jpeg,image/jpg"
                      onChange={(e) => {
                        handleUpdateProfile(e.target.files[0], "image");
                      
                      }}
                    />
                  </Form.Group>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
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
                  {/* <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled={true}
                      value={editProfile.email ? editProfile.email : ""}
                    />
                  </Form.Group> */}
                </Form.Group>

                <Form.Group>
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
                </Form.Group>

                <Form.Group>
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
                      <option key="blankChoice" hidden value>
                        -- Select Language --
                      </option>
                      {languageList ? (
                        languageList.map((item) => {
                          return (
                            <>
                              <option key={item.id}>{item.title}</option>
                            </>
                          );
                        })
                      ) : (
                        <option>-- No option avaliable --</option>
                      )}
                    </Form.Control>
                  </Form.Group>
                </Form.Group>
                <Form.Group>
                  {/* <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        as="select"
                        value={editProfile.country ? editProfile.country : ""}
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "country");
                        }}
                      >
                        <option key="blankChoice" hidden value>
                          {" "}
                          --Select Country--{" "}
                        </option>

                        {countryList ? (
                          countryList.map((item) => {
                            return (
                              <>
                                <option key={item.id}>{item.title}</option>
                              </>
                            );
                          })
                        ) : (
                          <option>-- No option avaliable --</option>
                        )}
                      </Form.Control>
                    </Form.Group> */}

                  <Form.Group as={Col} controlId="formGridState">
										<Form.Label>city</Form.Label>										
                    <Select
											value={editProfile&& {label: `${editProfile.city}`, value: `${editProfile.city}`}}
                      options={cities}
                      label="Select City"
                      onChange={(e) => {
                        if (e) {
                          handleUpdateProfile(e.label, "city");
                        }
                      }}
                      clearable={false}
                    />
                    {/* <Form.Control
                      as="select"
                      value={editProfile.city ? editProfile.city : ""}
                      onChange={(e) => {
                        handleUpdateProfile(e.target.value, "city");
                      }}
                    >
                      <option key="blankChoice" hidden value>
                        Select City ....
                      </option>
                      {cities ? (
                        cities.map((item, i) => {
                          return (
                            <>
                              <option key={i}>{item.title}</option>
                            </>
                          );
                        })
                      ) : (
                        <option>-- No option avaliable --</option>
                      )}
                    </Form.Control> */}
                  </Form.Group>
                </Form.Group>

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
          modalShow={showPasswordModel}
          updatePassword={updatePassword}
          handleUpdatePassword={handleUpdatePassword}
          handleSave={handleSave}
        />
        {/* End Profile Settings */}

        {/* Footer  */}
        <div className="flex-grow-1"></div>
        <Footer />
        {/* End Footer  */}
      </div>
    </>
  );
};

export default ProfileSettings;
