import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { productApis } from "../../../API/ProductApis";
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
    const result = await productApis.getAllProducts(
      1,
      10,
      "nil",
      "nil",
      "nil",
      "nil",
      "nil",
      id,
      "nil"
    );
    if (result.error === false) {
      setBrandProducts(result.data && result.data.data);
      setShowLoader(false);
    }
  };
  const handleGetBrandDetails = async () => {
    setShowLoader(true);
    const result = await brandApis.getBrandDetailAndProducts(id);
    if (result.error === false) {
      setBrands(result.data && result.data.data);
      setShowLoader(false);
    }
  };

  return (
    <div className="post-ad pt-3">
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
            {brands&&brands.description !== null ? (
              <div className="col-md-9">
                <p>{brands.description}</p>
              </div>
            ) : (
              <strong className="text-center"> Description Not Found</strong>
           
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row mb-4">
          {brandProducts &&
            brandProducts.map((item) => (
              <div className="col-lg-3 col-md-6 col-12 mt-3" key={item.id}>
                <div className="category p-3">
                  <Link to={`/add-details/${item.id}`}>
                    <img
                      src={item.cover_photo_path}
                      alt="Card"
                      style={{ width: "100%", height: "160px" }}
                    />
                    <h5 className="nomargin">{item.title}</h5>
                    <p className="pl-2 border-radius">{item.price}</p>
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
