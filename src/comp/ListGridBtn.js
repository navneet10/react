/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const ListGridView = ({ grifView }) => {
    const [listGrid, setListGrid] = useState(false);
    

    const handalList = () => { 
        setListGrid(!listGrid);
        grifView();
        
    }
     
    return (
        <div className="nav" role="tablist">
            <Link to="" onClick={handalList} className={`$(!listGrid ? 'active' : ''`} ><i className="fas fa-th"></i></Link>
            <Link to="" onClick={handalList} className={`$(listGrid ? 'active' : ''`} ><i className="fas fa-list"></i></Link>
        </div>
  );
}

export default ListGridView;