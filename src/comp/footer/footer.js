import React from "react";
import LogoImg from '../../../src/assets/img/logo.svg';
import { Link } from "react-router-dom";
import { footerConted } from '../../data/CommonData';
const Footer = () => {
  return (
      <footer className="footer-wrapper footer-layout1" >
        <div className="widget-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="footer-top-area">
                            <div className="footer-top">
                                  <div className="footer-logo">
                                      <Link top=""><img src={LogoImg} alt="Webtek" /></Link>
                                </div>
                                <div className="">
                                      <p className="footer-text">{footerConted.text}</p>
                                </div>
                            </div>
                            <div className="footer-menu-area">
                                  <ul className="footer-menu">
                                      {
                                          footerConted.link.map((fmenu, index) => (
                                              <li key={index}><Link to={fmenu.links}>{fmenu.text}</Link></li>
                                          ))
                                      }
                                </ul>
                                  <div className="th-social">
                                      {
                                          footerConted.social.map((fsocial, index) => (
                                              <Link key={index} to={fsocial.link}><i className={fsocial.icon}></i></Link> 
                                          ))
                                      }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="row gy-4 justify-content-center justify-content-lg-between">
                      {
                          footerConted.continfo.map((fcontin, index) => (
                              <div className="col-lg-auto" key={index}>
                                  <div className="info-box">
                                      <div className="info-box_icon">
                                          <i className={fcontin.icon}></i>
                                      </div>
                                      <div>
                                          <span className="info-box_subtitle">{fcontin.title}</span>
                                          {fcontin.text && fcontin.text.length > 0 && (
                                              <p className="info-box_text">{fcontin.text}</p>
                                            )
                                          }
                                          {fcontin.email && fcontin.email.length > 0 && (
                                              fcontin.email.map((femail, index) => (
                                                  <Link key={index}  to={'mailto:' + femail.text} className="info-box_link">{femail.text}</Link>
                                              ))
                                          )
                                          }
                                          {fcontin.cont && fcontin.cont.length > 0 && (
                                              fcontin.cont.map((fcont, index) => (
                                                  <Link key={index}  to={'mailto:' + fcont.text} className="info-box_link">{fcont.text}</Link>
                                              ))
                                          )
                                          }
                                      </div>
                                  </div>
                              </div>
                          ))
                      }
                     
                </div>
            </div>
        </div>
        <div className="copyright-wrap text-center">
            <div className="container">
                <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="home-web-agency.html">Webtek</a>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

  );
}

export default Footer;