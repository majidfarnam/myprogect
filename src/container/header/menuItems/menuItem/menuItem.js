import React from 'react';
import './menuItem.css';
import {NavLink} from 'react-router-dom';

const MenuItem=(props)=>{

    return(
        <li className='menuItem'>
            <NavLink to={props.link} exact activeClassName='active'>{props.children}</NavLink>
        </li>
    )
}

export default MenuItem;