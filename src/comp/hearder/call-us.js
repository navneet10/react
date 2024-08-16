import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"; 
import {  fetchData } from "../../utils/api" 



const CallUs = () => {
    const [contactNumber, setContactNumber] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContct = async () => {
            try {
                const data = await fetchData("contactNumber"); 
                setContactNumber(data); 
            } catch (error) {
                setError(error);
            }
        };
        loadContct();
    }, []);
     
    if (error) {
        return <div>Error loading menu: {error.message}\</div>;
    };

    
  return (
      
    <div className="col-auto">
        <div className="header-button">
            <button type="button" className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
              <Link to={"tel:" + contactNumber.text} className="th-btn">Call us: {contactNumber.text}</Link>
        </div>
    </div>
      
  );
}

export default CallUs;