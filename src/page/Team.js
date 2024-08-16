import React from "react";
import Header from '../comp/hearder/hearder';
import Footer from '../comp/footer/footer';
import SubPagesBanner from '../comp/sub_pages_banner'; 
import BrandLogo from '../comp/brand-logo'; 
import NewsArticle from '../comp/news-article';
import {teamData} from '../data/CommonData';
import Teamdetails from '../comp/team-details';
import Testimonial from "../comp/Testimonial";

const About = () => {
    return (
        <>
            <Header></Header>
            <SubPagesBanner pageTitle='Our Team'></SubPagesBanner>
            <section class="space">
                <div class="container">
                    <div class="row gy-30">
                        {
                            teamData.map((TeamDetaisllist, index) => (
                                <div class="col-md-6 col-xl-3" key={index}>
                                    <Teamdetails TeamDetaisllist={ TeamDetaisllist }></Teamdetails>
                                </div>    
                            ))
                        }
                    </div>
                </div>
            </section>
            
            <NewsArticle></NewsArticle>
            <Testimonial></Testimonial>
            <BrandLogo></BrandLogo>
            <Footer></Footer>
        </>
    );
}
export default About;