import React, { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import SelectSearch from "./SelectSearch";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { prodApi } from "../../API/ProdCategoriesApis";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { useHistory } from "react-router-dom";

export default function SideSearch({
  setSearchFilters,
  cities,
  searchFilters,
  priceRangeFrom,
  setPriceRangeFrom,
  priceRangeTo,
  setPriceRangeTo,
  brands,
  prodCategories,
}) {
  const history = useHistory();
  const make = ["balarus", "messy"];
  const priceRangeFromOption = [
    { label: "10000", value: "10000" },
    { label: "20000", value: "20000" },
    { label: "30000", value: "30000" },
    { label: "40000", value: "40000" },
    { label: "50000", value: "50000" },
    { label: "60000", value: "60000" },
    { label: "70000", value: "70000" },
  ];

  const priceRangeToOption = [
    { label: "100000", value: "100000" },
    { label: "200000", value: "200000" },
    { label: "300000", value: "300000" },
    { label: "400000", value: "400000" },
    { label: "500000", value: "500000" },
    { label: "600000", value: "600000" },
    { label: "700000", value: "700000" },
  ];

  console.log("searchFilters", searchFilters);
  return (
    <>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="SEARCH FILTERS">
          <ul class="list-unstyled">
            {searchFilters !== undefined
              ? Object.entries(searchFilters).map((item, i) => {
                  return (
                    <>
                      {item[0] === "featured" ? (
                        item[1] === true ? (
                          <li className="d-flex" key={i}>
                            {item[0]}
                            <span class="ml-auto">
                              <i
                                class="fa fa-times-circle"
                                onClick={() => {
                                  history.push(
                                    `/used-tractor/search?${new URLSearchParams(
                                      {
                                        ...searchFilters,
                                        [item[0]]: "nil",
                                      }
                                    ).toString()}`
                                  );
                                  setSearchFilters({
                                    ...searchFilters,
                                    [item[0]]: "nil",
                                  });
                                }}
                              ></i>
                            </span>
                          </li>
                        ) : null
                      ) : item[1] !== "nil" &&
                        (item[0] === "priceRangeFrom" ||
                          item[0] === "priceRangeTo") ? (
                        item[0] === "priceRangeFrom" ? (
                          <li className="d-flex" key={i}>
                            Price Range ${searchFilters.priceRangeFrom} to $
                            {searchFilters.priceRangeTo}
                            <span class="ml-auto">
                              <i
                                class="fa fa-times-circle"
                                onClick={() => {
                                  history.push(
                                    `/used-tractor/search?${new URLSearchParams(
                                      {
                                        ...searchFilters,
                                        [item[0]]: "nil",
                                      }
                                    ).toString()}`
                                  );
                                  setSearchFilters({
                                    ...searchFilters,
                                    priceRangeTo: "nil",
                                    priceRangeFrom: "nil",
                                  });
                                }}
                              ></i>
                            </span>
                          </li>
                        ) : null
                      ) : item[1] !== "nil" && item[0] === "category" ? (
                        <li className="d-flex" key={i}>
                          {prodCategories &&
                            prodCategories.find((cate) => cate.id.toString() == item[1])
                              .title}
                          <span class="ml-auto">
                            <i
                              class="fa fa-times-circle"
                              onClick={() => {
                                history.push(
                                  `/used-tractor/search?${new URLSearchParams({
                                    ...searchFilters,
                                    [item[0]]: "nil",
                                  }).toString()}`
                                );
                                setSearchFilters({
                                  ...searchFilters,
                                  [item[0]]: "nil",
                                });
                              }}
                            ></i>
                          </span>
                        </li>
                      ) : item[1] !== "nil" && item[0] === "brand" ? (
                        <li className="d-flex" key={i}>
                          {brands &&
                            brands.find((brand) => brand.id.toString() == item[1]).title}
                          <span class="ml-auto">
                            <i
                              class="fa fa-times-circle"
                              onClick={() => {
                                history.push(
                                  `/used-tractor/search?${new URLSearchParams({
                                    ...searchFilters,
                                    [item[0]]: "nil",
                                  }).toString()}`
                                );
                                setSearchFilters({
                                  ...searchFilters,
                                  [item[0]]: "nil",
                                });
                              }}
                            ></i>
                          </span>
                        </li>
                      ) : (
                        item[1] !== "nil" && (
                          <li className="d-flex" key={i}>
                            {item[1]}
                            <span class="ml-auto">
                              <i
                                class="fa fa-times-circle"
                                onClick={() => {
                                  history.push(
                                    `/used-tractor/search?${new URLSearchParams(
                                      {
                                        ...searchFilters,
                                        [item[0]]: "nil",
                                      }
                                    ).toString()}`
                                  );
                                  setSearchFilters({
                                    ...searchFilters,
                                    [item[0]]: "nil",
                                  });
                                }}
                              ></i>
                            </span>
                          </li>
                        )
                      )}
                    </>
                  );
                })
              : "No Filters"}
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="SEARCH BY KEYWORD">
          <Form
            className="nav-search-form row"
            // onSubmit={this._handleSubmit}
            // action= "/dashboard/search"
          >
            <FormControl
              type="text"
              className="col-10"
              // value={this.state.term}
              // onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />

            <input
              className="btn btn-primary refine-go col-2"
              type="submit"
              value="Go"
            />
          </Form>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="CITY">
          <ul className="list-unstyled ">
            {cities &&
              cities.map((item) => {
                return (
                  <>
                    <li
                      title="Cars for Sale in Lahore, Pakistan"
                      key={item.title}
                    >
                      <label className="filter-check clearfix">
                        <input
                          type="radio"
                          name="city"
                          value={item.title}
                          checked={
                            searchFilters && searchFilters.city === item.title
                          }
                          onChange={(e) => {
                            history.push(
                              `/used-tractor/search?${new URLSearchParams({
                                ...searchFilters,
                                city: e.target.value,
                              }).toString()}`
                            );
                            setSearchFilters({
                              ...searchFilters,
                              city: e.target.value,
                            });
                          }}
                        />
                       <span className="ml-1 my-1"> {item.title}</span>
                        <span className="pull-right count"></span>
                      </label>
                    </li>
                  </>
                );
              })}
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="MAKE">
          <ul className="list-unstyled ">
            {make &&
              make.map((item) => {
                return (
                  <>
                    <li title="Cars for Sale in Lahore, Pakistan">
                      <label className="filter-check clearfix">
                        <input
                          type="radio"
                          checked={searchFilters && searchFilters.make === item}
                          value={item}
                          onChange={(e) => {
                            history.push(
                              `/used-tractor/search?${new URLSearchParams({
                                ...searchFilters,
                                make: e.target.value,
                              }).toString()}`
                            );
                            setSearchFilters({
                              ...searchFilters,
                              make: e.target.value,
                            });
                          }}
                        />
                        {item}
                        <span className="pull-right count"></span>
                      </label>
                    </li>
                  </>
                );
              })}
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="FEATURED">
          <label className="filter-check clearfix">
            <input
              type="checkbox"
              value="featured"
              onChange={(e) => {
                history.push(
                  `/used-tractor/search?${new URLSearchParams({
                    ...searchFilters,
                    featured: e.target.value,
                  }).toString()}`
                );
                setSearchFilters({
                  ...searchFilters,
                  featured: e.target.checked,
                });
              }}
            />
            featured
          </label>
        </MDBAccordionItem>

        <MDBAccordionItem collapseId={4} headerTitle="PRICE RANGE">
          <div className="priceRange">
            <ul className="list-unstyled justify-content-center d-flex">
              <li className="home-autocomplete-field"></li>
              <li className="col-5 px-0">
                <SelectSearch
                  options={priceRangeFromOption}
                  setValue={setPriceRangeFrom}
                  label="From"
                  value={priceRangeFrom}
                />
              </li>
              <li className="col-5 px-0">
                <SelectSearch
                  options={priceRangeToOption}
                  setValue={setPriceRangeTo}
                  label="To"
                  value={priceRangeTo}
                />
              </li>
              <li className="col-2 px-0">
                <input
                  className="btn btn-primary refine-go"
                  type="submit"
                  value="Go"
                  onClick={() => {
                    history.push(
                      `/used-tractor/search?${new URLSearchParams({
                        ...searchFilters,
                        priceRangeFrom: priceRangeFrom,
                        priceRangeTo: priceRangeTo,
                      }).toString()}`
                    );
                    setSearchFilters({
                      ...searchFilters,
                      priceRangeTo: priceRangeTo,
                      priceRangeFrom: priceRangeFrom,
                    });
                  }}
                />
              </li>
            </ul>
          </div>
        </MDBAccordionItem>
      </MDBAccordion>
    </>
  );
}
