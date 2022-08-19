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
import AddAndEditProduct from "./AddAndEditProducts";
import { productApis } from "../../API/ProductApis";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";
import { brandApis } from "../../API/BrandsApis";

export default function Products() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getProducts(1, "", 10);
  }, []);

  const getProducts = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

   
    try {
      const result = await productApis.getProducts(page, mainSearch, noOfRec);

      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProductsState({
          ...productsState,
          products: result.data.data,
          pagination: result.data.pagination,
          originalProducts: result.data.data,
          isAddProduct: false,
          isEditProduct: false,
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

  const deleteProduct = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productApis.deleteProduct(id);
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getProducts(1, "", 10);
      }
     
    } catch (error) {
      console.error(error);
    }
  };

  const [productsState, setProductsState] = useState({
    isEditProduct: false,
    isAddProduct: false,
    products: null,
    originalProducts: null,
    status: "active",
    description: "",
    price: "",
    location: "",
    link: "",
    city: "",
    phone_no: "",
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredProducts = productsState.products.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase())) ||
          (item.description &&
            item.description.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setProductsState({
        ...productsState,
        products: filteredProducts,
      });
    } else {
      setProductsState({
        ...productsState,
        products: productsState.originalProducts,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getProducts(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getProducts(1, event.target.value, noOfRec);
    }
  };

  const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productApis.getProductsPdf(mainSearchString);

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

  const handleGetCsv = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productApis.getProductsCsv(mainSearchString);
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
        <div className="cityPage">
          {productsState.isViewCity ? (
            <></>
          ) : productsState.isAddProduct === true ||
            productsState.isEditProduct === true ? (
            // true? (
            <AddAndEditProduct
              productsState={productsState}
              setProductsState={setProductsState}
              getProducts={getProducts}
            />
          ) : (
            <>
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setProductsState({
                      ...productsState,
                      isAddProduct: true,
                      products: null,
                      status: "active",
                      description: "",
                      price: "",
                      location: "",
                      link: "",
                      city: "",
                      phone_no: "",
                    });
                  }}
                >
                  Add Product
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
                    getProducts(1, mainSearchString, e.target.value);
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
                    <h5 className="card-title w-50 float-left">Products</h5>
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
                          <th>Cover Photo</th>
                          <th>Title</th>
                          <th>Brand</th>
                          <th>Price</th>
                          <th>City</th>
                          <th>Address</th>
                          <th>Phone Number</th>
                          <th>Featured</th>
                          <th>Status</th>
                          <th>Description</th>
                          {/*<th>Link</th>*/}
                          {/*<th>Product Type</th>*/}
                          <th>More Information</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {productsState.products &&
                          productsState.products.map((product, idx) => (
                            <tr key={idx}>
                              <td>
                                <Image
                                  src={
                                    product.cover_photo_path &&
                                    product.cover_photo_path
                                  }
                                  height="40px"
                                  width="40px"
                                  alt="No Cover photo"
                                />
                              </td>
                              <td>{product.title && product.title}</td>
                              <td>
                                {product &&
                                  product.brand &&
                                  product.brand.title}
                              </td>
                              <td>{product.price && product.price}</td>
                              <td>{product.city && product.city}</td>
                              <td>{product.location && product.location}</td>
                              <td>{product.phone_no && product.phone_no}</td>
                              <td>
                                {product.featured && product.featured
                                  ? "YES"
                                  : ""}
                              </td>
                              <td>{product.status && product.status}</td>
                              <td>
                                {product.description && product.description}
                              </td>
                              {/*<td>{product.link && product.link}</td>*/}
                              {/*<td>{product.product_type && product.product_type}</td>*/}
                              <td>
                                <div>
                                  <div className="btn btn-outline-success extraFieldsBtn relative">
                                    Hover me to view Extra Info
                                    <div className="extraFieldsContainer">
                                      <div className="popover-header bg-info">
                                        All Extra Info
                                      </div>
                                      <div className="popover-body">
                                        {product.extra_fields &&
                                        Object.entries(product.extra_fields)
                                          .length > 0 ? (
                                          <>
                                            {product.extra_fields &&
                                              Object.entries(
                                                product.extra_fields
                                              ).map((item, i) => {
                                                return (
                                                  <div key={i}>
                                                    {i + 1}.
                                                    <span className="ml-1">
                                                      <b>{item[0]}</b>
                                                    </span>
                                                    :
                                                    <span className="ml-1">
                                                      {item[1]}
                                                    </span>
                                                    <div></div>
                                                  </div>
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
                                    setProductsState({
                                      ...productsState,
                                      isEditProduct: true,
                                      title: product.title,
                                      status: product.status,
                                      description: product.description,
                                      featured: product.featured,
                                      extra_fields: product.extra_fields,
                                      productId: product.id,
                                      brand: product.brand,
																			brand_id: product.brand_id,
																			city:product.city,
																			price:product.price,
																			phone_no:product.phone_no,
																			location:product.location,
                                    });
                                  }}
                                  className="text-success mr-2 icon wh-15 mt-minus-3"
                                />
                                <Link className="text-danger mr-2">
                                  <Icon.X
                                    onClick={() => deleteProduct(product.id)}
                                    className="icon wh-15 mt-minus-3"
                                  />
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                  {productsState && productsState.pagination && (
                    <div>
                      <span>Rows per page</span>
                      <span className="mx-4">
                        {productsState.pagination.from}-
                        {productsState.pagination.to} of{" "}
                        {productsState.pagination.count}
                      </span>

                      <button
                        className={`pagination-button ${
                          productsState.pagination.page == 1 ? "disabled" : ""
                        }`}
                        onClick={() => {
                          getProducts(1, mainSearchString, noOfRec);
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
                          productsState.pagination.page == 1 ? "disabled" : ""
                        }`}
                        onClick={() => {
                          getProducts(
                            productsState.pagination.prev,
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
                          productsState.pagination.page ==
                          productsState.pagination.last
                            ? "disabled"
                            : ""
                        }`}
                        tabindex="0"
                        type="button"
                        onClick={() => {
                          getProducts(
                            productsState.pagination.next,
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
                          productsState.pagination.page ==
                          productsState.pagination.last
                            ? "disabled"
                            : ""
                        }`}
                        tabindex="0"
                        type="button"
                        onClick={() => {
                          getProducts(
                            productsState.pagination.last,
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
