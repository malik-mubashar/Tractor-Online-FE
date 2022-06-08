import React, { useState, useContext, useEffect } from "react";
import * as Icon from 'react-feather';


export default function DropDown({usedCars, newCars, autoStore}) {
  const [text, setText] = useState([
    'Find Used Tractor for Sale',
    'Featured Used Tractor',
    'Sell Your Tractor',
    'Used Tractor Dealers',
    'Price Calculator'
  ])

  const [cities, setCities] = useState([
    'Karachi',
    'Lahore',
    'Islamabad',
    'Rawalpindi',
    'Peshawar',
    'Faisalabad',
    'Multan',
    'Gujranwala'
  ])

  const [model, setModel] = useState([
    'Toyota Corolla',
    'Honda Civic',
    'Honda City',
    'Suzuki Cultus',
    'Suzuki Mehran',
    'Toyota Vitz',
    'Suzuki Alto',
    'Toyota Prado'
  ])

    return (
      <div>
        <div className="dropdown-button p-2">
          {usedCars ? 'Used Tractors' : null}
          {newCars ? 'New Tractors' : null}
          {autoStore ? 'Auto Stores' : null}
          <Icon.ChevronDown
              className="icon"
              height="15px"
              width="15px"
          />
          <div className={`drop-down-items row py-3 ${usedCars ? "usedCarsWidth" : ""} ${newCars ?  "newCarsWidth" : ""} ${autoStore ? 'autoStoreWidth' : null}`}>
            {usedCars ?
              <>
                <ul class="list-unstyled col-3 border-right">
                  {text.map((option) => (
                    <li className="dropdown-list" key={option}>
                      <a href="#" className="row pl-3 dropdown-link">
                        <Icon.Link
                          height="20px"
                          width="20px"
                          className="icon mr-2"
                        />
                        <div>
                          <strong>{option}</strong>
                          <p>Search from over 110k options</p>
                        </div>
                      </a>
                    </li>
                  ))}

                </ul>
                <ul class="list-unstyled col-3 border-right">
                  {text.map((option) => (
                    <li className="dropdown-list" key={option}>
                      <a href="#" className="row pl-3 dropdown-link">
                        <Icon.Link
                          height="20px"
                          width="20px"
                          className="icon mr-2"
                        />
                        <div>
                          <strong>{option}</strong>
                          <p>Search from over 110k options</p>
                        </div>
                      </a>
                    </li>
                  ))}

                </ul>
                <ul class="list-unstyled col-3 border-right text-center">
                  <li className="mb-3">
                    <a>
                      <Icon.MapPin
                            className="icon mr-2"
                        />
                      <strong>Popular Cities</strong>
                    </a>
                  </li>
                  {cities.map((option) => (
                    <li key={option}>
                      <a href="#" className="dropdown-link" title="Used Cars for sale in Karachi">
                        <p class="city-name">{option}</p>
                      </a>
                    </li>
                  ))}

                </ul>
                <ul class="list-unstyled col-3 border-right text-center">
                  <li className="mb-3">
                    <a>
                      <Icon.Trello
                            className="icon mr-2"
                        />
                      <strong>Popular Models</strong>
                    </a>
                  </li>
                  {model.map((option) => (
                    <li key={option}>
                      <a href={'/'} className="dropdown-link" title="Used Cars for sale in Karachi">
                        <p class="city-name">{option}</p>
                      </a>
                    </li>
                  ))}

                </ul>
              </>
             :
              null
            }

            {newCars ?
              <>
                <ul class="list-unstyled col-6 border-right">
                  {text.map((option) => (
                    <li className="dropdown-list" key={option}>
                      <a href={'/'} className="row pl-3 dropdown-link">
                        <Icon.Link
                          height="20px"
                          width="20px"
                          className="icon mr-2"
                        />
                        <div>
                          <strong>{option}</strong>
                          <p>Search from over 110k options</p>
                        </div>
                      </a>
                    </li>
                  ))}

                </ul>
                <ul class="list-unstyled col-6 border-right text-center">
                  <li className="mb-3">
                    <a>
                      <Icon.MapPin
                            className="icon mr-2"
                        />
                      <strong>Popular New Tractor</strong>
                    </a>
                  </li>
                  {model.map((option) => (
                    <li key={option}>
                      <a href={'/'} className="dropdown-link" title="Used Cars for sale in Karachi">
                        <p class="city-name">{option}</p>
                      </a>
                    </li>
                  ))}

                </ul>
              </>
             :
              null
            }

            {autoStore ?
              <>
                <ul class="list-unstyled col-12 border-right">
                  {text.map((option) => (
                    <li className="dropdown-list" key={option}>
                      <a href="#" className="row pl-3 dropdown-link">
                        <Icon.Link
                          height="20px"
                          width="20px"
                          className="icon mr-2"
                        />
                        <div>
                          <strong>{option}</strong>
                          <p>Search from over 110k options</p>
                        </div>
                      </a>
                    </li>
                  ))}

                </ul>
              </>
             :
              null
            }

          </div>
        </div>
      </div>
    );
}
