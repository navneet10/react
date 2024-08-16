/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"; 
import Header from '../comp/hearder/hearder';
import Footer from '../comp/footer/footer';
import SubPagesBanner from '../comp/sub_pages_banner';  
import OurWorkProcess from "../comp/our-work-process";
import Faq from "../comp/Faq";

const FaqPage = () => {
    return (
        <>
            <Header></Header>
            <SubPagesBanner pageTitle='FAQ (Frequently Asked Questions)'></SubPagesBanner>
            <OurWorkProcess></OurWorkProcess>
            <Faq></Faq>
            <Footer></Footer>
        </>
  );
}

export default FaqPage;