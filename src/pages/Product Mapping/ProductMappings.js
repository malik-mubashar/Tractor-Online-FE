import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import {
  Table,
  Button,
  FormControl,
  Form,
  Pagination,
  Image,
} from "react-bootstrap";
import toast from "react-hot-toast";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";
import { productMappingApis } from "../../API/ProductMappingApis";
import AddAndEditProductMappings from "./AddAndEditProductMapping";

export default function ProductMappings() {
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getProductMappings(1, "", 10);
  }, []);

  const getProductMappings = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    console.log(page);
    try {
      const result = await productMappingApis.getProductMappings(
        page,
        mainSearch,
        noOfRec
      );

      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProductMappingsState({
          ...productMappingsState,
          productMappings: result.data.data,
          pagination: result.data.pagination,
          originalProductMappings: result.data.data,
          isAddProductMapping: false,
          isEditProductMapping: false,
        });
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const deleteProductMapping = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productMappingApis.deleteProductMapping(id);
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getProductMappings(1, "", 10);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const [productMappingsState, setProductMappingsState] = useState({
    isEditProductMapping: false,
    isAddProductMapping: false,
    productMappings: null,
    originalProductMappings: null,

  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredProductMappings = productMappingsState.products.filter(
        (item) => {
          return (
            item.title.toLowerCase().includes(searchString.toLowerCase()) ||
            (item.comments &&
              item.comments
                .toLowerCase()
                .includes(searchString.toLowerCase())) ||
            (item.description &&
              item.description
                .toLowerCase()
                .includes(searchString.toLowerCase()))
          );
        }
      );
      setProductMappingsState({
        ...productMappingsState,
        productMappings: filteredProductMappings,
      });
    } else {
      setProductMappingsState({
        ...productMappingsState,
        products: productMappingsState.originalProductMappings,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getProductMappings(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getProductMappings(1, event.target.value, noOfRec);
    }
  };

  const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productMappingApis.getProductMappingsPdf(
        mainSearchString
      );

      if (result.error === false) {
        toast.dismiss(loadingToastId);

        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
        console.log("error");
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
    }
  };

  const handleGetCsv = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productMappingApis.getProductMappingsCsv(
        mainSearchString
      );
      if (result.error === false) {
        toast.dismiss(loadingToastId);

        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
        console.log("error");
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
    }
  };

  console.log("productMappingsState in index", productMappingsState);
  return (
    <>
      <>
        <div className="cityPage">
          {productMappingsState.isViewCity ? (
            <></>
          ) : productMappingsState.isAddProductMapping === true ||
            productMappingsState.isEditProductMapping === true ? (
            // true? (
            <AddAndEditProductMappings
              productMappingsState={productMappingsState}
              setProductMappingsState={setProductMappingsState}
              getProductMappings={getProductMappings}
            />
          ) : (
            <>
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setProductMappingsState({
                      ...productMappingsState,
                      isAddProductMapping: true,
                    });
                  }}
                >
                  Add ProductMapping
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
                    getProductMappings(1, mainSearchString, e.target.value);
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
                    <h5 className="card-title w-50 float-left">
                      ProductMappings
                    </h5>
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
                          <th>Product Category</th>

                          <th>Extra Fields</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {productMappingsState.productMappings &&
                          productMappingsState.productMappings.map(
                            (item, idx) => (
                              <tr key={idx}>
                                <td>
                                  {item.product_category &&
                                    item.product_category.title}
                                </td>

                                <td>
                                  <div>
                                    <div className="btn btn-outline-success extraFieldsBtn relative">
                                      Hover me to view Extra Fields
                                      <div className="extraFieldsContainer">
                                        <div className="popover-header bg-info">
                                          All Extra Fields
                                        </div>
                                        <div className="popover-body">
                                          {item.extra_fields &&
                                          Object.entries(item.extra_fields)
                                            .length > 0 ? (
                                            <>
                                              {item.extra_fields &&
                                                Object.entries(
                                                  item.extra_fields
                                                ).map((item, i) => {
                                                  return (
                                                    <>
                                                      {i + 1}.
                                                      <span className="ml-1">
                                                        <b>{item[0]}</b>
                                                      </span>
                                                      :
                                                      <span className="ml-1">
                                                        {item[1]}
                                                      </span>
                                                      <div></div>
                                                    </>
                                                  );
                                                })}
                                            </>
                                          ) : (
                                            <div className="text-danger text-center">
                                              No Record Found...
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setProductMappingsState({
                                        ...productMappingsState,
                                        isEditProductMapping: true,
                                        extra_fields: item.extra_fields,
																				product_category: item.product_category,
																				productMappingId: item.id,
																				product_category_id:item.product_category.id
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icon.X
                                      onClick={() =>
                                        deleteProductMapping(item.id)
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
                  {productMappingsState && productMappingsState.pagination && (
                    <div>
                      <span>Rows per page</span>
                      <span className="mx-4">
                        {productMappingsState.pagination.from}-
                        {productMappingsState.pagination.to} of{" "}
                        {productMappingsState.pagination.count}
                      </span>

                      <button
                        className={`pagination-button ${
                          productMappingsState.pagination.page == 1
                            ? "disabled"
                            : ""
                        }`}
                        onClick={() => {
                          getProductMappings(1, mainSearchString, noOfRec);
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
                          productMappingsState.pagination.page == 1
                            ? "disabled"
                            : ""
                        }`}
                        onClick={() => {
                          getProductMappings(
                            productMappingsState.pagination.prev,
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
                          productMappingsState.pagination.page ==
                          productMappingsState.pagination.last
                            ? "disabled"
                            : ""
                        }`}
                        tabindex="0"
                        type="button"
                        onClick={() => {
                          getProductMappings(
                            productMappingsState.pagination.next,
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
                          productMappingsState.pagination.page ==
                          productMappingsState.pagination.last
                            ? "disabled"
                            : ""
                        }`}
                        tabindex="0"
                        type="button"
                        onClick={() => {
                          getProductMappings(
                            productMappingsState.pagination.last,
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
