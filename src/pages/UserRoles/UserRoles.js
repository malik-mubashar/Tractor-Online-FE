import React, { useEffect, useState } from "react";
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
} from "react-bootstrap";
import toast from "react-hot-toast";
// import AddAndEditUserRoles from "./AddAndEditUserUserRoles";
import { userRolesApis } from "../../API/UserRolesApis";
import AddAndEditUserRoles from "./AddAndEditUserRoles";
// import { userRoleApis } from "../../API/UserRolesApis";

export default function UserRoles() {
	var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;
	console.log('user',user)
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getUserRoles(1, "", 10);
  }, []);

  const getUserRoles = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    console.log(page);
    try {
      const result = await userRolesApis.getUserRoles(page, mainSearch, noOfRec);
			if (result.error == false && result.data.status == "success") {
				 
        toast.dismiss(loadingToastId);

        setUserRolesState({
          ...userRolesState,
          userRoles: result.data.data,
          pagination: result.data.pagination,
          originalUserRoles: result.data.data,
          isAddUserRole: false,
          isEditUserRole: false,
        });
        var temp = [];
        for (var i = 1; i <= result.data.pagination.pages; i++) {
          temp.push(i);
        }
        setPaginationNumbers(temp);
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const deleteUserRole = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await userRolesApis.deleteUserRole(id);
       
      if (
        result.error === false 
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getUserRoles(1, "", 10);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const [sideMenu, setSideMenu] = useState(false);
  function onSideMenu(active) {
    setSideMenu(active);
  }

  const [userRolesState, setUserRolesState] = useState({
    isEditUserRole: false,
    isAddUserRole: false,
    userRoles: null,
    originalUserRoles: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredUserRoles = userRolesState.userRoles.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase()))||
						(item.description &&
							item.description.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setUserRolesState({
        ...userRolesState,
        userRoles: filteredUserRoles,
      });
    } else {
      setUserRolesState({
        ...userRolesState,
        userRoles: userRolesState.originalUserRoles,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getUserRoles(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getUserRoles(1, event.target.value, noOfRec);
    }
  };

  console.log("userRolesState in index", userRolesState);
	console.log("userRolesState in index", noOfRec);
	
  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="userRolePage">
          <div className={`main-content d-flex flex-column`}>
            {userRolesState.isViewUserRole ? (
								<></>
						): userRolesState.isAddUserRole === true ||
              userRolesState.isEditUserRole === true ? (
									<AddAndEditUserRoles
									userRolesState={userRolesState}
									setUserRolesState={setUserRolesState}
									getUserRoles={getUserRoles}
									/>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setUserRolesState({
                      ...userRolesState,
                      isAddUserRole: true,
                    });
                  }}
                >
                  Add UserRole
                </button>
                <div className={`${isMobile ? "" : "d-flex"}`}>
                  <FormControl
                    type="text"
                    onKeyUp={(event) => handleMainSearch(event)}
                    placeholder="Main Search..."
                    style={{ marginTop: "-10px" }}
                  />
                  <select
                    onChange={(e) => {
                      setNoOfRec(e.target.value);
                      getUserRoles(1, mainSearchString, e.target.value);
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
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <div className="card-header d-flex">
                      <h5 className="card-title w-50 float-left">UserRoles</h5>
                      <Form className="nav-search-form d-none d-sm-block float-right">
                        <FormControl
                          type="text"
                          onChange={(event) => handleSearch(event.target.value)}
                          placeholder="Search..."
                          style={{ marginTop: "-10px" }}
                        />
                      </Form>
                    </div>

                    <div className="">
                      <Table className="m-0" responsive>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Roles</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {userRolesState.userRoles &&
                            userRolesState.userRoles.map((userRole, idx) => (
                              <tr key={idx}>
                                <td>{user.data.email && user.data.email}</td>
                                <td>{'admin'}</td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setUserRolesState({
                                        ...userRolesState,
                                        isEditUserRole: true,
                                        title: userRole.title,
                                        userRoleId: userRole.id,
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icon.X
                                      onClick={() => deleteUserRole(userRole.id)}
                                      className="icon wh-15 mt-minus-3"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
                    {userRolesState && userRolesState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {userRolesState.pagination.from}-{userRolesState.pagination.to}{" "}
                          of {userRolesState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            userRolesState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getUserRoles(1, mainSearchString, noOfRec);
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
                            userRolesState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getUserRoles(
                              userRolesState.pagination.prev,
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
                            userRolesState.pagination.page ==
                            userRolesState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getUserRoles(
                              userRolesState.pagination.next,
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
                            userRolesState.pagination.page ==
                            userRolesState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getUserRoles(
                              userRolesState.pagination.last,
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
            )}
          </div>
        </div>
      </>
    </>
  );
}
