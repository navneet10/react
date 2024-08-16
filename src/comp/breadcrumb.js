import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
    const location = useLocation();
    const { pathname } = location;
    const segments = pathname.split('/');

    let Url = '';
    const breadCrumbLinks = segments.map((segment, index) => {
        Url = `/${segment.replace(/-/g, ' ')}`;  

        return (
            <li key={index}>
                <Link to={Url}>
                    {segment === '' ? 'Home' : segment.replace(/-/g, ' ')}
                </Link>
            </li>
        );
    });

    return (
        <ul className="breadcumb-menu"> 
            {breadCrumbLinks}
        </ul>
    );
}

export default BreadCrumb;
