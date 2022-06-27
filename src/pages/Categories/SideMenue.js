import React, { useEffect, useState } from "react";
import { Nav, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import DropDown from "../LandingPage/DropDown";
import { useHistory } from "react-router-dom";
import user1 from "../../assets/img/user/user1.jpg";
import { PRODUCT_CATEGORY } from "../../API/Products/product-category";
import { city } from "../../API/City/CityApis";

const SideMenue = () => {
  const [productCategories, setProductCategories] = useState();

  const history = useHistory();
  const [cities, setCities] = useState();

  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
  }, []);

  
  const handleGetAllCities = async () => {
    debugger;
    const result = await city.getAllCity();
    debugger
    if(result.error=== false){
      setCities(result.data && result.data.data);
      console.log('asdasd mnb',result.data.data)
    }
  };

  const handleGetAllCategories = async () => {
    const result = await PRODUCT_CATEGORY.getAllProductCategories();
    debugger
    setProductCategories(result.data && result.data.data);
    console.log('asdasd',result.data  &&result.data.data)
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
