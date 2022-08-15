import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const myAds = () => {
  return (

    <div className="mb-4">
    <div className="">
      <div className="tabs-style-three">
        <Tabs defaultActiveKey="Active" id="uncontrolled-tab-example">
          <Tab eventKey="Active" title="Active">
          
            <h4 className="text-center">No Active Ads</h4>
          
            </Tab>
            <Tab eventKey="Removed" title="Removed">
              </Tab>
            </Tabs>
            </div>
          </div>
        </div>
      
    
     
      
  
  );
};

export default myAds;
