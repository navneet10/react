import React from "react";
import { Feature } from '../data/CommonData'

const OurFeatures = () => {
  return (
      <div className="feature-sec m-2 mb-0 th-radius2 overflow-hidden space" id="feature-area">
          <div className="container">
              <div className="title-area text-center">
                  <span className="sub-title">Our Features</span>
                  <h2 className="sec-title">Explore our amazing features</h2>
              </div>
              <div className="row gy-4  justify-content-center">
                  {
                      Feature.map((featureind, index) => (
                          <div className="col-md-6 col-xl-3" key={index}>
                              <div className="feature-item  th-ani">
                                  <div className="feature-item_icon">
                                      <img src={featureind.img} alt="icon" />
                                  </div>
                                  <div className="media-body">
                                      <h3 className="box-title">{featureind.title}</h3>
                                      <p className="feature-item_text">{featureind.text}</p>
                                  </div>
                              </div>
                          </div>
                      ))
                  }
              </div>
          </div>
      </div>
  );
}

export default OurFeatures;