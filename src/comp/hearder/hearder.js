
import React from "react";
import Menu from "./Menu";
import Logo from "./logo";
import CallUs from "./call-us";
import { useLocation } from 'react-router-dom'

 
const Header = () => {
    const location = useLocation();
    const isSubPage = location.pathname !== '/';
  return (
      <header className={`th-header header-layout2 header-absolute ${isSubPage ? 'bg-white' : ''} `}>
          <div className="sticky-wrapper"> 
              <div className="menu-area">
                  <div className="container">
                      <div className="row align-items-center justify-content-between">
                          <Logo></Logo>
                          <Menu></Menu>
                          <CallUs></CallUs>
                      </div>
                  </div>
              </div>
          </div>
      </header>

  );
}

export default Header;