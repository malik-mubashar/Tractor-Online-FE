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
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";


export default function UsedTractorSearch() {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [searchFilters, setSearchFilters] = useState();
  const [cities, setCities] = useState();
  const [priceRangeFrom, setPriceRangeFrom] = useState();
  const [priceRangeTo, setPriceRangeTo] = useState();
	const [pagination, setPagination] = useState();
	const { landingPageSearchOptions, setShowLoader } = useContext(RootContext);
	const [noOfRec, setNoOfRec] = useState(10);
  const [heading, setHeading] = useState("");

  const search = useLocation().search;
	var category = new URLSearchParams(search).get("category")||'nil';
	const [prodCategories, setProdCategories] = useState();
	const [brands, setBrands] = useState();

  useEffect(() => {
		GetPopularCities();	
		var featured = new URLSearchParams(search).get('featured')||'nil';
		//landing page search options
		var city = new URLSearchParams(search).get('city')||'nil';
		var priceRangeTo = new URLSearchParams(search).get('priceRangeTo')||'nil';
		var priceRangeFrom = new URLSearchParams(search).get('priceRangeFrom')||'nil';
		var title = new URLSearchParams(search).get('title')||'nil';
		var categoryId = new URLSearchParams(search).get('category')||'nil';
		var brandId = new URLSearchParams(search).get('brand') || 'nil';
			setSearchFilters({
				...searchFilters,
				featured: featured==='true'?true:'nil',
				city: city,
				priceRangeFrom: priceRangeFrom,
				priceRangeTo: priceRangeTo,
				title: title,
				brand: brandId,
				category: categoryId,
				make:'nil'
			})
		 
	}, [search]);

	useEffect(() => {
    handleGetAllProductCategories();
    getBrands(1, "", 10000000000);
	}, []);
	
  const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);

      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setBrands(result.data.data);
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const handleGetAllProductCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    if (result.error === false) {
      setProdCategories(result.data && result.data.data);
    }
  };
	

  const GetPopularCities = async () => {
    const result = await city.getPopularCity("popular");

    if (result.error === false) {
      setCities(result.data && result.data.data);
    }
  };

	const handleGetAllProducts = async (
		page = '1',
		tempNoOfRec='10',
    city='nil',
    tempPriceRangeTo='nil',
		tempPriceRangeFrom = 'nil',
		featured = 'nil',
		title = 'nil',
		brand = 'nil',
		category='nil'
		
	) => {
		setShowLoader(true)
		const result = await productApis.getAllProducts(
			page,
			tempNoOfRec,
			city,
			tempPriceRangeTo,
			tempPriceRangeFrom,
			featured,
			title,
			brand,
			category
		);
    if (result.error === false) {
      setProducts(result.data && result.data.data);
			console.log("products", result.data && result.data.data);
			setPagination(result.data.pagination)
			setShowLoader(false);
		}
		if (result.error === true) {
			setShowLoader(false);
		}
  };
  useEffect(() => {
    if (searchFilters) {
			handleGetAllProducts(
				1,
				noOfRec,
				searchFilters.city,
				searchFilters.priceRangeTo,
				searchFilters.priceRangeFrom,
				searchFilters.featured,
				searchFilters.title,
				searchFilters.brand,
				searchFilters.category
			);
    }
  }, [searchFilters]);
  console.log("searchFilters", searchFilters);
  console.log("priceRangeTo", priceRangeTo);
  console.log("priceRangeFrom", priceRangeFrom);
  console.log("pagination",pagination);
  return (
    <>
      <section>
        <div className="container">
          {/* <img
            style={{ width: "100%" }}
            alt="add"
            src={"https://tpc.googlesyndication.com/simgad/5923361064753698031"}
            className="mt-5"
          /> */}
          <h3 className="pageHeading mt-5 pt-5">{category&&category!=='nil'?prodCategories && prodCategories.find((cate)=>cate.id==category).title:'Products'} for sale</h3>
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
                    onClick={() => history.goBack()}
                    className="cursor-pointer"
                    itemProp="name"
                  >
                    {category &&category!=='nil'?prodCategories && prodCategories.find((cate)=>cate.id==category).title:'Products'} /
                  </span>
                </a>
              </li>
              <li>
                <span itemProp="name">{category&&category!=='nil'?prodCategories && prodCategories.find((cate)=>cate.id==category).title:'Products'} In Pakistan</span>
              </li>
						</ul>
						{pagination &&
						<div className="search-pagi-info">
						<span className="mx-4">
                          <b>{pagination.from}-{pagination.to}{" "}</b>
                          of <b>{pagination.count}</b>{' '}Results
                        </span>
            </div>
						}
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
								brands={ brands}
								prodCategories={prodCategories}
              />
            </div>
            <div className="col-md-9">
							<SearchListing products={products}
								pagination={pagination}
								noOfRec={noOfRec}
								handleGetAllProducts={handleGetAllProducts}
								searchFilters={ searchFilters}
							/>
            </div>
          </div>
        </div>
      </section>
    
   
      {/* <div className="bloodyButton">
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
        ) : 
        
        (
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
        )
        }
      </div> */}
     
    </>
  );
}