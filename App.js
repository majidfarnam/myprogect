// import React,{useState, useEffect} from 'react';
// import './App.css';
// import Students from './components/students/students';
// import Button from './components/students/UI/Button/button';
// import NewStudent from './components/students/newStudent/newStudent'
// import PropsType from 'prop-types';
// import Toolbar from './container/header/toolbar/toolbar';
// import {BrowserRouter} from 'react-router-dom';
// import 

// const App=() =>{

//   const[studentsState,setStudents]=useState([
//     {id:0,name:"mahdi",classNumber:204,phoneNumber:1234,email:'shishak.mang@gmail.com'},
//     {id:1,name:"alireza",classNumber:214,phoneNumber:12345,email:'shishak.mang@gmail.com'},
//     {id:2,name:"ali",classNumber:224,phoneNumber:123456,email:'shishak.mang@gmail.com'},
//     {id:3,name:"amirhossien",classNumber:234,phoneNumber:1234567,email:'shishak.mang@gmail.com'},
//   ])
//   const[toggle,setToggle]=useState(false);
//   const[searchBarValue,setSearchBarValue]=useState('');
//   const[arrayHolder,setArrayHolder]=useState([])
//   const[studentName,setStudentName]=useState('');
//   const[studentClassNumber,setStudentClassNumber]=useState('');
//   const[studentPhoneNumber,setStudentPhoneNumber]=useState('');
//   const[studentEmail,setStudentEmail]=useState('');


//   const searchFilterFunction=(event)=>{
//       const itemData = arrayHolder.filter((item)=>{
//       const itemData = item.name.toUpperCase();
//       const textData = event.target.value.toUpperCase();
//       return itemData.indexOf(textData)>-1
//     })
//     setStudents(itemData);
//     setSearchBarValue(event.target.value)
//   }
//   useEffect(()=>{
//     setArrayHolder(studentsState)
//   },[])
//   const nameChangeHandler=(event,id)=>{
//     const studentIndex = studentsState.findIndex(student=>{
//       return student.id===id;
//     })
//     const student={...studentsState[studentIndex]};
//     student.name=event.target.value;
//     const students = [...studentsState];
//     students[studentIndex] = student;
//     setStudents(students);
//   }
  
//   const classNumberChangeHandler=(event,id)=>{
//     const studentIndex = studentsState.findIndex(student=>{
//       return student.id===id;
//     })
//     const student={...studentsState[studentIndex]};
//     student.classNumber=event.target.value;
//     const students = [...studentsState];
//     students[studentIndex]=student;
//     setStudents(students);
//   }

//   const phoneNumberChangeHandler =(event,id)=>{
//       const studentIndex = studentsState.findIndex(student=>{
//         return student.id===id;
//       })
//       const student = {...studentsState[studentIndex]};
//       student.phoneNumber=event.target.value;
//       const students = [...studentsState];
//       students[studentIndex]=student;
//       setStudents(students);
//   }
    
//   const emailChangeHandler=(event,id)=>{
//     const studentIndex = studentsState.findIndex(student=>{
//     return student.id===id;
//     })
//     const student = {...studentsState[studentIndex]};
//     student.email=event.target.value;
//      const students = [...studentsState];
//      students[studentIndex]=student;
//      setStudents(students);
//   }

//   const deletStudent=(index)=>{
//     const students=[...studentsState];
//     students.splice(index,1);
//     setStudents(students);
//   }
//   const toggleHandler=()=>{
//     setToggle(!toggle)
//   }
//   const studentNameHandler=(event)=>{
//     setStudentName(event.target.value)
//   }
//   const studentClassNumberHandler=(event)=>{
//     setStudentClassNumber(event.target.value)
//   }
//   const studentPhoneNumberHandler=(event)=>{
//     setStudentPhoneNumber(event.target.value)
//   }
//   const studentEmailHandler=(event)=>{
//     setStudentEmail(event.target.value)
//   }
//   const addStudent=()=>{
//     const newStudentsState=[...studentsState]
//     newStudentsState.push({
//       'id': studentsState.length,
//       'name': studentName,
//       'classNumber': studentClassNumber,
//       'phoneNumber': studentPhoneNumber,
//       'email': studentEmail,
//     })
//     setStudents(newStudentsState);
//     setStudentName('');
//     setStudentClassNumber('');
//     setStudentPhoneNumber('');
//     setStudentEmail('');
//   }
//     return(
//       <BrowserRouter>
      
//       <div className="App">
//         <Toolbar />
//         <NewStudent 
//           studentName={studentName}
//           studentClassNumber={studentClassNumber}
//           studentPhoneNumber={studentPhoneNumber}
//           studentEmail={studentEmail}
//           studentNameHandler={studentNameHandler}
//           studentClassNumberHandler={studentClassNumberHandler}
//           studentPhoneNumberHandler={studentPhoneNumberHandler}
//           studentEmailHandler={studentEmailHandler}
//           addStudent={addStudent}
//         />
//         <input type="text" value={searchBarValue} onChange={searchFilterFunction} />
//         <Button btnType="success" clicked={toggleHandler}>
//           تغییر وضعیت نمایش
//         </Button>
//         <Students
//         studentsList={studentsState}
//         nameChange={nameChangeHandler}
//         classNumberChange={classNumberChangeHandler}
//         phoneNumberChange={phoneNumberChangeHandler}
//         emailChange={emailChangeHandler}
//         deleted={deletStudent}
//         toggle={toggle}
//         />
        
//       </div>
//       </BrowserRouter>
//     );
// }

// export default App;

