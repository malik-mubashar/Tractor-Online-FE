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
}) {
  const history = useHistory();

  const icons = ["light-bulb", "layers", "grocery", "star"];
  const usedTractors = [
    {
      heading: "Search for a Used Tractor for Sale.",
      subHeading: "There are over 110k possibilities to choose from.",
      icon: "light-bulb",
      url: "/usedtractor",
    },
    {
      heading: "Used Tractor Featured",
      subHeading: "TractorOnline has a selection of featured tractors.",
      icon: "layers",
      url: "/usedtractor",
    },
    {
      heading: "Tractors for Sale",
      subHeading: "Post a free ad to swiftly sell your tractor.",
      icon: "grocery",
      url: "/usedtractor",
    },
    {
      heading: "Dealers of Used Tractors",
      subHeading: "Locate used tractor dealers in your area.",
      icon: "star",
      url: "/usedtractor",
    },
    {
      heading: "Calculator of Prices",
      subHeading: "Calculate the tractor market price.",
      icon: "recycle",
      url: "/usedtractor",
    },
  ];

  const usedTractorsSecond = [
    {
      heading: "Certified Tractors on TractorOnline.com",
      subHeading:
        "Tractors that have received the TractorOnline stamp of approval",
      icon: "speed-meter",
    },
    {
      heading: "Tractor inspection on TractorOnline",
      subHeading: "Tractor with inspection reports from TractorOnline",
      icon: "tick-mark",
    },
    {
      heading: "TractorOnline sell it for me",
      subHeading:
        "Allow TractorOnline to handle the sale of your tractor for you.",
      icon: "site-map",
    },
    {
      heading: "Verification of Bid Sheet",
      subHeading:
        "For your piece of mind, we provide authentic auction sheets.",
      icon: "data",
    },
  ];

  const autoStoreValues = [
    {
      heading: "Autostore TractorOnline",
      subHeading:
        "TractorOnline is your one-stop shop for auto parts and accessories.",
      icon: "cart",
    },
    {
      heading: "Locate Auto Parts",
      subHeading: "Tractor parts can be found here.",
      icon: "tick-mark",
    },
    {
      heading: "Tractor Parts for Sale",
      subHeading:
        "Sell your tractor components instantly by placing a free ad.",
      icon: "tag",
    },
  ];

  // const cities = [
  //   "Karachi",
  //   "Lahore",
  //   "Islamabad",
  //   "Rawalpindi",
  //   "Peshawar",
  //   "Faisalabad",
  //   "Multan",
  //   "Gujranwala",
  // ];

  const model = [
    "Toyota Corolla",
    "Honda Civic",
    "Honda City",
    "Suzuki Cultus",
    "Suzuki Mehran",
    "Toyota Vitz",
    "Suzuki Alto",
    "Toyota Prado",
  ];

  const newTractors = [
    {
      heading: "Search for a New Tractor for Sale.",
      subHeading:
        "Over 110k possibilities are available to you to choose from.",
      icon: "light-bulb",
    },
    {
      heading: "New Tractor Featured",
      subHeading: "TractorOnline has some featured tractors.",
      icon: "layers",
    },
    {
      heading: "Tractors for Sale",
      subHeading: "Create a free ad to sell your vehicle instantly.",
      icon: "grocery",
    },
    {
      heading: "Dealers of New Tractors",
      subHeading: "Locate new auto dealerships in your area.",
      icon: "star",
    },
    {
      heading: "Calculator for Prices",
      subHeading: "Determine the market value of tractors.",
      icon: "recycle",
    },
  ];
console.log(cities)
console.log("productHead ", productHead)

  return (
    <div>
      <div className={`${!dropDownIcon ? " dropdown-button p-2" : "p-1"}`}>
        {title}
          { productHead.length > 0? 
            (
              <>
                <Icon.ChevronDown className="icon" height="15px" width="15px" />
              </>
            )
            :
            null
          }
        {productHead.length > 0 && <div
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
              <ul className="list-unstyled col-4 p-0 border-right">
                {productHead.map((item, i) => (
                  <li className="dropdown-list" key={i}>
                    <Link to="/usedtractor" className="d-flex pl-1 dropdown-link">
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
                          item.product_sub_categories.map((y, i) => {
                            return <p>{y.title}</p>;
                          })}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-4 p-0 border-right">
                {usedTractorsSecond.map((item, i) => (
                  <li className="dropdown-list" key={i}>
                    <Link to="/" className="d-flex pl-1 dropdown-link">
                      <Icofont
                        icon={item.icon}
                        height="10px"
                        width="10px"
                        className="icofont-2x ml-2 col-2 p-0"
                      />
                      <div className="col-10 p-0">
                        <strong>{item.heading}</strong>
                        <p>{item.subHeading}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <ul className="list-unstyled col-2 border-right text-center">
                <li className="mb-3">
                  <Link to="/">
                    <Icon.MapPin className="icon mr-2" />
                    <strong>Popular Cities</strong>
                  </Link>
                </li>
                {cities &&
                  cities.map((item, i) => (
                    <li key={i}>
                      <Link
                        to="/"
                        className="dropdown-link"
                        
                      >
                        <p className="city-name">{item.title}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="list-unstyled col-2  text-center">
                <li className="mb-3">
                  <Link to="/">
                    <Icon.Trello className="icon mr-2" />
                    <strong>Popular Models</strong>
                  </Link>
                </li>
  
                {brands &&
                brands.map((item, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>}
      </div>
    </div>
  );
}
