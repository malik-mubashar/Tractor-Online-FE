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
import AddAndEditProdCategories from "./AddAndEditProdCategories";
import { prodApi } from "../../API/ProdCategoriesApis";
import toast from "react-hot-toast";

export default function ProdCategories() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getProdCategories(1, "", 10);
  }, []);

  const getProdCategories = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProdCategoriesState({
          ...prodCategoriesState,
          prodCategories: result.data.data,
          pagination: result.data.pagination,
          originalProdCategories: result.data.data,
          isAddProdCategory: false,
          isEditProdCategory: false,
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

  const deleteProdCategory = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await prodApi.deleteProdCategory(id);
      debugger;
      if (
        result.error == false &&
        result.data.notice == "Product Category was successfully removed."
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getProdCategories(1, "", 10);
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

  const [prodCategoriesState, setProdCategoriesState] = useState({
    isEditProdCategory: false,
    isAddProdCategory: false,
    isViewProdCategory: false,
    prodCategories: null,
    originalProdCategories: null,
    status: "active",
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCities = prodCategoriesState.prodCategories.filter(
        (item) => {
          return (
            item.name.toLowerCase().includes(searchString.toLowerCase()) ||
            (item.comments &&
              item.comments.toLowerCase().includes(searchString.toLowerCase()))
          );
        }
      );
      setProdCategoriesState({
        ...prodCategoriesState,
        prodCategories: filteredCities,
      });
    } else {
      setProdCategoriesState({
        ...prodCategoriesState,
        prodCategories: prodCategoriesState.originalProdCategories,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getProdCategories(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getProdCategories(1, event.target.value, noOfRec);
    }
  };

  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="prodCategoryPage">
          <div className={`main-content d-flex flex-column`}>
            {prodCategoriesState.isViewProdCategory ? (
              <></>
            ) : prodCategoriesState.isAddProdCategory === true ||
              prodCategoriesState.isEditProdCategory === true ? (
              <AddAndEditProdCategories
                prodCategoriesState={prodCategoriesState}
                setProdCategoriesState={setProdCategoriesState}
                getProdCategories={getProdCategories}
              />
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setProdCategoriesState({
                      ...prodCategoriesState,
                      isAddProdCategory: true,
                    });
                  }}
                >
                  Add Product Category
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
                      getProdCategories(1, mainSearchString, e.target.value);
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
                          {prodCategoriesState.prodCategories &&
                            prodCategoriesState.prodCategories.map(
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
                                        setProdCategoriesState({
                                          ...prodCategoriesState,
                                          isEditProdCategory: true,
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
                                          deleteProdCategory(prod.id)
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
                      {prodCategoriesState.pagination && (
                        <>
                          <Pagination>
                            <Pagination.First
                              disabled={
                                prodCategoriesState.pagination.page == 1
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getProdCategories(1, mainSearchString, noOfRec);
                              }}
                            />
                            <Pagination.Prev
                              disabled={
                                prodCategoriesState.pagination.page == 1
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getProdCategories(
                                  prodCategoriesState.pagination.prev,
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
                                      prodCategoriesState.pagination.page ==
                                      item
                                        ? true
                                        : false
                                    }
                                    key={item}
                                    onClick={() => {
                                      getProdCategories(
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
                                prodCategoriesState.pagination.page ==
                                prodCategoriesState.pagination.last
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getProdCategories(
                                  prodCategoriesState.pagination.next,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                            />
                            <Pagination.Last
                              onClick={() => {
                                getProdCategories(
                                  prodCategoriesState.pagination.last,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                              disabled={
                                prodCategoriesState.pagination.page ==
                                prodCategoriesState.pagination.last
                                  ? true
                                  : false
                              }
                            />
                          </Pagination>

                          <div style={{ marginTop: "25px" }}>
                            displaying {prodCategoriesState.pagination.from} to{" "}
                            {prodCategoriesState.pagination.to} of total{" "}
                            {prodCategoriesState.pagination.count}
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
