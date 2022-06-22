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
import AddAndEditProdSubCategories from "./AddAndEditProdSubCategories";
import { prodSubApi } from "../../API/ProdSubCategoriesApis";
import toast from "react-hot-toast";

export default function ProdSubCategories() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getProdSubCategories(1, "", 10);
  }, []);

  const getProdSubCategories = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodSubApi.getProdSubCategories(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProdSubCategoriesState({
          ...prodSubCategoriesState,
          prodSubCategories: result.data.data,
          pagination: result.data.pagination,
          originalProdSubCategories: result.data.data,
          isAddProdSubCategory: false,
          isEditProdSubCategory: false,
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

  const deleteProdSubCategory = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await prodSubApi.deleteProdSubCategory(id);
      debugger;
      if (
        result.error === false
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getProdSubCategories(1, "", 10);
			} else if(result.error === true) {
				toast.dismiss(loadingToastId);
        toast.error("can not delete!");

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

  const [prodSubCategoriesState, setProdSubCategoriesState] = useState({
    isEditProdSubCategory: false,
    isAddProdSubCategory: false,
    prodSubCategories: null,
    originalProdSubCategories: null,
    status: "active",
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCities = prodSubCategoriesState.prodSubCategories.filter(
        (item) => {
          return (
            item.name.toLowerCase().includes(searchString.toLowerCase()) ||
            (item.comments &&
              item.comments.toLowerCase().includes(searchString.toLowerCase()))
          );
        }
      );
      setProdSubCategoriesState({
        ...prodSubCategoriesState,
        prodSubCategories: filteredCities,
      });
    } else {
      setProdSubCategoriesState({
        ...prodSubCategoriesState,
        prodSubCategories: prodSubCategoriesState.originalProdSubCategories,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getProdSubCategories(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getProdSubCategories(1, event.target.value, noOfRec);
    }
  };

  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="prodCategoryPage">
          <div className={`main-content d-flex flex-column`}>
            {prodSubCategoriesState.isViewProdCategory ? (
              <></>
            ) : prodSubCategoriesState.isAddProdSubCategory === true ||
              prodSubCategoriesState.isEditProdSubCategory === true ? (
              <AddAndEditProdSubCategories
                prodSubCategoriesState={prodSubCategoriesState}
                setProdSubCategoriesState={setProdSubCategoriesState}
                getProdSubCategories={getProdSubCategories}
              />
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setProdSubCategoriesState({
                      ...prodSubCategoriesState,
                      isAddProdSubCategory: true,
                    });
                  }}
                >
                  Add Product Sub Category
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
                      getProdSubCategories(1, mainSearchString, e.target.value);
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
                          {prodSubCategoriesState.prodSubCategories &&
                            prodSubCategoriesState.prodSubCategories.map(
                              (prod, idx) => (
                                <tr key={idx}>
                                  <td>{prod.title && prod.title}</td>
                                  <td>{prod.link && prod.link}</td>
                                  <td>{prod.status && prod.status}</td>
                                  <td>{prod.description && prod.description}</td>
                                  <td className="text-center">
                                    <Icon.Edit2
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setProdSubCategoriesState({
                                          ...prodSubCategoriesState,
                                          isEditProdSubCategory: true,
                                          name: prod.name,
                                          comments: prod.comments,
                                          prodCategoryId: prod.id,
                                        });
                                      }}
                                      className="text-success mr-2 icon wh-15 mt-minus-3"
                                    />
                                    <Link className="text-danger mr-2">
                                      <Icon.X
                                        onClick={() =>
                                          deleteProdSubCategory(prod.id)
                                        }
                                        className="icon wh-15 mt-minus-3"
                                      />
                                    </Link>
                                  </td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </Table>
                    </div>
                    <div
                      className={`${isMobile ? "" : "d-flex"}`}
                      style={{ justifyContent: "space-between" }}
                    >
                      {prodSubCategoriesState.pagination && (
                        <>
                          <Pagination>
                            <Pagination.First
                              disabled={
                                prodSubCategoriesState.pagination.page == 1
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getProdSubCategories(1, mainSearchString, noOfRec);
                              }}
                            />
                            <Pagination.Prev
                              disabled={
                                prodSubCategoriesState.pagination.page == 1
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getProdSubCategories(
                                  prodSubCategoriesState.pagination.prev,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                            />
                            {paginationNumbers &&
                              paginationNumbers.map((item) => {
                                return (
                                  <Pagination.Item
                                    disabled={
                                      prodSubCategoriesState.pagination.page ==
                                      item
                                        ? true
                                        : false
                                    }
                                    key={item}
                                    onClick={() => {
                                      getProdSubCategories(
                                        item,
                                        mainSearchString,
                                        noOfRec
                                      );
                                    }}
                                    className="paginationButton"
                                  >
                                    {item}
                                  </Pagination.Item>
                                );
                              })}

                            <Pagination.Next
                              disabled={
                                prodSubCategoriesState.pagination.page ==
                                prodSubCategoriesState.pagination.last
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getProdSubCategories(
                                  prodSubCategoriesState.pagination.next,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                            />
                            <Pagination.Last
                              onClick={() => {
                                getProdSubCategories(
                                  prodSubCategoriesState.pagination.last,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                              disabled={
                                prodSubCategoriesState.pagination.page ==
                                prodSubCategoriesState.pagination.last
                                  ? true
                                  : false
                              }
                            />
                          </Pagination>

                          <div style={{ marginTop: "25px" }}>
                            displaying {prodSubCategoriesState.pagination.from} to{" "}
                            {prodSubCategoriesState.pagination.to} of total{" "}
                            {prodSubCategoriesState.pagination.count}
                          </div>
                        </>
                      )}
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
