/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import * as Icon from "react-feather";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { RootContext } from "../../context/RootContext";

import CreatableSelect from "react-select/creatable";
import { productApis } from "../../API/ProductApis";

const searchAble = () => {
  const history = useHistory();
  const { setLandingPageSearchOptions,cities } = useContext(RootContext);

  const [makeOrModel, setTractorModel] = useState("");
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState();
	const [citiesForSelect, setCitiesForSelect] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState("");
	

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
	useEffect(() => {
		if (cities.length > 0) {
			readyCitiesForSelect()
		}
	}, [cities])

	const readyCitiesForSelect = async () => {
    const tempArray = [];
   cities.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCitiesForSelect(tempArray);
	};
	
	const goToSearchDetailPage = () => {
		setLandingPageSearchOptions({
			city: city || "nil",
			priceRangeTo: maxPrice || "nil",
			priceRangeFrom: minPrice || "nil",
			title: makeOrModel || "nil",
		});
		history.push(
			`/products/search?city=${city ||
				"nil"}&priceRangeTo=${maxPrice ||
				"nil"}&priceRangeFrom=${minPrice ||
				"nil"}&title=${makeOrModel || "nil"}`
		);
	}

	const searchProductsByTitle = async (searchValue) => {
    const result = await productApis.searchProductsByTitle(searchValue);
		if (result.error === false) {
      setSearchSuggestions(result.data && result.data.data.map((item)=>`${item.brand.title} ${item.title}`));
    }
		if (result.error === true) {
			console.error('error getting search suggesstions')
    }
	};
  return (
    <>
			<ul
				onKeyDown={(e) => { 
					if (e.key === "Enter"){
						goToSearchDetailPage()
					}
			 }} 
			 className="list-unstyled search-front clearfix mainSearch mainSearchBorderSet m-2">
        <li className="home-autocomplete-field position-relative mb-2">
          <input
            data-autocomplete-class="home-autocomplete"
            data-pw-source="car"
            id="home-query"
            name="home-query"
            placeholder="Search by Name..."
            tabIndex="2"
            type="text"
            value={makeOrModel}
						onChange={(e) => {
							setTractorModel(e.target.value)
							if (e.target.value === '') {
								setSearchSuggestions([])
							} else {
								searchProductsByTitle(e.target.value);
							}
						}}
            className="ui-autocomplete-input form-control searchAble border-left-radius border-right px-2"
            autoComplete="off"
					/>
					 {searchSuggestions && searchSuggestions.length > 0 ? (
						<div className="suggestions mt-2 card shadow" style={{ border: 'none'}}>
                    <ul className="suggestions-ul">
                      {searchSuggestions.map((item) => {
                        return (
                          <>
														<li className="mt-3 p-1" onClick={(event) => {
															
															setTractorModel(event.target.textContent)
															setSearchSuggestions([])
														}}>{item}</li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
        </li>
        <li className="mb-2 px-0">
          <Select
            // className="ui-autocomplete-input form-control searchAble border-right "
            options={citiesForSelect}
            // setValue={setCity}
						label="Select City"
						placeholder="Select City"
            // value={city}
            onChange={(e) => {
              if (e) {
                setCity(e.label);
              }
            }}
            clearable={false}
          />
        </li>
        <li className="mb-2 px-0">
          {/* <Select
            // className="ui-autocomplete-input form-control searchAble border-right"
            options={minPriceOptions}
            label="Select Min Price "
            onChange={(e) => {
              if (e) {
                setMinPrice(e.label);
              }
            }}
            clearable={false}
					/> */}
					<CreatableSelect
						isClearable
						label="Select Min Price "
						placeholder="Select Min Price"

            onChange={(e) => {
							if ((e == null)) {
								setMinPrice('nil')
              } else {
                setMinPrice(e.label);
              }
            }}
            options={minPriceOptions}
          />
        </li>
        <li className="mb-2 px-0">
          <CreatableSelect
						isClearable
						placeholder="Select Max Price"
            onChange={(e) => {
							if ((e == null)) {
								setMaxPrice('nil')
              } else {
                setMaxPrice(e.label);
              }
            }}
            options={maxPriceOptions}
          />
          {/* <Select
            className="ui-autocomplete-input form-control searchAble border-right"
            options={maxPriceOptions}
            label="Select Max Price"
            onChange={(e) => {
              setMaxPrice(e.label);
            }}
            clearable={false}
          /> */}
        </li>
        <li>
          <button
            className="btn-success col-12 searchAble"
            type="submit"
            onClick={() => {
             goToSearchDetailPage()
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
