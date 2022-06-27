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
import ViewCity from "./ViewCity";
import AddAndEditCity from "./AddAndEditCity";
import { city } from "../../API/City/CityApis";
import toast from "react-hot-toast";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";

export default function City() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getCities(1, "", 10);
  }, []);

  const getCities = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    console.log(page);
    try {
      const result = await city.getCities(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setCityState({
          ...cityState,
          cities: result.data.data,
          pagination: result.data.pagination,
          originalCities: result.data.data,
          isAddCity: false,
          isEditCity: false,
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

  const deleteCity = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await city.deleteCity(id);
      debugger;
      if (
        result.error == false &&
        result.data.notice == "City was successfully removed."
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getCities(1, "", 10);
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

  const [cityState, setCityState] = useState({
    isEditCity: false,
    isAddCity: false,
    isViewCity: false,
    cities: null,
    originalCities: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCities = cityState.cities.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setCityState({
        ...cityState,
        cities: filteredCities,
      });
    } else {
      setCityState({
        ...cityState,
        cities: cityState.originalCities,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getCities(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getCities(1, event.target.value, noOfRec);
    }
  };
  const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await city.getCitiesPdf(mainSearchString);
      debugger;
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        debugger;
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
      const result = await city.getCitiesCsv(mainSearchString);
      debugger;
      if (result.error === false) {
        toast.dismiss(loadingToastId);
        debugger;
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

  console.log("cityState in index", cityState);
  console.log("cityState in index", noOfRec);
  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="cityPage">
          <div className={`main-content d-flex flex-column`}>
            {cityState.isViewCity ? (
              <ViewCity cityState={cityState} setCityState={setCityState} />
            ) : cityState.isAddCity === true ||
              cityState.isEditCity === true ? (
              <AddAndEditCity
                cityState={cityState}
                setCityState={setCityState}
                getCities={getCities}
              />
            ) : (
              <>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary col-sm-2 mb-4"
                    onClick={() => {
                      setCityState({
                        ...cityState,
                        isAddCity: true,
                      });
                    }}
                  >
                    Add City
                  </button>

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
                      getCities(1, mainSearchString, e.target.value);
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
                            <th>Name</th>
                            <th>Comments</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {cityState.cities &&
                            cityState.cities.map((city, idx) => (
                              <tr key={idx}>
                                <td>{city.title && city.title}</td>
                                <td>{city.comments && city.comments}</td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setCityState({
                                        ...cityState,
                                        isEditCity: true,
                                        name: city.title,
                                        comments: city.comments,
                                        cityId: city.id,
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icon.X
                                      onClick={() => deleteCity(city.id)}
                                      className="icon wh-15 mt-minus-3"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
                    {cityState && cityState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {cityState.pagination.from}-{cityState.pagination.to}{" "}
                          of {cityState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            cityState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getCities(1, mainSearchString, noOfRec);
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
                            cityState.pagination.page == 1 ? "disabled" : ""
                          }`}
                          onClick={() => {
                            getCities(
                              cityState.pagination.prev,
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
                            cityState.pagination.page ==
                            cityState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getCities(
                              cityState.pagination.next,
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
                            cityState.pagination.page ==
                            cityState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getCities(
                              cityState.pagination.last,
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
