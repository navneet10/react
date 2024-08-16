import React from "react";
import Header from '../comp/hearder/hearder';
import Footer from '../comp/footer/footer';
import SubPagesBanner from '../comp/sub_pages_banner';
import AboutHome from '../page/about-home';
import BrandLogo from '../comp/brand-logo';
import WhyChooseUS from '../comp/why-choose-us';
import NewsArticle from '../comp/news-article';
import TeamListing from '../comp/team';
import Testimonial from "../comp/Testimonial";

const About = () => {
    return (
        <>
            <Header></Header>
            <SubPagesBanner pageTitle='About Us'></SubPagesBanner>
            <AboutHome></AboutHome>
            <TeamListing></TeamListing>
            <WhyChooseUS></WhyChooseUS>
            <Testimonial></Testimonial>
            <NewsArticle></NewsArticle>
            <BrandLogo></BrandLogo>
            <Footer></Footer>
        </>
    );
}
export default About;