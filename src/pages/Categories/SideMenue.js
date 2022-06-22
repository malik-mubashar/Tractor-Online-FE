import React, { useEffect, useState } from "react";
import { Nav, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import DropDown from "../LandingPage/DropDown";
import { useHistory } from "react-router-dom";
import user1 from "../../assets/img/user/user1.jpg";
import { PRODUCT_CATEGORY } from "../../API/Products/product-category";

const SideMenue = () => {
  const [productCategories, setProductCategories] = useState();

  const history = useHistory();

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  const handleGetAllCategories = async () => {
    const result = await PRODUCT_CATEGORY.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
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
                  title={item.title}
                  usedCars={item.title === "Tractors"}
                  newCars={item.title === "Farming Equipments"}
                  autoStore={item.title === "Accessories and Parts"}
                  fertilizerAndSeeds={item.title === "Fertilizers and Seeds"}
                  plantAndHortiCulture={
                    item.title === "Plants and Horticulture"
                  }
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
