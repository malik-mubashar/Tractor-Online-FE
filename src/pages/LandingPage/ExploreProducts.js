import React, { useState } from "react";

export default function ExploreProducts() {
  const [index, setIndex] = useState([0, 1, 2, 3, 4, 5]);

  return (
    <div>
      <div className="container-lg">
        <h2 className="landing-hading text-center">TractorOnline Products </h2>
        <div className="row space-between">
          {index.map((option) => (
            <div className="col-md-auto p-3" key={option}>
              <div className="border p-3 d-flex">
                <div className="img">
                  <img
                    alt="TractorOnline, please sell it for me."
                    src="https://wsa2.pakwheels.com/assets/sifm-logo-20640083c4572b654a079a4e97c78cb1.svg"
                    title="TractorOnline Sell It For Me"
                    width="75"
                  />
                </div>
                <div className="desc">
                  <h6>TractorOnline, please sell it for me.</h6>
                  <span>Allow TractorOnline to sell your car for you.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
