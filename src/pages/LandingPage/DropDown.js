import React from "react";
import * as Icon from "react-feather";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";


export default function DropDown({ title,usedCars, newCars, autoStore,dropDownIcon }) {

  const usedTractors = [
    {
      heading: "Search for a Used Tractor for Sale.",
      subHeading: "There are over 110k possibilities to choose from.",
      icon: "light-bulb",
      url: "/usedtractor"
    },
    {
      heading: "Used Tractor Featured",
      subHeading: "TractorOnline has a selection of featured tractors.",
      icon: "layers",
      url: "/usedtractor"
    },
    {
      heading: "Tractors for Sale",
      subHeading: "Post a free ad to swiftly sell your tractor.",
      icon: "grocery",
      url: "/usedtractor"
    },
    {
      heading: "Dealers of Used Tractors",
      subHeading: "Locate used tractor dealers in your area.",
      icon: "star",
      url: "/usedtractor"
    },
    {
      heading: "Calculator of Prices",
      subHeading: "Calculate the tractor market price.",
      icon: "recycle",
      url: "/usedtractor"
    }
  ];

  const usedTractorsSecond = [
    {
      heading: "Certified Tractors on TractorOnline.com",
      subHeading:
        "Tractors that have received the TractorOnline stamp of approval",
      icon: "speed-meter"
    },
    {
      heading: "Tractor inspection on TractorOnline",
      subHeading: "Tractor with inspection reports from TractorOnline",
      icon: "tick-mark"
    },
    {
      heading: "TractorOnline sell it for me",
      subHeading:
        "Allow TractorOnline to handle the sale of your tractor for you.",
      icon: "site-map"
    },
    {
      heading: "Verification of Bid Sheet",
      subHeading:
        "For your piece of mind, we provide authentic auction sheets.",
      icon: "data"
    }
  ];

  const autoStoreValues = [
    {
      heading: "Autostore TractorOnline",
      subHeading:
        "TractorOnline is your one-stop shop for auto parts and accessories.",
      icon: "cart"
    },
    {
      heading: "Locate Auto Parts",
      subHeading: "Tractor parts can be found here.",
      icon: "tick-mark"
    },
    {
      heading: "Tractor Parts for Sale",
      subHeading:
        "Sell your tractor components instantly by placing a free ad.",
      icon: "tag"
    }
  ];

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Faisalabad",
    "Multan",
    "Gujranwala"
  ];

  const model = [
    "Toyota Corolla",
    "Honda Civic",
    "Honda City",
    "Suzuki Cultus",
    "Suzuki Mehran",
    "Toyota Vitz",
    "Suzuki Alto",
    "Toyota Prado"
  ];

  const newTractors = [
    {
      heading: "Search for a New Tractor for Sale.",
      subHeading:
        "Over 110k possibilities are available to you to choose from.",
      icon: "light-bulb"
    },
    {
      heading: "New Tractor Featured",
      subHeading: "TractorOnline has some featured tractors.",
      icon: "layers"
    },
    {
      heading: "Tractors for Sale",
      subHeading: "Create a free ad to sell your vehicle instantly.",
      icon: "grocery"
    },
    {
      heading: "Dealers of New Tractors",
      subHeading: "Locate new auto dealerships in your area.",
      icon: "star"
    },
    {
      heading: "Calculator for Prices",
      subHeading: "Determine the market value of tractors.",
      icon: "recycle"
    }
  ];

  return (
    <div>
      <div className={`${!dropDownIcon ? " dropdown-button p-2" : "p-1"}`}>
        {title}
        {!dropDownIcon && <Icon.ChevronDown className="icon" height="15px" width="15px" />}
        <div
          className={`drop-down-items row py-3 ${
            usedCars ? "usedCarsWidth" : ""
          } ${newCars ? "newCarsWidth" : ""} ${
            autoStore ? "autoStoreWidth" : null
          }`}
        >
          {usedCars ? (
            <>
              <ul className="list-unstyled col-4 p-0 border-right">
                {usedTractors.map((option,i) => (
                  <li className="dropdown-list" key={i}>
                    <Link
                      to="/"
                      className="d-flex pl-1 dropdown-link"
                    >
                      <Icofont
                        icon={option.icon}
                        height="10px"
                        width="10px"
                        className="icofont-2x ml-2 col-2 p-0"
                      />
                      <div className="col-10 p-0">
                        <strong>{option.heading}</strong>
                        <p>{option.subHeading}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-4 p-0 border-right">
                {usedTractorsSecond.map((option,i) => (
                  <li className="dropdown-list" key={i}>
                    <Link to="/" className="d-flex pl-1 dropdown-link">
                      <Icofont
                        icon={option.icon}
                        height="10px"
                        width="10px"
                        className="icofont-2x ml-2 col-2 p-0"
                      />
                      <div className="col-10 p-0">
                        <strong>{option.heading}</strong>
                        <p>{option.subHeading}</p>
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
                {cities.map((option,i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{option}</p>
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
                {model.map((option,i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{option}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {newCars ? (
            <>
              <ul className="list-unstyled col-6 border-right">
                {newTractors.map((option,i) => (
                  <li className="dropdown-list" key={i}>
                    <Link to="/" className="d-flex pl-1 dropdown-link">
                      <Icofont
                        icon={option.icon}
                        height="10px"
                        width="10px"
                        className="icofont-2x ml-2 col-2 p-0"
                      />
                      <div className="col-10 p-0">
                        <strong>{option.heading}</strong>
                        <p>{option.subHeading}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-6  text-center">
                <li className="mb-3">
                  <Link to="/">
                    <Icon.MapPin className="icon mr-2" />
                    <strong>Popular New Tractor</strong>
                  </Link>
                </li>
                {model.map((option,i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{option}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {autoStore ? (
            <>
              <ul className="list-unstyled col-12 ">
                {autoStoreValues.map((option,i) => (
                  <li className="dropdown-list" key={i}>
                    <Link to="/" className="d-flex pl-1 dropdown-link">
                      <Icofont
                        icon={option.icon}
                        height="10px"
                        width="10px"
                        className="icofont-2x ml-2 col-2 p-0"
                      />
                      <div className="col-10 p-0">
                        <strong>{option.heading}</strong>
                        <p>{option.subHeading}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
