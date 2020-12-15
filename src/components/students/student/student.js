import { number } from 'prop-types';
import React from 'react';
import './students.css';
import Button from '../UI/Button/button';
import {Link} from 'react-router-dom';

const Student =(props)=>{
    return(
        <div className="students">
            <label>شماره دانش‌آموزی :{props.id}</label>
            <label>نام و نام خانوادگی {props.name}</label>
            {/* <input type='text' value={props.name} onChange={props.nameChange}/> */}

            <label>کلاس {props.classNumber}</label>
            {/* <input type='text' value={props.classNumber} onChange={props.classNumberChange}/> */}
            
            <label>شماره تلفن {props.phoneNumber}</label>
            {/* <input type='number' value={props.phoneNumber} onChange={props.phoneNumberChange}/> */}
            
            <label>ایمیل {props.email}</label>
            {/* <input type='email' value={props.email} onChange={props.emailChange}/> */}
            <label>نمره: {props.score}</label>
            <label>
            <Button btnType="danger" clicked={props.deleted}>حذف</Button>
           <Button btnType="danger" clicked={props.edited}>ویرایش</Button></label>

        </div>
    );
}

export default Student;
