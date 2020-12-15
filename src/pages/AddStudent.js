import React,{useState, useRef, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import NewStudent from '../components/students/newStudent/newStudent';
import {AuthContext} from '../context/auth/authcontext';

const AddStudent =(props)=>{    
    useEffect(()=>{
        if (!authentication){
          props.history.replace('/');
        }
      },[])
    const {authentication} = useContext(AuthContext);
    const[studentName,setStudentName]= useState('');
    const[studentClass,setStudentClass] = useState('');
    const[studentPhoneNumber,setStudentPhoneNumber] = useState('');
    const [studentEmail,setStudentEmail] = useState('')
    const[result,setResult] = useState(false);
    
  const studentNameHandler=(event)=>{
    setStudentName(event.target.value)
  }
  const studentClassHandler=(event)=>{
    setStudentClass(event.target.value)
  }
  const studentPhoneNumberHandler=(event)=>{
    setStudentPhoneNumber(event.target.value)
  }
  const studentEmailHandler=(event)=>{
    setStudentEmail(event.target.value);
  }
  const addStudent=()=>{
    alert('student added');
    setResult(true)
  }
  let redirect = null;
  if(result){
    props.history.replace('/');
    // redirect = <Redirect to="/" />
  }
    return(
      <React.Fragment>
        {authentication?
          <NewStudent
          studentName={studentName}
          studentClass={studentClass}
          studentPhoneNumber={studentPhoneNumber}
          studentEmail={studentEmail}
          studentNameHandler={studentNameHandler}
          studentClassHandler={studentClassHandler}
          studentPhoneNumberHandler={studentPhoneNumberHandler}
          studentEmailHandler={studentEmailHandler}
          addStudent={addStudent}
          />:
          <NewStudent />
        }
      </React.Fragment>
        

      
    )
}

export default AddStudent;