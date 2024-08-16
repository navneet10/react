import React from "react";
import { Link } from 'react-router-dom';


const Teamdetails = ({ TeamDetaisllist }) => {
    return (
        <>
       
                <div className="th-team team-box th-ani">
                    <div className="team-img">
                    <img src={TeamDetaisllist.img} alt="Team" />
                    </div>
                    <div className="team-content">
                        <div className="media-body">
                        <h3 className="box-title"><a href="/">{TeamDetaisllist.name}</a></h3>
                        <span className="team-desig">{TeamDetaisllist.dg}</span>
                        </div>
                    <div className="th-social">
                        {
                            TeamDetaisllist.social.map((soclink, index) => (
                                <Link to={soclink.link}><i className={soclink.icon}></i></Link>
                            ))
                        }
                        </div>
                    </div>
                </div >      
             
        </>
  );
}

export default Teamdetails;