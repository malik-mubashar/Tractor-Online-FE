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
import AddAndEditProdBrands from "./AddAndEditProdBrands";
import { prodBrandsApis } from "../../API/ProdBrandsApis";

export default function ProdBrands() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getProdBrands(1, "", 10);
  }, []);

  const getProdBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodBrandsApis.getProdBrands(
        page,
        mainSearch,
        noOfRec
      );
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProdBrandsState({
          ...prodBrandsState,
          prodBrands: result.data.data,
          pagination: result.data.pagination,
          originalProdBrands: result.data.data,
          isAddProdBrand: false,
          isEditProdBrand: false,
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

  const deleteProdBrand = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await prodBrandsApis.deleteProdBrand(id);
      debugger;
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getProdBrands(1, "", 10);
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

  const [prodBrandsState, setProdBrandsState] = useState({
    isEditProdBrand: false,
    isAddProdBrand: false,
    prodBrands: null,
    originalProdBrands: null,
    status: "active",
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredBrands = prodBrandsState.prodBrands.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase())) ||
          (item.description &&
            item.description
              .toLowerCase()
              .includes(searchString.toLowerCase())) ||
          (item.status &&
            item.status.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setProdBrandsState({
        ...prodBrandsState,
        prodBrands: filteredBrands,
      });
    } else {
      setProdBrandsState({
        ...prodBrandsState,
        prodBrands: prodBrandsState.originalProdBrands,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getProdBrands(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getProdBrands(1, event.target.value, noOfRec);
    }
  };

  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="prodCategoryPage">
          <div className={`main-content d-flex flex-column`}>
            {prodBrandsState.isViewProdCategory ? (
              <></>
            ) : prodBrandsState.isAddProdBrand === true ||
              prodBrandsState.isEditProdBrand === true ? (
              <AddAndEditProdBrands
                prodBrandsState={prodBrandsState}
                setProdBrandsState={setProdBrandsState}
                getProdBrands={getProdBrands}
              />
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setProdBrandsState({
                      ...prodBrandsState,
                      isAddProdBrand: true,
                    });
                  }}
                >
                  Add Product Brand
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
                      getProdBrands(1, mainSearchString, e.target.value);
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
                      <h5 className="card-title w-50 float-left">Cites</h5>
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
                            <th>Title</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {prodBrandsState.prodBrands &&
                            prodBrandsState.prodBrands.map((prod, idx) => (
                              <tr key={idx}>
                                <td>{prod.title && prod.title}</td>
                                <td>{prod.link && prod.link}</td>
                                <td>{prod.status && prod.status}</td>
                                <td>{prod.description && prod.description}</td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setProdBrandsState({
                                        ...prodBrandsState,
                                        isEditProdBrand: true,
                                        title: prod.title,
                                        comments: prod.comments,
                                        prodCategoryId: prod.id,
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icon.X
                                      onClick={() => deleteProdBrand(prod.id)}
                                      className="icon wh-15 mt-minus-3"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
												</div>
												{/* Pagination Start */}
                    <div
                      className={`${isMobile ? "" : "d-flex"}`}
                      style={{ justifyContent: "space-between" }}
												>
													
													{prodBrandsState && prodBrandsState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {prodBrandsState.pagination.from}-{prodBrandsState.pagination.to}{" "}
                          of {prodBrandsState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            prodBrandsState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getProdBrands(1, mainSearchString, noOfRec);
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
                            prodBrandsState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getProdBrands(
                              prodBrandsState.pagination.prev,
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
                            prodBrandsState.pagination.page ==
                            prodBrandsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getProdBrands(
                              prodBrandsState.pagination.next,
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
                            prodBrandsState.pagination.page ==
                            prodBrandsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getProdBrands(
                              prodBrandsState.pagination.last,
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
                      

											{/* Pagination End */}
                    </div>
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
