/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import * as Icon from "react-feather";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { RootContext } from "../../context/RootContext";
const searchAble = ({ cities }) => {
	const history = useHistory();
	const { setLandingPageSearchOptions } = useContext(RootContext);

  const [makeOrModel, setTractorModel] = useState("");
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState();

  const [maxPrice, setMaxPrice] = useState();
  const [minPriceOptions, setMinPriceOptions] = useState([

		{ label: "10000", value: "10000" },
    { label: "20000", value: "20000" },
    { label: "30000", value: "30000" },
    { label: "40000", value: "40000" },
    { label: "50000", value: "50000" },
    { label: "60000", value: "60000" },
    { label: "70000", value: "70000" },
  ]);
  const [maxPriceOptions, setMaxPriceOptions] = useState([
		{ label: "100000", value: "100000" },
    { label: "200000", value: "200000" },
    { label: "300000", value: "300000" },
    { label: "400000", value: "400000" },
    { label: "500000", value: "500000" },
    { label: "600000", value: "600000" },
    { label: "700000", value: "700000" },
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
	console.log('{city}',city,)
	console.log('{maxPrice}',maxPrice)
	console.log('{minPrice}',  minPrice)
	console.log('{makeOrModel}',makeOrModel)
	
  return (
    <>
      <ul className="list-unstyled search-front clearfix d-flex justify-content-center d-flex">
        <li className="home-autocomplete-field">
          <input
            data-autocomplete-class="home-autocomplete"
            data-pw-source="car"
            id="home-query"
            name="home-query"
            placeholder="Search by Name..."
            tabIndex="2"
            type="text"
            value={makeOrModel}
            onChange={(e) => setTractorModel(e.target.value)}
            className="ui-autocomplete-input form-control searchAble border-left-radius border-right px-2"
            autoComplete="off"
          />
        </li>
        <li className="col-2 px-0">
          <Select
            className="ui-autocomplete-input form-control searchAble border-right "
            options={cities}
            // setValue={setCity}
            label="Select City"
            value={city}
            placeholder="Select City"
            onChange={(e) => {if(e){setCity(e.label)}}}
            clearable={false}
          />
        </li>
        <li className="col-1 px-0">
          <Select
            className="ui-autocomplete-input form-control searchAble border-right"
            options={minPriceOptions}
            // setValue={setMinPrice}
            label="Select Min Price "
            value={minPrice}
            placeholder="Select Min Price"
            onChange={(e) => {if(e){setMinPrice(e.label)}}}
            clearable={false}
          />
        </li>
        <li className="col-1 px-0">
          <Select
            className="ui-autocomplete-input form-control searchAble border-right"
            options={maxPriceOptions}
            // setValue={setMaxPrice}
            label="Select Max Price"
            placeholder="Select Max Price"
            value={maxPrice}
            onChange={(e) => {setMaxPrice(e.label)}}
            clearable={false}
          />
        </li>
        <li>
          <button
            className="btn-success p-1  searchAble border-right-radius"
						type="submit"
						onClick={() => {
							debugger;
							setLandingPageSearchOptions({
								city: city || 'nil',
								priceRangeTo: maxPrice || 'nil',
								priceRangeFrom: minPrice || 'nil',
								title: makeOrModel || 'nil'
							});
							history.push(`/used-tractor/search?city=${city||'nil'}&priceRangeTo=${maxPrice||'nil'}&priceRangeFrom=${minPrice||'nil'}&title=${makeOrModel||'nil'}`)
						}}
          >
            <Icon.Search className="icon" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default searchAble;
