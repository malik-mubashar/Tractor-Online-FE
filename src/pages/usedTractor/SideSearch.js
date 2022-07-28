import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import SelectSearch from "./SelectSearch";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

export default function SideSearch({
  setSearchFilters,
  cities,
  searchFilters,
  priceRangeFrom,
  setPriceRangeFrom,
  priceRangeTo,
  setPriceRangeTo,
}) {
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
	
	const [first, setfirst] = useState(false)

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
														<i class="fa fa-times-circle" onClick={()=>setSearchFilters({...searchFilters,[item[0]]:'nil'})}></i>
                            </span>
                          </li>
                        ) : null
											) : item[1] !== 'nil' &&
												(item[0] === "priceRangeFrom" ||
                        item[0] === "priceRangeTo") ? (
														item[0] === "priceRangeFrom" ? (
															<li className="d-flex" key={i}>
                          Price Range ${searchFilters.priceRangeFrom} to ${searchFilters.priceRangeTo}
															<span class="ml-auto">
																<i class="fa fa-times-circle" onClick={()=>setSearchFilters({...searchFilters,priceRangeTo:'nil',priceRangeFrom:'nil'})}></i>
															</span>
														</li>
                        ) : null
                      ) : (item[1]!=='nil'&&
                        <li className="d-flex" key={i}>
                          {item[1]}
                          <span class="ml-auto">
                            <i class="fa fa-times-circle" onClick={()=>setSearchFilters({...searchFilters,[item[0]]:'nil'})}></i>
                          </span>
                        </li>
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
            // action="/search/"
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
													checked={searchFilters&&searchFilters.city === item.title}
                          onChange={(e) => {
                            setSearchFilters({
                              ...searchFilters,
                              city: e.target.value,
                            });
                          }}
                        />
                        {item.title}
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
													checked={searchFilters&&searchFilters.make === item}
                          value={item}
                          onChange={(e) => {
                            setSearchFilters({
                              ...searchFilters,
                              make: e.target.value,
                            });
                          }}
                        />
                        {item}
                        <span className="pull-right count">14256</span>
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
                  onClick={() =>
                    setSearchFilters({
                      ...searchFilters,
                      priceRangeTo: priceRangeTo,
                      priceRangeFrom: priceRangeFrom,
                    })
                  }
                />
              </li>
            </ul>
          </div>
        </MDBAccordionItem>
      </MDBAccordion>
    </>
  );
}
