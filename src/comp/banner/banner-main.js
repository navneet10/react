import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { homeSlider } from '../../data/CommonData'
import BannerImg from '../../../src/assets/img/hero_img_14_1.png';

import { fetchData } from '../../utils/api' 

const Header = () => {
    const [homeSlider, setHomeSlider] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const homeslider = async () => {
            try {
                const data = await fetchData("homeSlider");
                setHomeSlider(data); 
            } catch (error) {
                setError(error)
            }
        };
        homeslider();
        
    }, []);

    if (error) {
        return <div> Error logding {error.messge}</div>
    };

  return (
      <div className="th-hero-wrapper hero-2 ">
          <div className="container position-relative z-1">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      <div className="hero-style2">
                          <h1 className="hero-title"> {homeSlider.title}<span className="title">{homeSlider.subtitle}</span>
                          </h1>
                          <p className="hero-text">{homeSlider.text}</p>
                          <div className="btn-group  justify-content-center justify-content-lg-start">
                              <Link to={homeSlider.btnlinkspath} className="th-btn style4">{homeSlider.btnlinks}</Link>
                              <Link to={homeSlider.btnlinkcpath} className="th-btn">{homeSlider.btnlinkc}</Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                          <img src={BannerImg} alt="" className="mx-100" />
                  </div>
              </div>
          </div>
          <div className="ripple-shape">
              <span className="ripple-1"></span>
              <span className="ripple-2"></span>
              <span className="ripple-3"></span>
              <span className="ripple-4"></span>
              <span className="ripple-5"></span>
          </div>
          <div className="th-circle">
              <span className="circle style1"></span>
              <span className="circle style2"></span>
              <span className="circle style3"></span>
          </div>
      </div>

  );
}

export default Header;