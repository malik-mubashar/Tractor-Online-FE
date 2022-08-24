import React, { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import SelectSearch from "./SelectSearch";
import Select from "react-select";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { prodApi } from "../../API/ProdCategoriesApis";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { useHistory } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

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
	const [searchWord,setSearchWord]=useState()
  const history = useHistory();
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


  return (
    <>
      <MDBAccordion alwaysOpen initialActive={1}>
        <div className="search-filter-container">
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
                                      `/products/search?${new URLSearchParams({
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
                          ) : null
                        ) : item[1] !== "nil" &&
                          (item[0] === "priceRangeFrom" ||
                            item[0] === "priceRangeTo") ? (
                          item[0] === "priceRangeFrom" ? (
                            <li className="d-flex" key={i}>
                              Price Range {searchFilters.priceRangeFrom} to{" "}
                              {searchFilters.priceRangeTo} PKR
                              <span class="ml-auto">
                                <i
                                  class="fa fa-times-circle"
                                  onClick={() => {
                                    history.push(
                                      `/products/search?${new URLSearchParams({
                                        ...searchFilters,
                                        priceRangeFrom: "nil",
                                        priceRangeTo: 'nil'
                                      }).toString()}`
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
                              prodCategories.find(
                                (cate) => cate.id.toString() == item[1]
                              ).title}
                            <span class="ml-auto">
                              <i
                                class="fa fa-times-circle"
                                onClick={() => {
                                  history.push(
                                    `/products/search?${new URLSearchParams({
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
                              brands.find(
                                (brand) => brand.id.toString() == item[1]
                              ).title}
                            <span class="ml-auto">
                              <i
                                class="fa fa-times-circle"
                                onClick={() => {
                                  history.push(
                                    `/products/search?${new URLSearchParams({
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
                                      `/products/search?${new URLSearchParams({
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
                          )
                        )}
                      </>
                    );
                  })
                : "No Filters"}
            </ul>
          </MDBAccordionItem>
        </div>
        <MDBAccordionItem collapseId={2} headerTitle="SEARCH BY KEYWORD">
          <Form className="nav-search-form row">
            <FormControl
              type="text"
              className="col-10"
             onChange={(e)=>{
							setSearchWord(e.target.value == "" ? "nil" : e.target.value)
						 }}
              placeholder="Search..."
						/>
						

            <input
              className="btn btn-primary refine-go col-2 p-0"
              type="submit"
							value="Go"
							onChange={(e) => {
                history.push(
                  `/products/search?${new URLSearchParams({
                    ...searchFilters,
                    title: searchWord,
                  }).toString()}`
                );
                setSearchFilters({
                  ...searchFilters,
                  title: searchWord,
                });
              }}
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
                      title={`Products for Sale in ${item.title}, Pakistan`}
                      key={item.title}
                    >
                      <label className="filter-check clearfix d-flex align-items-center">
                        <input
                          type="radio"
                          name="city"
                          style={{ height: "20px", width: "20px" }}
                          value={item.title}
                          checked={
                            searchFilters && searchFilters.city === item.title
                          }
                          onChange={(e) => {
                            history.push(
                              `/products/search?${new URLSearchParams({
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
                        <span className="ml-2 my-1"> {item.title}</span>
                      </label>
                    </li>
                  </>
                );
              })}
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="BRAND">
          <ul className="list-unstyled ">
            {brands &&
              brands.map((item) => {
                return (
                  <>
                    <li title={`Products for sale of ${item.title} Brand`}>
                      <label className="filter-check clearfix d-flex align-items-center">
                        <input
                          type="radio"
                          style={{ height: "20px", width: "20px" }}
                          checked={
                            searchFilters &&
                            searchFilters.brand.toString() ===
                              item.id.toString()
                          }
                          value={item.id}
                          onChange={(e) => {
                            setSearchFilters({
                              ...searchFilters,
                              brand: e.target.value,
                            });
                            history.push(
                              `/products/search?${new URLSearchParams({
                                ...searchFilters,
                                brand: e.target.value,
                              }).toString()}`
                            );
                          }}
                        />
                        <span className="ml-2 my-1">{item.title}</span>
                      </label>
                    </li>
                  </>
                );
              })}
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="FEATURED">
          <label className="filter-check clearfix d-flex align-items-center">
            <input
              type="checkbox"
              value="featured"
              style={{ height: "20px", width: "20px" }}
              onChange={(e) => {
                history.push(
                  `/products/search?${new URLSearchParams({
                    ...searchFilters,
                    featured: e.target.checked,
                  }).toString()}`
                );
                setSearchFilters({
                  ...searchFilters,
                  featured: e.target.checked,
                });
              }}
            />
            <span className="ml-2 my-1">Featured</span>
          </label>
        </MDBAccordionItem>

        <MDBAccordionItem collapseId={4} headerTitle="PRICE RANGE">
          <div className="priceRange">
            <div className="row">
     
              <CreatableSelect
                className="col-5 my-2 px-0 fieldHeight mainSearch price-field-in-search"
                isClearable
                placeholder="From"
                label="From"
                onChange={(e) => {
                  if (e == null) {
                    setPriceRangeFrom("nil");
                  } else {
										setPriceRangeFrom(e.label);
										if (priceRangeTo === undefined) {
											setPriceRangeTo("99999999")
										}
                  }
                }}
                options={priceRangeFromOption}
              />

              <CreatableSelect
                className="col-5 my-2 px-0 fieldHeight mainSearch price-field-in-search"
                isClearable
                label="To"
                placeholder="To"
                onChange={(e) => {
                    if (e == null) {
                      setPriceRangeTo("nil");
										} else {
											setPriceRangeTo(e.label);
											if (priceRangeFrom === undefined) {
												setPriceRangeFrom("1")
											}
                    }
                }}
                options={priceRangeToOption}
              />
              <button
                className="btn btn-primary col-2 p-0"
                style={{ height: "50px", marginTop: "9px" }}
								onClick={() => {
                  history.push(
                    `/products/search?${new URLSearchParams({
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
              >
                Go
              </button>
            </div>
          </div>
        </MDBAccordionItem>
      </MDBAccordion>
    </>
  );
}
