import React from 'react';
import { NavLink} from 'react-router-dom';
function Menu(props) {
    //NavLink to avoid reload of page as href in anchor triggers reload
    return ( 
        <ul className="navbar-nav mr-auto">
            {props.menuData.map(item => (
                <li className="nav-item" key={item.menuText}> 
                <NavLink className="nav-link" to={item.menuLink}> 
                    {item.menuText} 
                </NavLink>
            </li> 
            ))}
        </ul> 
    );
}

export default Menu;