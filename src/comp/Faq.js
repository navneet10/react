/* eslint-disable jsx-a11y/aria-proptypes */
import React, { useState } from 'react';

import { faqdata } from '../data/CommonData';
import Accordions from "./Accordion";


const Faq = () => {  
    const [activeUser] = useState(-1);
    return (
        <>
            <div className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area mb-30">
                                <span className="sub-title style1">FAQ</span>
                                <h2 className="sec-title">Frequently Asked Questions</h2>
                            </div>
                            <div className="accordion-area accordion mb-30" id="faqAccordion">

                                {
                                    faqdata.map((faqs, index) => (
                                        <Accordions key={index} faqs={faqs} activeUser={activeUser} ></Accordions>
                                    ))
                                } 
                                 
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </>
  );
}

export default Faq;