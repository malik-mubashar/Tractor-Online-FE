/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import Footer from "../LandingPage/Footer";
import SearchListing from "./SearchListing";
import SideSearch from "./SideSearch";
import { Button, Image, Modal } from "react-bootstrap";
import tractorSVG from "../../assets/svg/tractor-1.svg";
import { isMobile } from "react-device-detect";
import { useHistory, useLocation } from "react-router-dom";
import { productApis } from "../../API/ProductApis";
import { city } from "../../API/City/CityApis";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import'./usedtractor.scss'


export default function UsedTractorSearch() {
  const history = useHistory();
	const [showFilterModel, setShowFilterModel] = useState(false);
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
  var category = new URLSearchParams(search).get("category") || "nil";
  const [prodCategories, setProdCategories] = useState();
  const [brands, setBrands] = useState();

  useEffect(() => {
    GetPopularCities();
    var featured = new URLSearchParams(search).get("featured") || "nil";
    //landing page search options
    var city = new URLSearchParams(search).get("city") || "nil";
    var priceRangeTo = new URLSearchParams(search).get("priceRangeTo") || "nil";
    var priceRangeFrom =
      new URLSearchParams(search).get("priceRangeFrom") || "nil";
    var title = new URLSearchParams(search).get("title") || "nil";
    var categoryId = new URLSearchParams(search).get("category") || "nil";
    var brandId = new URLSearchParams(search).get("brand") || "nil";
    var userId = new URLSearchParams(search).get("userId") || "nil";
    var userName = new URLSearchParams(search).get("userName") || "nil";
    setSearchFilters({
      ...searchFilters,
      featured: featured === "true" ? true : "nil",
      city: city,
      priceRangeFrom: priceRangeFrom,
      priceRangeTo: priceRangeTo,
      title: title,
      brand: brandId,
      category: categoryId,
			make: "nil",
			userId: userId,
			userName:userName
    });
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
    page = "1",
    tempNoOfRec = "10",
    city = "nil",
    tempPriceRangeTo = "nil",
    tempPriceRangeFrom = "nil",
    featured = "nil",
    title = "nil",
    brand = "nil",
		category = "nil",
		status = 'active',
		userId='nil'
  ) => {
    setShowLoader(true);
    const result = await productApis.getAllProducts(
      page,
      tempNoOfRec,
      city,
      tempPriceRangeTo,
      tempPriceRangeFrom,
      featured,
      title,
      brand,
      category,
      'active',
      userId
    );
    if (result.error === false) {
      setProducts(result.data && result.data.data);
      setPagination(result.data.pagination);
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
				searchFilters.category,
				'active',
				searchFilters.userId
      );
    }
  }, [searchFilters]);
	 console.log('searchFilters',searchFilters)
  return (
    <>
      {isMobile && (
        <>
          <div className="p-2 d-flex justify-content-between" style={{ backgroundColor: "white" }}>
						<Button onClick={()=>{setShowFilterModel(true)}}>
							Filters	
						</Button>
            <div className="d-flex mobile-filter-list">
							<div className="rounded mobile-filter-list-element">Price</div>
							<div className="rounded mobile-filter-list-element">Location</div>
							<div className="rounded mobile-filter-list-element">Title</div>
							<div className="rounded mobile-filter-list-element">Brand</div>
            </div>
          </div>
          <div className="p-2" style={{ backgroundColor: "silver" }}>
            {pagination && pagination.count + " Results"}
          </div>
          {/* for mobile breadcrumbs */}
          <div>
            <ul className="breadcrumb bread mb-0">
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
                {category && category !== "nil" ? (
                  <a>
                    <span
                      onClick={() =>
                        history.push(
                          `/products?category=${
                            prodCategories.find((cate) => cate.id == category)
                              .id
                          }`
                        )
                      }
                      className="cursor-pointer"
                      itemProp="name"
                    >
                      {prodCategories &&
                        prodCategories.find((cate) => cate.id == category)
                          .title}{" "}
                      {"/"}
                    </span>
                  </a>
                ) : null}
              </li>
              <li>
                <span itemProp="name">
                  {category && category !== "nil"
                    ? prodCategories &&
                      prodCategories.find((cate) => cate.id == category).title
                    : "Products"}{" "}
                  In Pakistan
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
      {/* main section */}
      <section>
        <div className="container">
          {/* <img
            style={{ width: "100%" }}
            alt="add"
            src={"https://tpc.googlesyndication.com/simgad/5923361064753698031"}
            className="mt-5"
          /> */}
          {isMobile ? (
            <h6 className="pageHeading mt-2">
              {category && category !== "nil"
                ? prodCategories &&
                  prodCategories.find((cate) => cate.id == category).title
                : "Products"}{" "}
              for sale
            </h6>
          ) : (
            <h3 className="pageHeading mt-5 pt-5">
              {category && category !== "nil"
                ? prodCategories &&
                  prodCategories.find((cate) => cate.id == category).title
                : "Products"}{" "}
              for sale
            </h3>
          )}
          {!isMobile && (
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
                  {category && category !== "nil" ? (
                    <a>
                      <span
                        onClick={() =>
                          history.push(
                            `/products?category=${
                              prodCategories.find((cate) => cate.id == category)
                                .id
                            }`
                          )
                        }
                        className="cursor-pointer"
                        itemProp="name"
                      >
                        {prodCategories &&
                          prodCategories.find((cate) => cate.id == category)
                            .title}{" "}
                        {"/"}
                      </span>
                    </a>
                  ) : null}
                </li>
                <li>
                  <span itemProp="name">
                    {category && category !== "nil"
                      ? prodCategories &&
                        prodCategories.find((cate) => cate.id == category).title
                      : "Products"}{" "}
                    In Pakistan
                  </span>
                </li>
              </ul>
              {pagination && (
                <div className="search-pagi-info">
                  <span className="mx-4">
                    <b>
                      {pagination.from}-{pagination.to}{" "}
                    </b>
                    of <b>{pagination.count}</b> Results
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="row">
						<div className="col-md-3">
							{
								!isMobile &&
								<SideSearch
									setSearchFilters={setSearchFilters}
									searchFilters={searchFilters}
									cities={cities}
									priceRangeFrom={priceRangeFrom}
									setPriceRangeFrom={setPriceRangeFrom}
									priceRangeTo={priceRangeTo}
									setPriceRangeTo={setPriceRangeTo}
									brands={brands}
									prodCategories={prodCategories}
								/>
							}
            </div>
            <div className={`col-md-9 ${isMobile?'p-0':''}`}>
              <SearchListing
                products={products}
                pagination={pagination}
                noOfRec={noOfRec}
                handleGetAllProducts={handleGetAllProducts}
                searchFilters={searchFilters}
              />
            </div>
          </div>
        </div>
			</section>
			
			<Modal
        show={showFilterModel}
        onHide={()=>{setShowFilterModel(false)}}
        backdrop="static"
				keyboard={false}
				centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Search Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
							<SideSearch
                setSearchFilters={setSearchFilters}
                searchFilters={searchFilters}
                cities={cities}
                priceRangeFrom={priceRangeFrom}
                setPriceRangeFrom={setPriceRangeFrom}
                priceRangeTo={priceRangeTo}
                setPriceRangeTo={setPriceRangeTo}
                brands={brands}
                prodCategories={prodCategories}
              />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setShowFilterModel(false)}}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
