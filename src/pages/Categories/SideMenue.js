import React, { useEffect, useState } from "react";
import { Nav, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import DropDown from "../LandingPage/DropDown";
import { useHistory } from "react-router-dom";
import user1 from "../../assets/img/user/user1.jpg";
import { PRODUCT_CATEGORY } from "../../API/Products/product-category";
import { city } from "../../API/City/CityApis";
import { prodBrandsApis } from "../../API/ProdBrandsApis";


const SideMenue = () => {
  const [productCategories, setProductCategories] = useState();

  const history = useHistory();
  const [cities, setCities] = useState();
  const [brands, setBrands] = useState();

  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
    handleGetProdBrands();
  }, []);
	 

  const handleGetProdBrands = async () => {
    
    const result = await prodBrandsApis.getProdBrands();
    if(result.error=== false){
      setBrands(result.data && result.data.data);
      console.log('brands',result.data  &&result.data.data)
    
    }
  };
  const handleGetAllCities = async () => {
    const result = await city.getAllCity();
   
  
    if(result.error=== false){
      setCities(result.data && result.data.data);
      console.log('cities',result.data  &&result.data.data)
    }
  };

  const handleGetAllCategories = async () => {
    const result = await PRODUCT_CATEGORY.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
    console.log('categories',result.data  &&result.data.data)
  };
  return (
    <Nav defaultActiveKey="/" className="flex-column categoryNavbar">
      {productCategories &&
        productCategories.map((item, i) => {
          return (
            <>
              <Nav.Link
                href="/"
                className="d-flex w-100 dropdown-button-category "
                key={i}
              >
                <span className="user-pic">
                  <Image
                    src={user1}
                    alt="User Image"
                    roundedCircle
                    width={"24px"}
                  />
                </span>
                <DropDown
                productHead={item.product_category_heads}
                  title={item.title}
                  cities={cities}
                  brands={item.product_brands}
                  dropDownIcon={true}
                  
                />
              </Nav.Link>
            </>
          );
        })}
    </Nav>
  );
};

export default SideMenue;
