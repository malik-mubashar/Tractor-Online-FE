import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function SideSearch() {
  return (
    <>
      <Accordion className="custom-accordion mb-4">
        <h4 className="heading">SHOW RESULTS BY</h4>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>SEARCH BY KEYWORD</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <input type='search'></input>
          </AccordionItemBody>
				</AccordionItem>
				
				<AccordionItem>
          <AccordionItemTitle>
            <h3>PRICE RANGE</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <input type='search'></input>
          </AccordionItemBody>
				</AccordionItem>
				
				<AccordionItem>
          <AccordionItemTitle>
            <h3>MAKE</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <input type='search'></input>
          </AccordionItemBody>
        </AccordionItem>

				<AccordionItem>
          <AccordionItemTitle>
            <h3>PROVINCE</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <input type='search'></input>
          </AccordionItemBody>
        </AccordionItem>

				<AccordionItem>
          <AccordionItemTitle>
            <h3>CITY</h3>
            <div className="accordion__arrow"></div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <input type='search'></input>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}
