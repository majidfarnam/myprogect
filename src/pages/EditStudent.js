import React, {useEffect} from 'react';
import Button from '../components/students/UI/Button/button';
import './style/editStudent.css';
import axios from 'axios';

const EditStudent=(props)=>{
    useEffect(()=>{
        // console.log(props.match.params.id)
        const {studentid} = props.match.params;
        axios.get(`https://jsonplaceholder.ir/posts/${studentid}`)
        .then(response=>{
            console.log(response);
        })
    },[])
    const editStudent =()=>{
        alert('Successfull')
    }
    return(
        <div className='newStudent'>
            <h1>ویرایش دانش آموز</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text" ></input>
            <label>شماره کلاس</label>
            <input type="number" ></input>
            <label>شماره تلفن</label>
            <input type="number" ></input>
            <label>ایمیل</label>
            <input type="email" ></input>
            <Button btnType="danger" clicked={editStudent} >Edit student</Button>
        </div>
    )
}

export default EditStudent;