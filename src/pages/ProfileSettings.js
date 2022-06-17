import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Button,
  Form,
  Image,
  Modal,
  ButtonToolbar
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "./Footer/Footer";
import { user } from "../API/User/index";
import user1 from "../assets/img/user/big/1.png";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const ProfileSettings = () => {
  const [sideMenue, setSideMenu] = useState();
  const [fileDataURL, setFileDataURL] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatePassword, setUpdatePAssword] = useState({
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
    user_name: null
  });
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
    setUpdatePAssword({
      ...updatePassword,
      [target]: value
    });
  };
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("user[profile]", editProfile.image);
      const result = await user.profile(editProfile, formData);

      console.log(result);
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
              <h1>Profile Settings</h1>
              <Link to="/dashboard" className="breadcrumb-item">
                Dashboard
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
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "user_name");
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "email");
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "gender");
                        }}
                      >
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                        <option value="2">Others</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Date Of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
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
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "phone");
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Language</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "language");
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "country");
                        }}
                      >
                        <option>Select Country ....</option>
                        <option>Pakistan</option>
                        <option>India</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>city</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          handleUpdateProfile(e.target.value, "city");
                        }}
                      >
                        <option>Select City ....</option>
                        <option>Lahore</option>
                        <option>Nankana Sahib</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <div className="text-center d-flex justify-content-between mt-5">
                    <div>
                      <Button variant="danger">Cancel</Button>
                    </div>
                    <div onClick={updateProfile}>
                      <Button variant="success">Save Changes</Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          {/* End Profile Settings */}

          {/* Footer  */}
          <div className="flex-grow-1"></div>
          <Footer />
          {/* End Footer  */}
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={modalClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => handleUpdatePassword(e.target.value, "email")}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicC_Password">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                onChange={(e) =>
                  handleUpdatePassword(e.target.value, "current_password")
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicN_Password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a new password"
                onChange={(e) =>
                  handleUpdatePassword(e.target.value, "new_password")
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicCN_Password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter your password."
                onChange={(e) =>
                  handleUpdatePassword(e.target.value, "confirm_password")
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="border-0 d-flex justify-content-between">
          <Button variant="danger" onClick={modalClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={modalClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileSettings;
