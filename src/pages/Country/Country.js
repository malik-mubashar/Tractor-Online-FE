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
import AddAndEditCountry from "./AddAndEditCountry";
import { country } from "../../API/Country/CountryApis";
import toast from "react-hot-toast";

export default function Country() {
  const [paginationNumbers, setPaginationNumbers] = useState();
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getCountries(1, "", 10);
  }, []);

	const getCountries = async (page, mainSearch, noOfRec) => {
		const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await country.getCountries(page, mainSearch, noOfRec);
			if (result.error == false && result.data.status == "success") {
				toast.dismiss(loadingToastId);
        setCountryState({
          ...countryState,
          countries: result.data.data,
          pagination: result.data.pagination,
          originalCountries: result.data.data,
          isAddCountry: false,
          isEditCountry: false,
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

	const deleteCountry = async (id) => {
		const loadingToastId = toast.loading("Loading..!");
    try {
			const result = await country.deleteCountry(id);
			 
      if (result.error == false && result.data.notice == "Country was successfully removed.") {
				toast.dismiss(loadingToastId);
				toast.success("Successfully deleted!");

				getCountries(1, "", 10);
      }
		} catch (error) {
			toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const [sideMenu, setSideMenu] = useState(false);
  function onSideMenu(active) {
    setSideMenu(active);
  }

  const [countryState, setCountryState] = useState({
    isEditCountry: false,
    isAddCountry: false,
    isViewCountry: false,
    countries: null,
    originalCountries: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCountries = countryState.countries.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchString.toLowerCase()) ||
          (item.comments &&
            item.comments.toLowerCase().includes(searchString.toLowerCase()))
        );
      });
      setCountryState({
        ...countryState,
        countries: filteredCountries,
      });
    } else {
      setCountryState({
        ...countryState,
        countries: countryState.originalcountries,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getCountries(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getCountries(1, event.target.value, noOfRec);
    }
  };

  console.log("CountryState in index", countryState);
  console.log("CountryState in index", noOfRec);
  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="countryPage">
          <div className={`main-content d-flex flex-column`}>
						{countryState.isViewCountry ? (
						<></>
              // <ViewCountry countryState={countryState} setCountryState={setCountryState} />
            ) : countryState.isAddCountry === true ||
              countryState.isEditCountry === true ? (
              <AddAndEditCountry
                countryState={countryState}
                setCountryState={setCountryState}
                getCountries={getCountries}
              />
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setCountryState({
                      ...countryState,
                      isAddCountry: true,
                    });
                  }}
                >
                  Add Country
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
													getCountries(1, mainSearchString, e.target.value);                    }}
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
                          {countryState.countries &&
                            countryState.countries.map((country, idx) => (
                              <tr key={idx}>
                                <td>{country.title && country.title}</td>
                                <td>{country.comments && country.comments}</td>
                                <td className="text-center">
                                  <Icon.Edit2
                                    style={{ cursor: "pointer" }}
																		onClick={() => {
																			 
                                      setCountryState({
                                        ...countryState,
                                        isEditCountry: true,
                                        title: country.title,
                                        comments: country.comments,
                                        countryId: country.id,
                                      });
                                    }}
                                    className="text-success mr-2 icon wh-15 mt-minus-3"
                                  />
                                  <Link className="text-danger mr-2">
                                    <Icon.X
                                      onClick={() => deleteCountry(country.id)}
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
                      {countryState.pagination && (
                        <>
                          <Pagination>
                            <Pagination.First
                              disabled={
                                countryState.pagination.page == 1 ? true : false
                              }
                              onClick={() => {
                                getCountries(1, mainSearchString, noOfRec);
                              }}
                            />
                            <Pagination.Prev
                              disabled={
                                countryState.pagination.page == 1 ? true : false
                              }
                              onClick={() => {
                                getCountries(
                                  countryState.pagination.prev,
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
                                      countryState.pagination.page == item
                                        ? true
                                        : false
                                    }
                                    key={item}
                                    onClick={() => {
                                      getCountries(
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
                                countryState.pagination.page ==
                                countryState.pagination.last
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                getCountries(
                                  countryState.pagination.next,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                            />
                            <Pagination.Last
                              onClick={() => {
                                getCountries(
                                  countryState.pagination.last,
                                  mainSearchString,
                                  noOfRec
                                );
                              }}
                              disabled={
                                countryState.pagination.page ==
                                countryState.pagination.last
                                  ? true
                                  : false
                              }
                            />
                          </Pagination>

                          <div style={{ marginTop: "25px" }}>
                            displaying {countryState.pagination.from} to{" "}
                            {countryState.pagination.to} of total{" "}
                            {countryState.pagination.count}
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
