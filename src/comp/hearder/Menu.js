import React, { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom'; 
import { fetchData } from '../../utils/api';

const Menu = () => {

    const [navMenu, setNavMenu] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMenu = async () => {
            try {
                const data = await fetchData('navMenu');
                setNavMenu(data);
            } catch (error) {
                setError(error);
            }
        };
        loadMenu();
    }, []);

    if (error) {
        return <div>Error loading menu: {error.message}</div>;
    }


    return (
        <>

            <div className="col-auto">
                <nav className="main-menu style2 d-none d-lg-inline-block">
                    <ul>
                       {navMenu.map((menuItem, index) => (
                           
                                <li className={` ${menuItem.submenus && menuItem.submenus.length > 0 ? 'menu-item-has-children' : ''} `} key={index}>
                                    <NavLink to={menuItem.path}>{menuItem.text}</NavLink>
                                    {
                                        menuItem.submenus && menuItem.submenus.length > 0 && (
                                            <ul className="sub-menu">
                                                {
                                               menuItem.submenus.map((submenuItem, subIndex) => (
                                                   <li className={` ${submenuItem.submenus && submenuItem.submenus.length > 0 ? 'menu-item-has-children' : ''} `} key={subIndex}>
                                                       <Link to={submenuItem.path}>{submenuItem.text}</Link>
                                                            {
                                                           submenuItem.submenus && submenuItem.submenus.length > 0 && (
                                                                    <ul className="sub-menu">
                                                                        {
                                                                       submenuItem.submenus.map((subSubmenuItem, subsubIndex) => (
                                                                                <li key={subsubIndex}>
                                                                               <Link to={subSubmenuItem.path}>{subSubmenuItem.text}</Link>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                )
                                                            }
                                                        </li>

                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </li>
                            
                        ))}


                    </ul>
                </nav>

            </div>
        </>
    );
};

export default Menu;