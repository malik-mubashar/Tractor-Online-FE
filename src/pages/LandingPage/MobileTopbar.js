import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/img/tractoronline.png";
import { Form, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import { RootContext } from "../../context/RootContext";
import { prodApi } from "../../API/ProdCategoriesApis";

const MobileTopbar = () => {
  const history = useHistory();
  const [productCategories, setProductCategories] = useState();
  const [tractorModel, setTractorModel] = useState("");
  const { setLandingPageSearchOptions } = useContext(RootContext);

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
  };

  return (
    <>
      <div className={`dashboard-carousel p-3 `}>
        <Image
          onClick={() => history.push("/")}
          src={Logo}
          height="20px"
          width="100px"
          alt="Profile Image"
          className="d-flex justify-content-center m-auto"
        />
        <div className="d-flex mt-2 mb-2">
          {productCategories &&
            productCategories.map((item, i) => {
              return (
                <>
                  {item.product_category_heads.length > 0 ? (
                      <div className="col-6 p-0 mobile-tabs">
                        <Link
                          to={item.link}
                          className="btn btn-info rounded p-2 w-100 "
                        >
                          {item.title}
                        </Link>
                      </div>
                  ) : null}
                </>
              );
            })}
          </div>
        <div className="nav-search-form d-sm-block relative">
          <Form.Control
            type="text"
            placeholder="Search..."
            className="rounded"
            onChange={(event) => setTractorModel(event.target.value)}
          />

          <Button
            className="search-success"
            onClick={() => {
              setLandingPageSearchOptions({
                title: tractorModel || "nil",
              });
              // history.push(`/products/search?category=${category}`);
              history.push(`/products/search?title=${tractorModel || "nil"}`);
            }}
          >
            <Icon.Search className="icon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileTopbar;
