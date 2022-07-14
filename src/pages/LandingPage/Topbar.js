/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../components/Navigation/Navigation.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import DropDownTopbar from "./DropDownTopbar";
import "../Categories/SideMenue.css";
import Logo from "../../assets/img/tractoronline.png";
import { PRODUCT_CATEGORY } from "../../API/Products/product-category";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import Icofont from "react-icofont";

const Topbar = () => {
  const history = useHistory();
  const [productCategories, setProductCategories] = useState();
  const [cities, setCities] = useState([]);
  const [brands, setBrands] = useState();
  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
    handleGetAllProductCategories();
  }, []);

  const handleGetAllProductCategories = async () => {
    const result = await prodApi.getProdCategoriesList();
    if (result.error === false) {
      setBrands(result.data && result.data.data);
      console.log("brands", result.data && result.data.data);
    }
  };
  const handleGetAllCities = async () => {
    const result = await city.getPopularCity("popular");

    if (result.error === false) {
      setCities(result.data && result.data.data);
      console.log("cities", result.data && result.data.data);
    }
  };

  const handleGetAllCategories = async () => {
    const result = await PRODUCT_CATEGORY.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
    console.log("categories", result.data && result.data.data);
  };

  return (
    <Navbar fixed="top" className="top-menu landingTopbar">
      <Image src={Logo} height="30px" width="160px" alt="Profile Image" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-5 pl-5">
        {productCategories &&
          productCategories.map((item, i) => {
            return (
              <>
              {i < 5 ?
                <DropDownTopbar
                  title={item.title}
                  productHead={item.product_category_heads}
                  cities={cities}
                  brands={item.category_brands}
                />
              :
                null
              }
              </>
            );
          })}

          <div className="dropdown-button-more p-2">
            <span className="">More</span>
              <Icofont
                icon="caret-down"
                height="10px"
                width="10px"
                className="icofont ml-1"
              />
            <div className="drop-down-items-more py-3 more-width">
              {productCategories &&
                productCategories.map((item, i) => {
                  return (
                    <>
                    {i > 4 ?
                      <div className="p-2 dropdown-link">
                        {item.title}
                      </div>
                      :
                      null
                      }
                    </>
                  );
              })}
            </div>
          </div>
        <Nav className="ml-auto right-nav">
          <ul className="navbar-nav mr-auto">
            <div
              onClick={() => history.push("/login/")}
              className="dropdown-button p-2"
            >
              Login
            </div>
            <div
              onClick={() => history.push("/signup/")}
              className="dropdown-button p-2"
            >
              Sign Up
            </div>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
