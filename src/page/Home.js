import React from "react";
import Header from '../comp/hearder/hearder';
import Footer from '../comp/footer/footer';
import MainBanner from '../comp/banner/banner-main';
import Service from '../comp/service/service';
import WhyChooseUS from '../comp/why-choose-us';
import OurFeatures from '../comp/our-features';
import AboutHome from '../page/about-home';
import OurWorkProcess from '../comp/our-work-process';
import NeedHelp from '../comp/need-help';
import NewsArticle from '../comp/news-article';
import BrandLogo from '../comp/brand-logo';

const Home = () => {
    return (
        <>
            <Header></Header>
            <MainBanner></MainBanner>
            <Service></Service>
            <WhyChooseUS></WhyChooseUS>
            <OurFeatures></OurFeatures>
            <AboutHome></AboutHome>
            <OurWorkProcess></OurWorkProcess>
            <NeedHelp></NeedHelp>
            <NewsArticle></NewsArticle>
            <BrandLogo></BrandLogo>
            <Footer></Footer>
        </>
    );
}

export default Home;