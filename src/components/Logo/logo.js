import React from 'react';
import logo from '../../assets/images/Logo.png';
import './logo.css';
const Logo = (props)=>{
    return(
        <div className ='logo' style={{height:props.height}}>
            <img src={logo} alt="test logo" />
        </div>
    )
}

export default React.memo(Logo);