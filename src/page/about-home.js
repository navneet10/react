import React from "react";
import { Link } from 'react-router-dom';
import { aboutHome } from '../data/CommonData';
import  aboutImage  from '../assets/img/appointment_bg_1.jpg'

const AboutHome = () => {
  return (
      <div className="space-top" id="about-sec">
          <div className="container">
              <div className="about-area">
                  <div className="row">
                      <div className="about-title-area">
                          <div className="title-area mb-25">
                              <span className="sub-title style1">{aboutHome.subtitle}</span>
                              <h2 className="sec-title">{aboutHome.title}</h2>
                              <p className="about-text mb-0">{aboutHome.text}</p>
                          </div>
                          <div className="checklist">
                              <ul>
                                  {
                                      aboutHome.listing.map((ablist, index) => (
                                          <li key={index}>
                                              {ablist.text}
                                          </li>
                                      ))
                                  } 
                              </ul>
                          </div>
                          <div className="btn-group mt-45 justify-content-start"> 
                              <Link to={aboutHome.btn} className="th-btn">Learn More About Us</Link>
                          </div>
                      </div>
                  </div>
                  <div className="about-shape th-andim"><img src={ aboutImage } alt="" /></div>
              </div>
          </div>
      </div>
  );
}

export default AboutHome;