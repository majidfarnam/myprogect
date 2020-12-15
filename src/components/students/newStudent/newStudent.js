import React from 'react';
import './newStudent.css';
import Button from '../../students/UI/Button/button';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const NewStudent=(props)=>{
    const {studentName, studentClassNumber, studentPhoneNumber, studentEmail} = props;
    const {studentNameHandler, studentClassNumberHandler, studentPhoneNumberHandler, studentEmailHandler, addStudent}= props;
    
    return(
        <div className="newStudent">
            <h1>اضافه کردن دانش آموز</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler}></input>
            <label>شماره کلاس</label>
            <input type="number" value={studentClassNumber} onChange={studentClassNumberHandler}></input>
            <label>شماره تلفن</label>
            <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler}></input>
            <label>ایمیل</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler}></input>
            <Button btnType="danger" clicked={addStudent} >اضافه کردن</Button>

        </div>
    )
}
// export default React.memo(withRouter(WithClass(NewStudent, classes.NewPost)));

export default NewStudent;

NewStudent.propTypes={
    studentName:PropTypes.string,
    studentClassNumber:PropTypes.string,
    studentPhoneNumber:PropTypes.string,
    studentEmail:PropTypes.string,

}