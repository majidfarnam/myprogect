import React, {useEffect} from 'react';
import Student from './student/student';
import './student/students.css';
import PropTypes from 'prop-types';


const Students =(props)=>{
    useEffect(() => {
        // console.log('change');
    }, [props.students]);
    let studentsLists = (
        props.studentsList.map((student,index)=>
        <Student 
            key={index}
            id={student.id}
            name={student.name}
            classNumber={student.classNumber}
            phoneNumber={student.phoneNumber}
            email={student.email}
            score={student.score}
            nameChange={(event)=>props.nameChange(event,student.id )}
            classNumberChange={(event)=>props.classNumberChange(event,student.id)}
            phoneNumberChange={(event)=>props.phoneNumberChange(event,student.id)}
            emailChange={(event)=>props.emailChange(event,student.id)}
            deleted={props.deleted}
            edited={()=>props.edited(student.id)}
        />            
        )
    )
    if(props.toggle){
        return(
            <div className="students-section">
                {studentsLists}
            </div>
        )
    }
    return studentsLists
}

export default Students;
Student.propTypes={
    toggle:PropTypes.element,
    nameChange:PropTypes.func.isRequired,
    classNumberChange:PropTypes.func.isRequired,
    phoneNumberChange:PropTypes.func.isRequired,
    emailChange:PropTypes.func.isRequired,
   deleted:PropTypes.func,

}