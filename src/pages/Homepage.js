import React,{useState, useRef, useEffect} from 'react';
import Students from '../components/students/students';
import Button from '../components/students/UI/Button/button';
import axios from 'axios';

const HomePage = (props)=>{
    const inputEl = useRef(null);
    const [searchBarValue,setSearchBarValue] = useState('');
    const [studentsState,setStudents] = useState([]);
    const [arrayHolder,setArrayHolder] = useState([]);
    const [toggle,setToggle] = useState(false);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setArrayHolder(studentsState);
        inputEl.current.focus();
        setLoading(true)
        axios.get('https://jsonplaceholder.ir/posts',)
        .then(response=>{
            // console.log(response)
            const students = response.data.slice(2,8);
            const updateStudent = students.map(student=>{
                return{
                    ...student,
                    score:20
                }
            })
            setStudents(updateStudent)
            setLoading(false)
        })
    },[])
    
    const searchFilterFunction=(event)=>{
        const itemData = arrayHolder.filter((item)=>{
        const itemData = item.name.toUpperCase();
        const textData = event.target.value.toUpperCase();
        return itemData.indexOf(textData)>-1
        
        })
        setStudents(itemData);
        setSearchBarValue(event.target.value)
    }
    
    const nameChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student=>{
        return student.id===id;
        })
        //console.log(studentIndex);
        const student={...studentsState[studentIndex]};
        //console.log(student);
        student.name=event.target.value;
        const students = [...studentsState];
        students[studentIndex]=student;
        setStudents(students);
    }
    const deleteStudent=(index)=>{
        const students=[...studentsState];
        students.splice(index,1);
        setStudents(students)
    }
        
    const toggleHandler=()=>{
        console.log(toggle)
        setToggle(!toggle)
    }
    const edited =(id)=>{
        console.log(id);
        props.history.push({pathname:'/student/'+id})
    }
    return (
        
            <React.Fragment>
                <input type="text" value={searchBarValue} onChange={searchFilterFunction} placeholder="Search..." className="search-bar" ref={inputEl} style={{marginTop:'80px'}}/>
                <Button
                    btnType="success"
                    clicked={toggleHandler}
                >
                    تغییر وضعیت نمایش 
                </Button>
                {
                            loading? <h2>Loading...</h2>:
                            <Students
                            studentsList={studentsState}
                            nameChanged={nameChangeHandler}
                            deleted={deleteStudent}
                            toggle={toggle}
                            edited={edited}
                    />
                }
                    
        </React.Fragment>        
    )
}

export default HomePage;