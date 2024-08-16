import React from "react";
import contactimg from '../assets/img/contact_bg_1.png';
import { contactNumber } from '../data/CommonData';



const NeedHelp = () => {
  return (
      <section className="space-top">
          <div className="container">
              <div className="appointment-area th-radius position-relative overflow-hidden bg-smoke" style={{ 'backgroundImage': 'url(' + contactimg + ')' }}>
                  <div className="row">
                      <div className="col-xl-5">
                          <div className="title-area mb-35 text-xl-start">
                              <span className="sub-title style1 ">Need Help?</span>
                              <h2 className="sec-title ">We are ready to work for your projects</h2>
                              <p className="sec-desc ">Phasellus parturient est cum dictum habitant eros fames, enim
                                  curabitur
                                  convallis arcu dictumst fermentum cubilia leo maecenas in pellentesque.</p>
                          </div>
                          <div className="feature-wrapper style4">
                              <div className="feature-icon">
                                  <a href="tel:+2583258235"><i className="fa-solid fa-phone"></i></a>
                              </div>
                              <div className="media-body">
                                  <p className="header-info_link"><a href={"tel:"+ contactNumber.text}>Call Us: {contactNumber.text}</a></p>
                                  <span className="header-info_label">For any question</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-7">
                          <div className="appointment-area-wrapper">
                              <form action="mail.php" method="POST" className="appointment-form2 input-smoke ajax-contact">
                                  <div className="row">
                                      <div className="form-group col-md-6">
                                          <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <input type="text" className="form-control" name="text" id="text" placeholder="What is your budget?" />
                                      </div>
                                      <div className="form-group col-12">
                                          <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Write your message here"></textarea>
                                      </div>
                                      <div className="form-btn col-12">
                                          <button className="th-btn style3">Submit Message</button>
                                      </div>
                                  </div>
                                  <p className="form-messages mb-0 mt-3"></p>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default NeedHelp;