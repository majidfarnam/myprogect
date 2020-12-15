import React from 'react';
import './backdrop.css';

const Backdrop=(props)=>(
    props.show?
    <div className='Backdrop' onClick={props.modalClosed}>
    </div>:null
)

export default Backdrop;