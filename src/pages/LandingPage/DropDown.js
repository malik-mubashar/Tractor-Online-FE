import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function DropDown({
  title,
  usedCars,
  newCars,
  autoStore,
  dropDownIcon,
  fertilizerAndSeeds,
  plantAndHortiCulture,
  productHead,
  cities,
  brands,
  productCategory,
  categoryLink
}) {
  const history = useHistory();
  return (
    <div>
      <div className={`${!dropDownIcon ? " dropdown-button p-1" : "p-1"}`}>
        <span onClick={()=> history.push(categoryLink)}>{title}</span>
        {/* { productHead.length > 0? 
            (
              <>
                <Icon.ChevronDown className="icon" height="15px" width="15px" />
              </>
            )
            :
            null
          } */}
        {productHead.length > 0 && (
          <div
            className={`drop-down-items row py-3 ${
              usedCars || productHead ? "usedCarsWidth" : ""
            } ${newCars ? "newCarsWidth" : ""} ${
              plantAndHortiCulture || fertilizerAndSeeds || autoStore
                ? "autoStoreWidth"
                : null
            }`}
          >
            {productHead ? (
              <>
                <ul className="list-unstyled col-5 p-0 border-right">
                  {productHead.map((item, i) => (
                    <li className="dropdown-list" key={i}>
                      <Link
                        to={item.link}
                        className="d-flex pl-1 dropdown-link"
                      >
                        <Icofont
                          icon={item.icon}
                          height="10px"
                          width="10px"
                          className="icofont-2x ml-2 col-2 p-0"
                        />
                        <div className="col-10 p-0">
                          <strong>{item.title}</strong>
                          {item.product_sub_categories !== null &&
                            item.product_sub_categories !== undefined &&
                            item.product_sub_categories.map((y, j) => {
                              return <p key={j}>{y.title}</p>;
                            })}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="list-unstyled col-3 text-center border-right">
                  <li className="mb-3 text-dark">
                    <Icon.MapPin className="icon mr-2" />
                    <strong>Popular Cities</strong>
                  </li>
                  {cities &&
                    cities.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={
                            productCategory.title === "Used tractor"
                              ? `/products/search?category=used-tractor&city=${item.title}`
                              : `/products/search?category=new-tractor&city=${item.title}`
                          }
                          className="dropdown-link"
                        >
                          <p className="city-name">{item.title}</p>
                        </Link>
                      </li>
                    ))}
                </ul>
                <ul className="list-unstyled col-3 text-center text-dark">
                  <li className="mb-3 text-dark">
                    <Icon.Trello className="icon mr-2" />
                    <strong>Popular Brands</strong>
                  </li>

									{productCategory && productCategory.brands &&
										productCategory.brands.length>0?
                    productCategory.brands.map((item, i) => (
                      <li key={item.id}>
                        <Link
                          to={
                            productCategory.title === "Used tractor"
                              ? `/product/search?category=product&brand=${item.title}`
                              : `/product/search?category=new-tractor&brand=${item.title}`
                          }
                          className="dropdown-link"
                          title="Used Cars for sale in Karachi"
                        >
                          <p className="city-name">{item.title}</p>
                        </Link>
                      </li>
										))
									:'No Brand Found'
									}
                </ul>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
