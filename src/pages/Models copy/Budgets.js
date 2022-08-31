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
import AddAndEditBudgets from "./AddAndEditBudgets";
// import { budgetApis } from "../../API/BudgetsApis";
import toast from "react-hot-toast";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";
import { budgetApis } from "../../API/BudgetsApis";
import Icofont from "react-icofont";
// import { budgetApis } from "../../API/BudgetsApis";

export default function Budgets() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getBudgets(1, "", 10);
  }, []);

  const getBudgets = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await budgetApis.getBudgets(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setBudgetsState({
          ...budgetsState,
          budgets: result.data.data,
          pagination: result.data.pagination,
          originalBudgets: result.data.data,
          isAddBudget: false,
          isEditBudget: false,
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

  const deleteBudget = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await budgetApis.deleteBudget(id);
       
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getBudgets(1, "", 10);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [sideMenu, setSideMenu] = useState(false);
  function onSideMenu(active) {
    setSideMenu(active);
  }

  const [budgetsState, setBudgetsState] = useState({
    isEditBudget: false,
    isAddBudget: false,
    isViewBudget: false,
    budgets: null,
    originalBudgets: null,
    status: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCities = budgetsState.budgets.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.description &&
            item.description
              .toLowerCase()
              .includes(searchString.toLowerCase())) ||
          (item.status &&
            item.status.toLowerCase().includes(searchString.toLowerCase())) ||
          (item.link &&
            item.link.toLowerCase().includes(searchString.toLowerCase())) ||
          (item.icon &&
            item.icon.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setBudgetsState({
        ...budgetsState,
        budgets: filteredCities,
      });
    } else {
      setBudgetsState({
        ...budgetsState,
        budgets: budgetsState.originalBudgets,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getBudgets(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getBudgets(1, event.target.value, noOfRec);
    }
  };
  const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await budgetApis.getBudgetsPdf(mainSearchString);
       
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
      const result = await budgetApis.getBudgetsCsv(mainSearchString);
       
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
        <Navigation onClick={() => onSideMenu} />
        <div className="budgetPage">
          {/* <div className={`main-content d-flex flex-column`}> */}
            {budgetsState.isViewBudget ? (
              <></>
            ) : budgetsState.isAddBudget === true ||
              budgetsState.isEditBudget === true ? (
              <AddAndEditBudgets
                budgetsState={budgetsState}
                setBudgetsState={setBudgetsState}
                getBudgets={getBudgets}
              />
            ) : (
              <>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary col-sm-2 mb-4"
                    onClick={() => {
                      setBudgetsState({
                        ...budgetsState,
                        isAddBudget: true,
                      });
                    }}
                  >
                    Add Budget
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
                      getBudgets(1, mainSearchString, e.target.value);
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
                      <h5 className="card-title w-50 float-left">Budgets</h5>
                      <Form className="nav-search-form d-none d-sm-block float-right">
                        <FormControl
                          type="text"
                          onChange={(event) => handleSearch(event.target.value)}
                          placeholder="Search in Table"
                          style={{ marginTop: "-10px" }}
                        />
                      </Form>
                    </div>

                    <div className="">
                      <Table className="m-0" responsive>
                        <thead>
                          <tr>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Link</th>
                            <th>icon</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {budgetsState.budgets &&
                            budgetsState.budgets.map((budget, idx) => (
                              <tr key={idx}>
                                <td>
                                  <Image
                                    onClick={() => {
                                      handleGetCsv();
                                    }}
                                    className="clickableSvg"
                                    src={`${budget.active_image_path}`}
                                    height="40px"
                                    width="60px"
                                    alt="Profile Image"
                                  />
                                </td>
                                <td>{budget.title && budget.title}</td>
                                <td>{budget.link && budget.link}</td>
                                <td>{budget.icon && budget.icon}</td>
                                <td>{budget.status && budget.status}</td>
                                <td>
                                  {budget.description && budget.description}
                                </td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    
                                    onClick={() => {
                                      setBudgetsState({
                                        ...budgetsState,
                                        isEditBudget: true,
                                        title: budget.title,
                                        link: budget.link,
                                        status: budget.status,
                                        description: budget.description,
                                        budgetId: budget.id,
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3 cursor-pointer"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icofont icon="ui-delete"
                                     style={{ cursor: "pointer" }}
                                      onClick={() => deleteBudget(budget.id)}
                                      className="icon wh-15 mt-minus-3"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
                    {budgetsState && budgetsState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {budgetsState.pagination.from}-
                          {budgetsState.pagination.to} of{" "}
                          {budgetsState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            budgetsState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getBudgets(1, mainSearchString, noOfRec);
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
                            budgetsState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getBudgets(
                              budgetsState.pagination.prev,
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
                            budgetsState.pagination.page ==
                            budgetsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getBudgets(
                              budgetsState.pagination.next,
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
                            budgetsState.pagination.page ==
                            budgetsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getBudgets(
                              budgetsState.pagination.last,
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
          {/* </div> */}
        </div>
      </>
    </>
  );
}
