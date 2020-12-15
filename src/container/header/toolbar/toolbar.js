import React, {useState} from 'react';
import './toolbar.css';
import Logo from '../../../components/Logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from  '../../../components/students/UI/Button/button';
import Modal from '../../../components/students/UI/Button/modal/modal';
import SignIn from '../../../components/user/signIn/signIn';
import Backdrop from '../../../components/students/UI/backdrop/backdrop';
import SideDrawer from '../sideDrawer/sideDrawer';

const Toolbar =(props)=>{
    const [modalHow,setModalHow] = useState(false)
    const[openSideDrawer,setOpenSideDrawer] = useState(false);
    const sideDrawerHandler=()=>{
        setOpenSideDrawer(true)
    }
    const closeSideDrawer=()=>{
        setOpenSideDrawer(false)
    }

    const modalHandler=()=>{
        setModalHow(true)
    }
    const modalClosed=()=>{
        setModalHow(false) 
    } 

    return(
            
            <header className='Toolbar'>
                <SideDrawer show={openSideDrawer} closeSideDrawer={closeSideDrawer}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/150px-Hamburger_icon.svg.png" className='img' onClick={sideDrawerHandler} />
                <span className='showNav'><Logo height="80%"/></span>
                <span className='showNav'><nav><MenuItems /></nav></span>
                <span className='showNav'><Button btnType='danger' clicked={modalHandler}>SignIn</Button>
                <Backdrop show={props.show} />
                <Modal show={modalHow} modalClosed={modalClosed}>
                    <SignIn />
                </Modal></span>
            </header>
        
        
    )
}
export default Toolbar;