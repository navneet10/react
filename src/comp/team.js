/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Teamdetails from './team-details';
import { teamData } from "../data/CommonData";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TeamListing = () => {
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
                items: 4
            }
        }
    };
    return (
        <section className="team-area">
        <div className="container z-index-common">
            <div className="row justify-content-lg-between justify-content-center align-items-end">
                <div className="col-xxl-4 col-xl-6">
                    <div className="title-area text-center text-lg-start">
                        <span className="sub-title style1">Team Members</span>
                        <h2 className="sec-title">Meet some of our 80+ team members</h2>
                    </div>
                </div> 
            </div>
            <div className="slider-area">
                <div className="swiper th-slider has-shadow" id="teamSlider1" >
                        <OwlCarousel   {...options}>
                            {teamData.map((TeamDetaisllist, index) => (
                                <Teamdetails key={index} TeamDetaisllist={TeamDetaisllist}></Teamdetails>
                            ))
                            }
                        </OwlCarousel>                    
                </div>
            </div>
        </div>
    </section>
     )
}

export default TeamListing;