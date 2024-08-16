import React from "react";
import { Link } from 'react-router-dom';
import { bloglistData } from '../data/CommonData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const NewsArticle = () => {
    const optionsblog = {
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
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
  return (
      <section className="overflow-hidden space" id="blog-sec">
          <div className="container">
              <div className="title-area text-center">
                  <span className="sub-title">News & Article</span>
                  <h2 className="sec-title">Latest news and updates</h2>
              </div>
              <div className="slider-area">
                  <div className="swiper th-slider has-shadow" id="blogSlider1" >
                      <div className="swiper-wrapper">
                          <OwlCarousel className="owl-carousel owl-theme" {...optionsblog}>
                          {
                              bloglistData.map((bloglist, index) => (
                                  <div className="swiper-slide" key={index}>
                                      <div className="blog-box th-ani">
                                          <div className="blog-img">
                                              <img src={bloglist.img} alt="blogimage" />
                                          </div>
                                          <div className="blog-box_content">
                                              <div className="blog-meta">
                                                  <Link to={bloglist.btn}><i className="far fa-calendar"></i>{bloglist.date}</Link>
                                                  <Link className="author" to={bloglist.btn}><i className="far fa-user"></i>{bloglist.other}</Link>
                                              </div>
                                              <h3 className="box-title"><Link to={bloglist.btn}>{bloglist.title}</Link></h3>
                                              <Link to={bloglist.btn} className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></Link>
                                          </div>
                                      </div>
                                  </div>    
                              ))
                              }
                          </OwlCarousel>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default NewsArticle;