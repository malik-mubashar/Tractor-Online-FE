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
import AddAndEditBrands from "./AddAndEditBrands";
// import { brandApis } from "../../API/BrandsApis";
import toast from "react-hot-toast";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";
import { brandApis } from "../../API/BrandsApis";
import Icofont from "react-icofont";

export default function Brands() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getBrands(1, "", 10);
  }, []);

  const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setBrandsState({
          ...brandsState,
          brands: result.data.data,
          pagination: result.data.pagination,
          originalBrands: result.data.data,
          isAddBrand: false,
          isEditBrand: false,
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

  const deleteBrand = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await brandApis.deleteBrand(id);
       
      if (
        result.error === false
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getBrands(1, "", 10);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  const [brandsState, setBrandsState] = useState({
    isEditBrand: false,
    isAddBrand: false,
    isViewBrand: false,
    brands: null,
    originalBrands: null,
    status: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCities = brandsState.brands.filter(
        (item) => {
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
        }
      );
      setBrandsState({
        ...brandsState,
        brands: filteredCities,
      });
    } else {
      setBrandsState({
        ...brandsState,
        brands: brandsState.originalBrands,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getBrands(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getBrands(1, event.target.value, noOfRec);
    }
  };
  const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await brandApis.getBrandsPdf(mainSearchString);
       
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
      const result = await brandApis.getBrandsCsv(mainSearchString);
       
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
        <div className="brandPage">
            {brandsState.isViewBrand ? (
              <></>
            ) : brandsState.isAddBrand === true ||
              brandsState.isEditBrand === true ? (
              <AddAndEditBrands
                brandsState={brandsState}
                setBrandsState={setBrandsState}
                getBrands={getBrands}
              />
            ) : (
              <>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary col-sm-2 mb-4"
                    onClick={() => {
                      setBrandsState({
                        ...brandsState,
												isAddBrand: true,
												title: null,
												status: null,
												link: null,
												icon:null
                      });
                    }}
                  >
                    Add  Brand
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
                      getBrands(1, mainSearchString, e.target.value);
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
                        Brands
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
                          {brandsState.brands &&
                            brandsState.brands.map(
                              (brand, idx) => (
                                <tr key={idx}>
																	<td>
                                    <Image
                                      onClick={() => {
                                        handleGetCsv();
                                      }}
                                      className="clickableSvg"
                                      src={`${brand.active_image_path}`}
                                      height="40px"
                                      width="60px"
                                      alt="Profile Image"
																		/>
                                  </td>
                                  <td>{brand.title && brand.title}</td>
                                  <td>{brand.link && brand.link}</td>
                                  <td>{brand.icon && brand.icon}</td>
                                  <td>{brand.status && brand.status}</td>
                                  <td>
                                    {brand.description && brand.description}
                                  </td>
                                  <td className="text-center">
                                    <Icon.Edit2
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setBrandsState({
                                          ...brandsState,
                                          isEditBrand: true,
                                          title: brand.title,
                                          icon: brand.icon,
                                          link: brand.link,
                                          status: brand.status,
                                          description: brand.description,
																					brandId: brand.id,
																					product_categories: brand.product_categories,
																					product_category_id: brand.product_categories.map((item)=>item.id)
                                        });
                                      }}
                                      className="text-success mr-2 icon wh-15 mt-minus-3"
                                    />
                                    <Link className="text-danger mr-2">
                                      <Icofont icon="ui-delete"
                                        onClick={() =>
                                          { if (window.confirm('Are you sure you wish to delete this item?'))
                                          deleteBrand(brand.id)
                                        }}
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
                    {brandsState && brandsState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {brandsState.pagination.from}-
                          {brandsState.pagination.to} of{" "}
                          {brandsState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            brandsState.pagination.page == 1
                              ? "disabled"
                              : ""
                          }`}
                          onClick={() => {
                            getBrands(1, mainSearchString, noOfRec);
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
                            brandsState.pagination.page == 1
                              ? "disabled"
                              : ""
                          }`}
                          onClick={() => {
                            getBrands(
                              brandsState.pagination.prev,
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
                            brandsState.pagination.page ==
                            brandsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getBrands(
                              brandsState.pagination.next,
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
                            brandsState.pagination.page ==
                            brandsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getBrands(
                              brandsState.pagination.last,
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
