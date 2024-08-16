import React from "react";
import { processList } from '../data/CommonData';

const OurWorkProcess = () => {
  return (
      <section className="space" data-bg-src="assets/img/bg/process_bg_1.jpg">
          <div className="container">
              <div className="title-area text-center text-md-start">
                  <span className="sub-title">OUR WORK PROCESS</span>
                  <h2 className="sec-title">Bringing the best IT vendors to you.</h2>
              </div>
              <div className="row">
                  {
                      processList.map((processdata, index) => (
                          <div className="col-md-6 col-lg-3 process-box-wrap" key={index}>
                              <div className="process-box">
                                  <div className="process-box_icon">
                                      <img src={processdata.img} alt="service image" />
                                      <p className="box-number">{processdata.count}</p>
                                  </div>
                                  <h3 className="process-box_title">{processdata.title}</h3>
                                  <p className="process-box_text">{processdata.text}</p>
                              </div>
                          </div>      
                      )) 
                  }
                   
              </div>
          </div>
      </section>
  );
}

export default OurWorkProcess;