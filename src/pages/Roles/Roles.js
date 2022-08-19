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
	Image,
} from "react-bootstrap";
import toast from "react-hot-toast";
import AddAndEditRole from "./AddAndEditRoles";
import { roleApis } from "../../API/RolesApis";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";

export default function Roles() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getRoles(1, "", 10);
  }, []);

  const getRoles = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

  
    try {
      const result = await roleApis.getRoles(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setRolesState({
          ...rolesState,
          roles: result.data.data,
          pagination: result.data.pagination,
          originalRoles: result.data.data,
          isAddRole: false,
          isEditRole: false,
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

  const deleteRole = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await roleApis.deleteRole(id);
       
      if (
        result.error === false 
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getRoles(1, "", 10);
      }
     
    } catch (error) {
      console.error(error);
    }
  };

  const [rolesState, setRolesState] = useState({
    isEditRole: false,
    isAddRole: false,
    roles: null,
    originalRoles: null,
    status: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredRoles = rolesState.roles.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase()))||
						(item.description &&
							item.description.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setRolesState({
        ...rolesState,
        roles: filteredRoles,
      });
    } else {
      setRolesState({
        ...rolesState,
        roles: rolesState.originalRoles,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getRoles(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getRoles(1, event.target.value, noOfRec);
    }
	};
	const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await roleApis.getRolesPdf(
        mainSearchString
      );
       
      if (result.error === false) {
        toast.dismiss(loadingToastId);
         
        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
      
        toast.error("error");
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
      toast.error("error", e);
    }
  };

  const handleGetCsv = async () => {
     
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await roleApis.getRolesCsv(
        mainSearchString
      );
       
      if (result.error === false) {
        toast.dismiss(loadingToastId);
         
        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
       
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
    }
  };

 
  return (
    <>
      <>
        <div className="rolePage">
            {rolesState.isViewRole ? (
								<></>
						): rolesState.isAddRole === true ||
              rolesState.isEditRole === true ? (
              <AddAndEditRole
                rolesState={rolesState}
                setRolesState={setRolesState}
                getRoles={getRoles}
              />
            ) : (
              <>
										<div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setRolesState({
                      ...rolesState,
                      isAddRole: true,
                    });
                  }}
                >
                  Add Role
										</button>
										<div className="d-flex ml-auto">
                    <Image
                      onClick={() => {
                        handleGetCsv();
                      }}
                      className="clickableSvg"
                      src={csvSvg}
                      height="40px"
                      width="60px"
                      alt="Profile Image"
                    />
                    <Image
                      onClick={() => {
                        handleGetPdf();
                      }}
                      className="clickableSvg"
                      src={pdfSvg}
                      height="40px"
                      width="60px"
                      alt="Profile Image"
                    />
                  </div>
                </div>
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
                      getRoles(1, mainSearchString, e.target.value);
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
                      <h5 className="card-title w-50 float-left">Roles</h5>
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
                            <th>Status</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {rolesState.roles &&
                            rolesState.roles.map((role, idx) => (
                              <tr key={idx}>
                                <td>{role.title && role.title}</td>
                                <td>{role.status && role.status}</td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setRolesState({
                                        ...rolesState,
                                        isEditRole: true,
                                        title: role.title,
                                        status: role.status,
                                        description: role.description,
                                        roleId: role.id,
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icon.X
                                      onClick={() => deleteRole(role.id)}
                                      className="icon wh-15 mt-minus-3"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
                    {rolesState && rolesState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {rolesState.pagination.from}-{rolesState.pagination.to}{" "}
                          of {rolesState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            rolesState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getRoles(1, mainSearchString, noOfRec);
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
                            rolesState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getRoles(
                              rolesState.pagination.prev,
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
                            rolesState.pagination.page ==
                            rolesState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getRoles(
                              rolesState.pagination.next,
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
                            rolesState.pagination.page ==
                            rolesState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getRoles(
                              rolesState.pagination.last,
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
      </>
    </>
  );
}
