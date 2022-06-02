import React, { useState, useContext, useEffect } from "react";

export default function ExploreProducts() {
  const [index, setIndex] = useState([0,1,2,3,4,5])

    return (
      <div>
        <div className="container-lg">
          <h2 className="landing-hading">Explore Products by TractorOnline</h2>
          <div className="row space-between">
            {index.map((option) => (
              <div className="col-6 p-3" key={option}>
                <div className="border p-3">
                  <div className="img"><img alt="TractorOnline Sell It For Me" src="https://wsa2.pakwheels.com/assets/sifm-logo-20640083c4572b654a079a4e97c78cb1.svg" title="TractorOnline Sell It For Me" width="75" /></div>
                  <div className="desc">
                    <h3 className="landing-hading">TractorOnline Sell It For Me</h3>
                    <p className="landing-text">Let TractorOnline sell your car Hassle Free for you.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
