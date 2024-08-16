import React from "react";
import aboutImage from '../assets/img/breadcumb-bg.jpg';
import BreadCrumb from './breadcrumb';



const subPagesBanner = (props) => {
    const pageTitle = props.pageTitle;
    return (
        <div className="breadcumb-wrapper " style={{ backgroundImage: `url(${aboutImage})` }}>
          <div className="container">
              <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{pageTitle}</h1> 
                    <BreadCrumb></BreadCrumb>
              </div>
          </div>
      </div>
  );
}

export default subPagesBanner;