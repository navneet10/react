import React from "react";
import LogoImg from '../../../src/assets/img/logo2.svg';
import { Link } from "react-router-dom";
 
const Logo = () => {
  return (
      <div className="col-auto">
          <div className="header-logo"> 
                  <Link to="/"><img src={LogoImg} alt="Webtek" /></Link> 
          </div>
      </div>
  );
}

export default Logo;