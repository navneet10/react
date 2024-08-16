import React from 'react';
import { Link } from 'react-router-dom';

const Servicees = ({ service }) => {
    const { img, path, title, text, btn } = service;
    return (
        <div className="swiper-slide">
            <div className="service-card th-ani">
                <div className="box-img global-img" style={{ borderRadius: '0px' }}>
                    <img src={img} alt="Service" style={{ width: '30px', borderRadius: '0px' }} />
                </div>
                <div className="box-content">
                    <h3 className="box-title"><Link to={path}>{title}</Link></h3>
                    <p className="service-card_desc">{text}</p>
                </div>
                <Link to={path} className="line-btn">{btn}<i className="fa-regular fa-arrow-right"></i></Link>
            </div>
        </div>
    );
}

export default Servicees;
