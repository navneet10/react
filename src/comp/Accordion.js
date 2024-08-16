/* eslint-disable jsx-a11y/aria-proptypes */
import React  from "react"; 


const Accordions = ({ faqs, activeUser }) => {
    const { text, title, id, index } = faqs;
   
    return (
        <>  

            <div className="accordion-card style2  " >
                <div className="accordion-header" id="collapse-item-1">
                    <button className={`accordion-button ${activeUser === index ? '' : 'collapsed'}`} type="button"
                                                    
                             data-bs-toggle="collapse" 
                            data-bs-target={'#' + id }
                        aria-expanded={`${activeUser === id ? 'true' : 'false'}`} 
                             aria-controls="collapse-1">
                        {title}
                    </button>
                 </div>
                <div id={id} className={`accordion-collapse collapse ${activeUser === index ?  'show' : ''} ` } aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                    <div className="accordion-body style2"> 
                        <p className="faq-text">{text}</p>
                     </div>
                </div>
           </div>           
                         
        </>
  );
}

export default Accordions;