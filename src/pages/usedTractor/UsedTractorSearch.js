/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import Footer from "../LandingPage/Footer";
import SearchListing from "./SearchListing";
import SideSearch from "./SideSearch";
import { Image } from "react-bootstrap";
import tractorSVG from "../../assets/svg/tractor-1.svg";
import { isMobile } from "react-device-detect";
import { useHistory, useLocation } from "react-router-dom";
import { productApis } from "../../API/ProductApis";
import { city } from "../../API/City/CityApis";
import { RootContext } from "../../context/RootContext";

export default function UsedTractorSearch() {
  const [products, setProducts] = useState([]);
  const [searchFilters, setSearchFilters] = useState();
  const [cities, setCities] = useState();
  const [priceRangeFrom, setPriceRangeFrom] = useState();
  const [priceRangeTo, setPriceRangeTo] = useState();
	const { landingPageSearchOptions } = useContext(RootContext);
  const search = useLocation().search;

  useEffect(() => {
    handleGetAllProducts();
		GetPopularCities();
		console.log('asd',landingPageSearchOptions)
		if (Object.keys(landingPageSearchOptions).length > 0) {
			setSearchFilters({
				...landingPageSearchOptions
			});
			handleGetAllProducts(landingPageSearchOptions.city, landingPageSearchOptions.priceRangeTo, landingPageSearchOptions.priceRangeFrom, landingPageSearchOptions.featured, landingPageSearchOptions.title);;
    }
		var featured = new URLSearchParams(search).get('featured');
		if (featured) {
			setSearchFilters({
				...searchFilters,
				featured:true
			})
		}
	}, []);
	

  const GetPopularCities = async () => {
    const result = await city.getPopularCity("popular");

    if (result.error === false) {
      setCities(result.data && result.data.data);
    }
  };

  const handleGetAllProducts = async (
    city='nil',
    tempPriceRangeTo='nil',
		tempPriceRangeFrom = 'nil',
		featured = 'nil',
		title='nil'
		
  ) => {
    const result = await productApis.getAllProducts(city,tempPriceRangeTo,tempPriceRangeFrom,featured,title);
    if (result.error === false) {
      setProducts(result.data && result.data.data);
      console.log("products", result.data && result.data.data);
    }
  };
  useEffect(() => {
    if (searchFilters) {
        handleGetAllProducts(searchFilters.city,searchFilters.priceRangeTo,searchFilters.priceRangeFrom,searchFilters.featured,searchFilters.title);
    }
  }, [searchFilters]);
  console.log("searchFilters", searchFilters);
  console.log("priceRangeTo", priceRangeTo);
  console.log("priceRangeFrom", priceRangeFrom);
  const history = useHistory();
  return (
    <>
      <section>
        <div className="container">
          <img
            style={{ width: "100%" }}
            alt="add"
            src={"https://tpc.googlesyndication.com/simgad/5923361064753698031"}
            className="mt-5"
          />
          <h3 className="pageHeading">Used Tractor for sale</h3>
          <div className="searchCounterWrapper">
            <ul className="breadcrumb bread">
              <li>
                <a>
                  <span
                    onClick={() => history.push("/")}
                    className="cursor-pointer"
                    itemProp="name"
                  >
                    Home /
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span
                    onClick={() => history.push("/used-tractor/search")}
                    className="cursor-pointer"
                    itemProp="name"
                  >
                    Used Tractor /
                  </span>
                </a>
              </li>
              <li>
                <span itemProp="name">Used Tractor For Sale In Pakistan</span>
              </li>
            </ul>
            <div className="search-pagi-info">
              <b>1&nbsp;-&nbsp;25</b> of <b>69412</b> Results
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <SideSearch
                setSearchFilters={setSearchFilters}
                searchFilters={searchFilters}
                cities={cities}
                priceRangeFrom={priceRangeFrom}
                setPriceRangeFrom={setPriceRangeFrom}
                priceRangeTo={priceRangeTo}
                setPriceRangeTo={setPriceRangeTo}
              />
            </div>
            <div className="col-md-9">
              <SearchListing products={products} />
            </div>
          </div>
        </div>
      </section>
    
   
      <div className="bloodyButton">
        {isMobile ? (
          <a
            href="/used-cars/sell"
            className="sell-bar-fixed sell-floating-btn sign-in-comp"
            target="_blank"
            onClick="trackEvents('UsedCars','Sellform','From - Search');"
            style={{ width: "50px" }}
          >
            <p className="mt-3 text-white"> Sell</p>
          </a>
        ) : (
          <a
            href="/used-cars/sell"
            className="sell-bar-fixed sell-floating-btn sign-in-comp"
            target="_blank"
            onClick="trackEvents('UsedCars','Sellform','From - Search');"
          >
            <span className="sell-icons">
              <Image
                src={tractorSVG}
                height="40px"
                width="60px"
                alt="Profile Image"
                className="d-flex justify-content-center m-auto"
              />{" "}
            </span>
            <p className="mt-3 text-white"> Sell My Tractor</p>
          </a>
        )}
      </div>
     
    </>
  );
}