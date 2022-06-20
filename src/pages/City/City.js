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
import ViewCity from "./ViewCity";
import AddAndEditCity from "./AddAndEditCity";
import { city } from "../../API/City/CityApis";
import toast from "react-hot-toast";

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
          item.name.toLowerCase().includes(searchString.toLowerCase()) ||
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
                                <td>{city.name && city.name}</td>
                                <td>{city.comments && city.comments}</td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setCityState({
                                        ...cityState,
                                        isEditCity: true,
                                        name: city.name,
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
                    <div
                      className={`${isMobile ? "" : "d-flex"}`}
                      style={{ justifyContent: "space-between" }}
                    >
                      {cityState.pagination && (
                        <>
                          <Pagination>
                            <Pagination.First
                              disabled={
                                cityState.pagination.page == 1 ? true : false
                              }
                              onClick={() => {
                                getCities(1, mainSearchString, noOfRec);
                              }}
                            />
                            <Pagination.Prev
                              disabled={
                                cityState.pagination.page == 1 ? true : false
                              }
                              onClick={() => {
                                getCities(
                                  cityState.pagination.prev,
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
                                      cityState.pagination.page == item
                                        ? true
                                        : false
                                    }
                                    key={item}
                                    onClick={() => {
                                      getCities(
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
                                cityState.pagination.page ==
                                cityState.pagination.last
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getCities(
                                  cityState.pagination.next,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                            />
                            <Pagination.Last
                              onClick={() => {
                                getCities(
                                  cityState.pagination.last,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                              disabled={
                                cityState.pagination.page ==
                                cityState.pagination.last
                                  ? true
                                  : false
                              }
                            />
                          </Pagination>

                          <div style={{ marginTop: "25px" }}>
                            displaying {cityState.pagination.from} to{" "}
                            {cityState.pagination.to} of total{" "}
                            {cityState.pagination.count}
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
