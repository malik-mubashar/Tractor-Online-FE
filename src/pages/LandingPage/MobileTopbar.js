import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo1 from "../../assets/img/tractoronline.png";
import { Form, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import { RootContext } from "../../context/RootContext";
import { prodApi } from "../../API/ProdCategoriesApis";
import { isMobile } from "react-device-detect";

const MobileTopbar = () => {

  const history = useHistory();
  const [productCategories, setProductCategories] = useState();
  const [tractorModel, setTractorModel] = useState("");
  const { setLandingPageSearchOptions,prodCategories } = useContext(RootContext);

  return (
    <>
			<div style={{background:"rgba(255, 191, 0)"}} className={`dashboard-carousel p-3 ${isMobile?"w-100":""} `}>
        <Image
          onClick={() => history.push("/")}
          src={Logo1}
          height="45px"
          width="260px"
          alt="Profile Image"
          className="d-flex justify-content-center m-auto"
        />
					<div className="d-flex mobile-categories mb-1">
						{prodCategories && prodCategories.length>0&&prodCategories.map((item) => {
							return (
												<div className="p-0 mobile-tabs">
													<Link
														style={{fontWeight:"700",backgroundColor:'#41a746',color:'white'}}
														to={item.link}
														className="btn rounded p-2 w-100 "
													>
														{item.title}
													</Link>
												</div>
							)
            })}
					</div>
        <div className="nav-search-form d-sm-block relative">
          <Form.Control
            type="text"
            placeholder="Search..."
            className="rounded"
						onChange={(event) => setTractorModel(event.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setLandingPageSearchOptions({
									title: tractorModel || "nil",
								});
								// history.push(`/products/search?category=${category}`);
								history.push(`/products/search?title=${tractorModel || "nil"}`);
							}
						}}
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
