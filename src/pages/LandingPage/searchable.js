/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import { Button } from "react-bootstrap";
import SelectSearch from "./SelectSearch";

const searchAble = () => {
  const [tractorModel, setTractorModel] = useState("");
  const [country, setCountry] = useState("");
  const [minPrice, setMinPrice] = useState();

  const [maxPrice, setMaxPrice] = useState();

  const countryOptions = [
    { label: "Melsi", value: "Melsi" },
    { label: "Pasrur", value: "Pasrur" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Rawalpindi", value: "Rawalpindi" },
    { label: "Peshawar", value: "Peshawar" },
    { label: "Abbottabad", value: "Abbottabad" },
    { label: "Abdul Hakeem", value: "Abdul Hakeem" },
    { label: "Adda jahan khan", value: "Adda jahan khan" },
    { label: "dda shaiwala", value: "dda shaiwala" },
    { label: "Chashma", value: "Chashma" },
    { label: "Chakwal", value: "Chakwal" },
    { label: "Daulatpur", value: "Daulatpur" },
    { label: "Hariwala", value: "Hariwala" },
    { label: "Jhudo", value: "Jhudo" },
    { label: "Matli", value: "Matli" },
  ];
  const [minPriceOptions, setMinPriceOptions] = useState([
    { label: "5 lac", value: "5 lac" },
    { label: "10 lac", value: "10 lac" },
    { label: "20 lac", value: "20 lac" },
    { label: "15 lac", value: "15 lac" },
    { label: "14 lac", value: "14 lac" },
    { label: "12 lac", value: "12 lac" },
    { label: "11 lac", value: "11 lac" },
    { label: "22 lac", value: "22 lac" },
    { label: "25 lac", value: "25 lac" },
    { label: "24 lac", value: "24 lac" },
    { label: "23 lac", value: "23 lac" },
    { label: "27 lac", value: "27 lac" },
    { label: "1 lac", value: "1 lac" },
    { label: "2 lac", value: "2 lac" },
    { label: "3 lac", value: "3 lac" },
  ]);
  const [maxPriceOptions, setMaxPriceOptions] = useState([
    { label: "5 lac", value: "5 lac" },
    { label: "10 lac", value: "10 lac" },
    { label: "20 lac", value: "20 lac" },
    { label: "15 lac", value: "15 lac" },
    { label: "14 lac", value: "14 lac" },
    { label: "12 lac", value: "12 lac" },
    { label: "11 lac", value: "11 lac" },
    { label: "22 lac", value: "22 lac" },
    { label: "25 lac", value: "25 lac" },
    { label: "24 lac", value: "24 lac" },
    { label: "23 lac", value: "23 lac" },
    { label: "27 lac", value: "27 lac" },
    { label: "1 lac", value: "1 lac" },
    { label: "2 lac", value: "2 lac" },
    { label: "3 lac", value: "3 lac" },
  ]);

  useEffect(() => {
    if (minPrice) {
      let temp = maxPriceOptions.filter(function(x) {
        return parseInt(x.label) > parseInt(minPrice);
      });
      setMaxPriceOptions(temp);
    }
  }, [minPrice]);
  useEffect(() => {
    if (maxPrice) {
      let temp = minPriceOptions.filter(function(x) {
        return parseInt(x.label) < parseInt(maxPrice);
      });
      setMinPriceOptions(temp);
    }
  }, [maxPrice]);

  return (
    <>
      <ul className="list-unstyled search-front clearfix d-flex justify-content-center d-flex">
        <li className="home-autocomplete-field">
          <input
            data-autocomplete-class="home-autocomplete"
            data-pw-source="car"
            id="home-query"
            name="home-query"
            placeholder="Tractor Make or Model"
            tabIndex="2"
            type="text"
            value={tractorModel}
            onChange={(e) => setTractorModel(e.target.value)}
            className="ui-autocomplete-input form-control searchAble border-left-radius border-right"
            autoComplete="off"
          />
        </li>
        <li className="col-2 px-0">
          <SelectSearch
            options={countryOptions}
            setValue={setCountry}
            label="Select Country"
            value={country}
          />
        </li>
        <li className="col-1 px-0">
          <SelectSearch
            options={minPriceOptions}
            setValue={setMinPrice}
            label="Select Min Price "
            value={minPrice}
          />
        </li>
        <li className="col-1 px-0">
          <SelectSearch
            options={maxPriceOptions}
            setValue={setMaxPrice}
            label="Select Max Price"
            value={maxPrice}
          />
        </li>
        <li>
          <button
            className="btn-success p-1  searchAble border-right-radius"
            type="submit"
          >
            <Icon.Search className="icon" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default searchAble;
