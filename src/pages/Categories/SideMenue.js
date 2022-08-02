import React, { useEffect, useState } from "react";
import { Nav, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import DropDown from "../LandingPage/DropDown";
import { useHistory } from "react-router-dom";
import user1 from "../../assets/img/user/user1.jpg";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";



const SideMenue = () => {
  const [productCategories, setProductCategories] = useState();

  const history = useHistory();
  const [cities, setCities] = useState([]);
  const [brands, setBrands] = useState();

  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
    handleGetAllProductCategories();
  }, []);
	 

  const handleGetAllProductCategories = async () => {
    
    const result = await prodApi.getProdCategoriesList();
    if(result.error=== false){
      setBrands(result.data && result.data.data);
    
    }
  };
  const handleGetAllCities = async () => {
    const result = await city.getPopularCity('popular');
   
  
    if(result.error=== false){
      setCities(result.data && result.data.data);
    }
  };

  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
  };
  return (
    <Nav defaultActiveKey="/" className="flex-column categoryNavbar">
      {productCategories &&
        productCategories.map((item, i) => {
          return (
            <div key={i}>
              <Nav.Link
                href={item.link}
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
                  brands={item.category_brands}
                  dropDownIcon={true}
                />
              </Nav.Link>
            </div>
          );
        })}
    </Nav>
  );
};

export default SideMenue;
