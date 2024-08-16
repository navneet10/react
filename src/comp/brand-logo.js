import React from "react";
import { Link } from 'react-router-dom';
import { brankLogos } from '../data/CommonData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const BrandLogo = () => {
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 10,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    };
  return (
      <div className="brand-area space-bottom">
          <div className="container">
              <div className="swiper th-slider" id="brandSlider1" >
                  <div className="swiper-wrapper">
                      <OwlCarousel {...options }>
                      {
                          brankLogos.map((barndimg, index) => (
                              <div className="swiper-slide">
                                  <div className="brand-item wow fadeInLeft">
                                      <Link to="">
                                          <img  src={barndimg.img} alt="Brand Logo" /> 
                                      </Link>
                                  </div>
                              </div>    
                          ))
                      } 
                      </OwlCarousel>                     
                </div>

            </div>
        </div>
    </div>
  );
}

export default BrandLogo;