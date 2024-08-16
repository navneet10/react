/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { whyChoose } from "../data/CommonData";
import whyChooseimage from '../assets/img/normal/choose_1.jpg'


const WhyChooseUS = () => {
  return (
      <div className="choose-area m-2 mt-0 th-radius2 overflow-hidden space" data-bg-src="assets/img/bg/choose_bg_1.jpg">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="title-area wow fadeInLeft">
                          <span className="sub-title style1">Why Choose Us</span>
                          <h2 className="sec-title ">Reliable web development company of world’s pioneering brands.</h2>
                      </div>

                      {whyChoose.map((whychoos, index) => (
                          <div className="choose-about wow fadeInUp" key={index}>
                              <div className="choose-about_icon">
                                  <img src={whychoos.img} alt="image"   />
                              </div>
                              <div className="media-body">
                                  <h3 className="box-title">{whychoos.title}</h3>
                                  <p className="choose-about_text">{whychoos.text}</p>
                              </div>
                          </div>
                      ))} 
                  </div>
                  <div className="col-lg-6">
                      <div className="choose-image global-image">
                          <div className="img1">
                              <img src={whyChooseimage} alt="Choose" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default WhyChooseUS;