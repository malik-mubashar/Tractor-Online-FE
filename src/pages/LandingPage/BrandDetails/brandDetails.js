import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {productApis} from'../../../API/ProductApis'
import { RootContext } from "../../../context/RootContext";
import { brandApis } from "../../../API/BrandsApis";

const brandDetails = () => {
  const { setShowLoader } = useContext(RootContext);

  const { id } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getProductsOfBrand();
    handleGetBrandDetails();
  }, []);

  const getProductsOfBrand = async () => {
    setShowLoader(true);
    const result = await productApis.getAllProducts('nil','nil','nil','nil','nil',id);
    if (result.error === false) {

      console.log("showBrands", result);
      setBrandProducts(result.data && result.data.data);
    setShowLoader(false);

    }

  };
  const handleGetBrandDetails = async () => {
    setShowLoader(true);
    const result = await brandApis.getBrandDetailAndProducts(id);
    if (result.error === false) {

      console.log("showprodBrands", result);      
      setBrands(result.data && result.data.data);
    setShowLoader(false);

    }

  };

  return (
    <div className="post-ad">
      <section>
        <div className="well p30 mb40">
          <div className="row">
            <div className="col-md-3 text-center">
              <div>
                <img
                  alt="Pakistan"
                  itemprop="image"
                  src={brands.active_image_path}
                  title="Suzuki Pakistan"
                />
              </div>
              
            </div>
            <div className="col-md-9">
              <p>
                The prices of a Suzuki Car in Pakistan start from PKR
                1,256,000.0 for a new Suzuki Ravi to PKR 6,915,000.0&nbsp;for
                a&nbsp;new Suzuki Vitara. There are currently 9 new Suzuki car
                models&nbsp;available at Suzuki dealerships across Pakistan.
              </p>
              <p>
                Suzuki Cars are also widely available in used conditions
                starting from PKR 89,000 for a used Suzuki Ravi to PKR
                10,000,000 for a used Suzuki Potohar. There are a total of 17864
                Suzuki Cars available for sale in Pakistan on PakWheels.
              </p>
              <p>
                Suzuki Cars are also widely available in used conditions
                starting from PKR 89,000 for a used Suzuki Ravi to PKR
                10,000,000 for a used Suzuki Potohar. There are a total of 17864
                Suzuki Cars available for sale in Pakistan on PakWheels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row mb-4">
          {brandProducts &&
            brandProducts.map((item) => (
              <div className="col-3 mt-3" key={item.id}>
                <div className="category p-3">
                  <Link to="/">
                  <img
                        src={item.cover_photo_path}
                        alt="Card"
                        style={{ width: "100%", height: "160px" }}
                      />
                    <h5 className="nomargin">{item.title}</h5>
                    <p className="pl-2 border-radius">{item.location}</p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default brandDetails;
