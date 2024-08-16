/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { TestimonialData } from "../data/CommonData"; 
import testimonialimage from '../assets/img/testimonial/quote.svg'
import testimonialbgimage from '../assets/img/testimonial/testi_bg_3.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial = () => {
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
                items: 3
            }
        }
    };
    return (
        <section class="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space background-image arrow-wrap" id="testi-sec" style={{ backgroundImage: `url(${testimonialbgimage})` }} >
          <div class="container th-container2">
              <div class="row justify-content-lg-between justify-content-center align-items-end">
                  <div class="col-xxl-4 col-xl-6">
                      <div class="title-area text-center text-lg-start">
                          <span class="sub-title style1 text-white">Customer Feedbacks</span>
                          <h2 class="sec-title text-white">See what our clients have to say</h2>
                      </div>
                  </div> 
              </div>
              <div class="slider-area">
                  <div class="swiper th-slider has-shadow" id="testiSlider2" >
                        <div class="swiper-wrapper">
                            <OwlCarousel {...options}>

                          {
                              TestimonialData.map((testimoniallist, index) => (
                                  <div class="swiper-slide" key={index}>
                                      <div class="testi-box th-ani">
                                          <p class="testi-box_text">{testimoniallist.text}</p>
                                          <div class="testi-box_wrapper">
                                              <div class="testi-box_profile">
                                                  <div class="testi-box_author">
                                                      <img src={testimoniallist.img} alt="Avater" style={{ width: "50px" }} />
                                                  </div>
                                                  <div class="testi-box_info">
                                                      <h3 class="box-title">{testimoniallist.title}</h3>
                                                      <span class="testi-box_desig">{testimoniallist.desig}</span>
                                                  </div>
                                              </div>
                                              <div class="testi-quote">
                                                  <img src={testimonialimage} alt=""  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ) )
    
                          }
                            </OwlCarousel>
                          
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Testimonial;