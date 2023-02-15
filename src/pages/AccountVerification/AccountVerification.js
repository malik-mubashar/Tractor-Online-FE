import React, { useContext, useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import {
  Dropdown,
  Table,
  Badge,
  Button,
  FormControl,
  Form,
  Pagination,
  Image,
} from "react-bootstrap";
import { country } from "../../API/Country/CountryApis";
import toast from "react-hot-toast";
import { user } from "../../API/User";
import { RootContext } from "../../context/RootContext";
import "./accountVerification.scss";

export default function AccountVerification() {
  const {
    setShowLoader,
    verificationRequestedUsersCount,
    setVerificationRequestedUsersCount,
  } = useContext(RootContext);

  const [verificationRequestedUsers, setVerificationRequestedUsers] = useState(
    []
  );
  const [originalUsers, setOriginalUsers] = useState([]);

  const [verifiedUsers, setVerifiedusers] = useState([]);
  const [originalVerifiedUsers, setOriginalVerifiedUsers] = useState([]);

  const [pagination, setPagination] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  const [verifiedUsersView, setVerifiedusersView] = useState(false);

  useEffect(() => {
    getAllUsers(1, "", 10);
    getVerifiedUsers(1, "", 10);
  }, []);

  const getAllUsers = async (page, mainSearch, noOfRec) => {
    setShowLoader(true);
    const result = await user.getVerificationRequstedUsers(
      page,
      mainSearch,
      noOfRec
    );
    if (result.error === false) {
      setVerificationRequestedUsers(result.data.data.data);
      setOriginalUsers(result.data.data.data);
      setVerificationRequestedUsersCount(result.data.data.req_varified);
      setPagination(result.data.data.pagination);
      setShowLoader(false);
    }
    if (result.error === true) {
      console.error(result.error);
      setShowLoader(false);
    }
  };

  const getVerifiedUsers = async (page, mainSearch, noOfRec) => {
    setShowLoader(true);
    const result = await user.getVerifiedUsers(page, mainSearch, noOfRec);
    if (result.error === false) {
      setVerifiedusers(result.data.data.data);
      setOriginalVerifiedUsers(result.data.data.data);
      setPagination(result.data.data.pagination);
      setShowLoader(false);
    }
    if (result.error === true) {
      console.error(result.error);
      setShowLoader(false);
    }
  };

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredUsers = verificationRequestedUsers.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setVerificationRequestedUsers(filteredUsers);
    } else {
      setVerificationRequestedUsers(originalUsers);
    }
  };

  // const handleMainSearch = (event) => {
  //   setMainSearchString(event.target.value);
  //   if (event.keyCode == 13) {
  //     getAllUsers(1, event.target.value, noOfRec);
  //   }
  //   if (event.target.value == "") {
  //     getAllUsers(1, event.target.value, noOfRec);
  //   }
  // };
  const updateAccountStatus = async (userId, status) => {
    setShowLoader(true);
    const result = await user.updateAppUsers(userId, status);
    if (result.error === false) {
      setShowLoader(false);
      getAllUsers(1, mainSearchString, noOfRec);
    }
    if (result.error === true) {
      console.error(result.error);
      setShowLoader(false);
    }
  };

  const handleVerified = (event, userId) => {
    if (event.target.checked) {
      updateAccountStatus(userId, true);
    } else {
      updateAccountStatus(userId, "nil");
    }
  };
console.log(pagination)
  return (
    <>
      <>
        <div className="verificationPage">
          <>
            {/* <div className={`${isMobile ? "" : "d-flex"}`}>
                  <FormControl
                    type="text"
                    onKeyUp={(event) => handleMainSearch(event)}
                    placeholder="Main Search..."
                    style={{ marginTop: "-10px" }}
                  />
                  <select
                    onChange={(e) => {
                      setNoOfRec(e.target.value);
                      getAllUsers(1, mainSearchString, e.target.value);
                    }}
                    className={`${
                      isMobile ? "mt-3" : "adjustNoOfRecSelect"
                    } form-control col-4 mb-2`}
                    id="sortby"
                    name="no of rec per page"
                  >
                    <option value="" disabled selected={true}>
                      No of Records per page
                    </option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
                    <option value="80">80</option>
                  </select>
                </div> */}
            {!verifiedUsersView ? (
              <button
                type="button"
                className="ml-1 btn btn-outline-secondary col-sm-2 mb-4"
                onClick={() => {
                  setVerifiedusersView(true);
                  getVerifiedUsers(1, "", 10);
                }}
              >
                Show Verified Users
              </button>
            ) : (
              <button
                type="button"
                className="ml-1 btn btn-outline-secondary col-sm-2 mb-4"
                onClick={() => {
                  setVerifiedusersView(false);
                  getAllUsers(1, "", 10);
                }}
              >
                Verification Requested Users
              </button>
            )}
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-header d-flex">
                  <h5 className="card-title w-50 float-left">
                    Requested Accounts
                  </h5>
                  <Form className="nav-search-form d-none d-sm-block float-right">
                    <FormControl
                      type="text"
                      onChange={(event) => handleSearch(event.target.value)}
                      placeholder="Search in Table"
                      style={{ marginTop: "-10px" }}
                    />
                  </Form>
                </div>

                {verifiedUsersView ? (
                  <div className="">
                    <Table className="m-0" responsive>
                      <thead>
                        <tr>
                          <th>Name</th>
                        </tr>
                      </thead>

                      <tbody>
                        {verifiedUsers &&
                          verifiedUsers.map((user, idx) => (
                            <tr key={user.id}>
                              <td>{user.name && user.name}</td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  <div className="">
                    <Table className="m-0" responsive>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>varified</th>
                        </tr>
                      </thead>

                      <tbody>
                        {verificationRequestedUsers &&
                          verificationRequestedUsers.map((user, idx) => (
                            <tr key={user.id}>
                              <td>{user.name && user.name}</td>
                              <td>
                                <label class="switch">
                                  <input
                                    onChange={(e) => {
                                      handleVerified(e, user.id);
                                    }}
                                    type="checkbox"
                                  />
                                  <span class="slider round"></span>
                                </label>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                )}
                {pagination && (
                  <div>
                    <span>Rows per page</span>
                    <span className="mx-4">
                      {pagination.from}-{pagination.to} of {pagination.count}
                    </span>

                    <button
                      className={`pagination-button ${
                        pagination.page == 1 ? "disabled" : ""
                      }`}
                      onClick={() => {
                        verifiedUsersView
                          ? getVerifiedUsers(1, mainSearchString, noOfRec)
                          : getAllUsers(1, mainSearchString, noOfRec);
                      }}
                      type="button"
                    >
                      <span class="MuiIconButton-label">
                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                        </svg>
                      </span>
                    </button>
                    <button
                      className={`pagination-button ${
                        pagination.page == 1 ? "disabled" : ""
                      }`}
                      onClick={() => {
                        verifiedUsersView
                          ? getVerifiedUsers(
                              pagination.prev,
                              mainSearchString,
                              noOfRec
                            )
                          : getAllUsers(
                              pagination.prev,
                              mainSearchString,
                              noOfRec
                            );
                      }}
                      type="button"
                    >
                      <span class="MuiIconButton-label">
                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                        </svg>
                      </span>
                    </button>
                    <button
                      className={`pagination-button ${
                        pagination.page == pagination.last ? "disabled" : ""
                      }`}
                      tabindex="0"
                      type="button"
                      onClick={() => {
                        verifiedUsersView
                          ? getVerifiedUsers(
                              pagination.next,
                              mainSearchString,
                              noOfRec
                            )
                          : getAllUsers(
                              pagination.next,
                              mainSearchString,
                              noOfRec
                            );
                      }}
                    >
                      <span class="MuiIconButton-label">
                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                        </svg>
                      </span>
                      <span class="MuiTouchRipple-root"></span>
                    </button>

                    <button
                      className={`pagination-button ${
                        pagination.page == pagination.last ? "disabled" : ""
                      }`}
                      tabindex="0"
                      type="button"
                      onClick={() => {
                        verifiedUsersView
                          ? getVerifiedUsers(
                              pagination.last,
                              mainSearchString,
                              noOfRec
                            )
                          : getAllUsers(
                              pagination.last,
                              mainSearchString,
                              noOfRec
                            );
                      }}
                    >
                      <span class="MuiIconButton-label">
                        <svg
                          class="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        </div>
      </>
    </>
  );
}
