import React from "react";
import * as Icon from "react-feather";
import Icofont from 'react-icofont';

export default function DropDown({ usedCars, newCars, autoStore }) {

  const usedTractors = [
    { heading: "Find Used Tractor for Sale", subHeading: "Search from over 110k options", icon: 'light-bulb' },
    { heading: "Featured Used Tractor", subHeading: "View featured tractors by TractorOnline", icon: 'layers' },
    { heading: "Sell Your Tractor", subHeading: "Post a free ad and sell your tractor quickly", icon: 'grocery' },
    { heading: "Used Tractor Dealers", subHeading: "Find used tractor dealers near your", icon: 'star' },
    { heading: "Price Calculator", subHeading: "Calculate the market price of tractors", icon: 'recycle' }
  ]

  const usedTractorsSecond = [
    { heading: "TractorOnline Certified Tractors", subHeading: "Tractors with the TractorOnline seal of approval", icon: 'speed-meter' },
    { heading: "TractorOnline tractor Inspection", subHeading: "Tractor with detailed TractorOnline Inspection reports", icon: 'tick-mark' },
    { heading: "TractorOnline Sell It For Me", subHeading: "Let TractorOnline sell your tractor hassle free for you", icon: 'site-map' },
    { heading: "Auction Sheet Verification", subHeading: "Authentic Auction Sheets for your peace of mind", icon: 'data' }
  ]

  const autoStoreValues = [
    { heading: "TractorOnline Autostore", subHeading: "Buy Auto Parts & Accessories directly from TractorOnline", icon: 'cart' },
    { heading: "Find Auto Parts", subHeading: "Find auto parts for your tractor", icon: 'tick-mark' },
    { heading: "Sell Tractor Parts", subHeading: "Post a free ad and sell your tractor parts quickly", icon: 'tag' },
  ]

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Faisalabad",
    "Multan",
    "Gujranwala",
  ]

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
    { heading: "Find New Tractor for Sale", subHeading: "Search from over 110k options", icon: 'light-bulb' },
    { heading: "Featured New Tractor", subHeading: "View featured tractors by TractorOnline", icon: 'layers' },
    { heading: "Sell Your Tractor", subHeading: "Post a free ad and sell your car quickly", icon: 'grocery' },
    { heading: "New Tractor Dealers", subHeading: "Find new car dealers near your", icon: 'star' },
    { heading: "Price Calculator", subHeading: "Calculate the market price of tractors", icon: 'recycle' }
  ]

  return (
    <div>
      <div className="dropdown-button p-2">
        {usedCars ? "Used Tractors" : null}
        {newCars ? "New Tractors" : null}
        {autoStore ? "Auto Stores" : null}
        <Icon.ChevronDown className="icon" height="15px" width="15px" />
        <div
          className={`drop-down-items row py-3 ${
            usedCars ? "usedCarsWidth" : ""
          } ${newCars ? "newCarsWidth" : ""} ${
            autoStore ? "autoStoreWidth" : null
          }`}
        >
          {usedCars ? (
            <>
              <ul className="list-unstyled col-3 p-0 border-right">
                {usedTractors.map((option) => (
                  <li className="dropdown-list" key={option.heading}>
                    <a href="/" className="d-flex pl-1 dropdown-link">
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
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-3 p-0 border-right">
                {usedTractorsSecond.map((option) => (
                  <li className="dropdown-list" key={option.heading}>
                    <a href="/" className="d-flex pl-1 dropdown-link">
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
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-3 border-right text-center">
                <li className="mb-3">
                  <a href="/">
                    <Icon.MapPin className="icon mr-2" />
                    <strong>Popular Cities</strong>
                  </a>
                </li>
                {cities.map((option) => (
                  <li key={option.heading}>
                    <a
                      href="/"
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{option}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-3 border-right text-center">
                <li className="mb-3">
                  <a href="/">
                    <Icon.Trello className="icon mr-2" />
                    <strong>Popular Models</strong>
                  </a>
                </li>
                {model.map((option) => (
                  <li key={option}>
                    <a
                      href={"/"}
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{option}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {newCars ? (
            <>
              <ul className="list-unstyled col-6 border-right">
                {newTractors.map((option) => (
                  <li className="dropdown-list" key={option.heading}>
                    <a href={"/"} className="d-flex pl-1 dropdown-link">
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
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled col-6 border-right text-center">
                <li className="mb-3">
                  <a href="/">
                    <Icon.MapPin className="icon mr-2" />
                    <strong>Popular New Tractor</strong>
                  </a>
                </li>
                {model.map((option) => (
                  <li key={option}>
                    <a
                      href={"/"}
                      className="dropdown-link"
                      title="Used Cars for sale in Karachi"
                    >
                      <p className="city-name">{option}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {autoStore ? (
            <>
              <ul className="list-unstyled col-12 border-right">
                {autoStoreValues.map((option) => (
                  <li className="dropdown-list" key={option.heading}>
                    <a href="/" className="d-flex pl-1 dropdown-link">
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
                    </a>
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
