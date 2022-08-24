import React, { useEffect, useState } from "react";
import { Nav, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import DropDown from "../LandingPage/DropDown";
import { useHistory } from "react-router-dom";
import streeingWheel from "../../assets/svg/steering-wheel.svg";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";



const SideMenue = () => {
  const [productCategories, setProductCategories] = useState();

  const history = useHistory();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
  }, []);
	 


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
                className="d-flex w-100 dropdown-button-category "
                key={i}
              >
								<span className="user-pic" onClick={()=> history.push(item.link)}>
									{
										item.active_image_path !== undefined ?
										<Image
                    src={item.active_image_path}
                    alt="icon"
                    roundedCircle
                    width={"24px"}
                  />
											:
											<Image
                    src={streeingWheel}
                    alt="icon"
                    roundedCircle
                    width={"34px"}
                  />
									}
                </span>
                <DropDown
                  categoryLink = {item.link}
                  productHead={item.product_category_heads}
                  title={item.title}
                  cities={cities}
                  brands={item.category_brands}
									dropDownIcon={true}
									productCategory={item}
                />
              </Nav.Link>
            </div>
          );
        })}
    </Nav>
  );
};

export default SideMenue;
