import React, { useEffect, useContext } from "react";
import Footer from "../pages/LandingPage/Footer";
import DeskTopBanner from "../pages/LandingPage/DeskTopBanner";
import MobileBanner from "../pages/LandingPage/MobileTopbar";
import MobileFooter from "../pages/LandingPage/MobileFooter";
import { isMobile } from "react-device-detect";
import MobileBannerFooter from "../pages/LandingPage/MobileBannerFooter";
import Topbar from "../pages/LandingPage/Topbar";
import { websiteNameApi } from "../API/websiteNameApi";
import { RootContext } from "../context/RootContext";
import { prodApi } from "../API/ProdCategoriesApis";
import { productApis } from "../API/ProductApis";
import { city } from "../API/City/CityApis";
import toast from "react-hot-toast";
import { brandApis } from "../API/BrandsApis";
import "../assets/css/layouts.scss"

const Layout = (props) => {
	const {
		websiteName, setWebsiteName, prodCategories,
		setProdCategories, products,
		setProducts, cities,
		setCities, setShowLoader, popularCities,
		setPopularCities,
		brands,
		setBrands
	} = useContext(RootContext)

	useEffect(() => {
		setShowLoader(true)
    window.scrollTo(0, 0);
    if(websiteName !== undefined){
      getWebsiteName();
		}
		// handleGetAllProducts();
		handleGetProductsForLandingPage();
		handleGetAllCategories();
		getPopularCities();
		getAllCities()
		getBrands(1, "", 10000000);
		setShowLoader(false)
	}, []);
	
  const getWebsiteName = async () => {
    const result = await websiteNameApi.getWebsiteName();
    if(result.error=== false){
      setWebsiteName(result.data && result.data.data[0].title);
    }
	};

	const handleGetAllCategories = async () => {
		const result = await prodApi.getAllProductCategories(true);
		if (result.error === false) {
			setProdCategories(result.data && result.data.data);
		}
	};

	const handleGetAllProducts = async () => {
    const result = await productApis.getAllProducts(
      "1",
      "1000000000",
      "nil",
      "nil",
      "nil",
      'nil',
      "nil",
      "nil",
      "nil",
      "active",
      "nil"
    );
    if (result.error === false) {
			setProducts(result.data && result.data.data);
    }
	};
	
	const handleGetProductsForLandingPage = async () => {
    const result = await productApis.getProductsForLandingPage();
		if (result.error === false) {
			debugger;
      setProducts(result.data && result.data.data);
    }
	};

	const getPopularCities = async () => {
			const result = await city.getPopularCity("popular");
	
			if (result.error === false) {
				setPopularCities(result.data && result.data.data);
			}
	};

	const getAllCities = async () => {
		const result = await city.getAllCity();
		if (result.error === false) {
			setCities(result.data && result.data.data);
		}
	}

	const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);

      if (result.error === false && result.data.status === "success") {
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



	// console.log("cities in layout", cities)
	// console.log("popcities in layout", popularCities)
	// console.log("brands in layout", brands)
	// console.log("PRODUCTS in layout", products)

  return (
    <>
      <main>
        <div className="">
          {!isMobile ? <Topbar /> : <MobileBanner />}
          <div style={{marginTop: `${isMobile?'':'4rem'}`}}>
            {props.children}
          </div>
          {isMobile ? <MobileBannerFooter /> : <Footer />}
          {isMobile && <MobileFooter />}
        </div>
      </main>
    </>
  );
};

export default Layout;
