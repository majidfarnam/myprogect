import React from 'react';
import MenuItems from '../menuItems/menuItems';
import './sideDrawer.css';
import Backdrop from '../../../components/students/UI/backdrop/backdrop';
import Button from '../../../components/students/UI/Button/button'
import Logo from '../../../components/Logo/logo';

const SideDrawer=(props)=>{
    let classes = ['SideDrawer','Close'];
    if(props.show){
        classes = ['SideDrawer','Open']
    }
    return(
            <React.Fragment>
                <Backdrop show={props.show} modalClosed={props.closeSideDrawer}/>
                <div className={classes.join(' ')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/150px-Hamburger_icon.svg.png" className='img' onClick={props.closeSideDrawer} />
                    <Logo height="10%"/>
                    <nav >
                    <MenuItems/>
                    </nav> 
                    <div className="boxButton">
                    <Button btnType="danger" clicked={()=>alert('oh!')}>ورود و ثبت نام</Button>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default SideDrawer;