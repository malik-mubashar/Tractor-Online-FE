import React, { useState } from "react";
import FertilizerLogo from "../../assets/img/fertilizers.png";
import TractorLogo from "../../assets/img/tractorLogo.png";
import SpareParts from "../../assets/img/spareparts.jpg";
import plants from "../../assets/img/plants.jpg";
import { Image } from "react-bootstrap";


export default function ExploreProducts() {
  const [index, setIndex] = useState([
    {
      heading: 'TractorOnline, please sell it for me.',
      image: TractorLogo,
      text: 'Allow TractorOnline to sell your tractor for you.',
    },
    {
      heading: 'TractorOnline, buy Fertilizers.',
      image: FertilizerLogo,
      text: 'You can buy fertilizers as well.',
    },
    {
      heading: 'TractorOnline, please sell it for me.',
      image: SpareParts,
      text: 'TractorOnline to sell Spare Parts for you.',
    },
    {
      heading: 'TractorOnline, please sell it for me.',
      image: plants,
      text: 'TractorOnline to sell Plants for you.',
    }
  ]);

  return (
    <div>
      <div className="container-lg">
        <h2 className="landing-hading text-center">TractorOnline Products </h2>
        <div className="row space-between">
          {index.map((option, index) => (
            <div className="col-md-6 p-3" key={index}>
              <div className="border p-3 d-flex">
                <div className="img">
                  <Image
                    src={option.image}
                    height="100px"
                    width="100px"
                    alt="Profile Image"
                    className="d-flex justify-content-center m-auto"
                  />
                </div>
                <div className="desc ml-4 pt-4">
                  <h6>{option.heading}</h6>
                  <span>{option.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
