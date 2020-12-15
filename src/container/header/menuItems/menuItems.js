import React, {useContext} from 'react';
import './menuItems.css';
import MenuItem from './menuItem/menuItem';

const MenuItems=(props)=>{
    return(
            <span>
                
                    <ul className='MenuItems'>
                    <MenuItem link='/' >Home</MenuItem>
                    <MenuItem link={{
                        pathname:"/add-student",
                        search:"?sort=name",
                        hash:"#the_hash",
                        state:{fromDashboard:true}
                    }} >Add Student</MenuItem>

                    </ul>
            </span>
    )
}

export default MenuItems;