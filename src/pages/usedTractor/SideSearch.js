import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import * as Icon from "react-feather";

export default function SideSearch() {
  return (
    <>
      <Accordion className="custom-accordion mb-4">
        <div className="sideSearchHeading">SHOW RESULTS BY</div>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>SEARCH BY KEYWORD</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <Form
              className="nav-search-form row"
              // onSubmit={this._handleSubmit}
              // action="/search/"
            >
              <FormControl
                type="text"
                className="col-10"
                // value={this.state.term}
                // onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Search..."
              />

              <input
                class="btn btn-primary refine-go col-2"
                type="submit"
                value="Go"
              />
            </Form>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>CITY</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <ul class="list-unstyled ">
              <li title="Cars for Sale in Lahore, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/lahore/24858"
                    title="Cars for Sale in Lahore, Pakistan"
                  >
                    <input type="checkbox" />
                    Lahore
                    <span class="pull-right count">14256</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Karachi, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/karachi/24857"
                    title="Cars for Sale in Karachi, Pakistan"
                  >
                    <input type="checkbox" />
                    Karachi
                    <span class="pull-right count">13189</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Islamabad, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/islamabad/24856"
                    title="Cars for Sale in Islamabad, Pakistan"
                  >
                    <input type="checkbox" />
                    Islamabad
                    <span class="pull-right count">10359</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Rawalpindi, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/rawalpindi/24831"
                    title="Cars for Sale in Rawalpindi, Pakistan"
                  >
                    <input type="checkbox" />
                    Rawalpindi
                    <span class="pull-right count">5052</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Peshawar, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/peshawar/24821"
                    title="Cars for Sale in Peshawar, Pakistan"
                  >
                    <input type="checkbox" />
                    Peshawar
                    <span class="pull-right count">3661</span>
                  </a>
                </label>
              </li>
            </ul>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>MAKE</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <ul class="list-unstyled ">
              <li title="Toyota Cars for Sale in Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/toyota/33"
                    title="Toyota Cars for Sale in Pakistan"
                  >
                    <input type="checkbox" />
                    Toyota
                    <span class="pull-right count">22831</span>
                  </a>
                </label>
              </li>

              <li title="Suzuki Cars for Sale in Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/suzuki/32"
                    title="Suzuki Cars for Sale in Pakistan"
                  >
                    <input type="checkbox" />
                    Suzuki
                    <span class="pull-right count">19891</span>
                  </a>
                </label>
              </li>

              <li title="Honda Cars for Sale in Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/honda/14"
                    title="Honda Cars for Sale in Pakistan"
                  >
                    <input type="checkbox" />
                    Honda
                    <span class="pull-right count">13885</span>
                  </a>
                </label>
              </li>

              <li title="Daihatsu Cars for Sale in Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/daihatsu/12"
                    title="Daihatsu Cars for Sale in Pakistan"
                  >
                    <input type="checkbox" />
                    Daihatsu
                    <span class="pull-right count">2736</span>
                  </a>
                </label>
              </li>

              <li title="Kia Cars for Sale in Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="https://www.pakwheels.com/used-cars/kia/19"
                    title="Kia Cars for Sale in Pakistan"
                  >
                    <input type="checkbox" />
                    KIA
                    <span class="pull-right count">1655</span>
                  </a>
                </label>
              </li>
            </ul>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>PROVINCE</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <ul class="list-unstyled ">
              <li title="Cars for Sale in Punjab, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="/used-cars/search/-/pv_punjab/"
                    rel="nofollow"
                    title="Cars for Sale in Punjab, Pakistan"
                  >
                    <input type="checkbox" />
                    Punjab
                    <span class="pull-right count">36873</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Sindh, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="/used-cars/search/-/pv_sindh/"
                    rel="nofollow"
                    title="Cars for Sale in Sindh, Pakistan"
                  >
                    <input type="checkbox" />
                    Sindh
                    <span class="pull-right count">14380</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Kpk, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="/used-cars/search/-/pv_kpk/"
                    rel="nofollow"
                    title="Cars for Sale in Kpk, Pakistan"
                  >
                    <input type="checkbox" />
                    KPK
                    <span class="pull-right count">6977</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Balochistan, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="/used-cars/search/-/pv_balochistan/"
                    rel="nofollow"
                    title="Cars for Sale in Balochistan, Pakistan"
                  >
                    <input type="checkbox" />
                    Balochistan
                    <span class="pull-right count">581</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Azad Kashmir, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="/used-cars/search/-/pv_azad-kashmir/"
                    rel="nofollow"
                    title="Cars for Sale in Azad Kashmir, Pakistan"
                  >
                    <input type="checkbox" />
                    Azad Kashmir
                    <span class="pull-right count">497</span>
                  </a>
                </label>
              </li>

              <li title="Cars for Sale in Federally Administered Tribal Areas, Pakistan">
                <label class="filter-check clearfix">
                  <a
                    href="/used-cars/search/-/pv_federally-administered-tribal-areas/"
                    rel="nofollow"
                    title="Cars for Sale in Federally Administered Tribal Areas, Pakistan"
                  >
                    <input type="checkbox" />
                    Federally Administered Tribal Areas
                    <span class="pull-right count">8</span>
                  </a>
                </label>
              </li>
            </ul>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>PRICE RANGE	</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <input type="search"></input>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}
