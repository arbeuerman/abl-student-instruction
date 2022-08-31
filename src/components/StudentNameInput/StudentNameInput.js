import React, { useEffect, useState} from 'react';

import StudentMeetingTime from '../StudentMeetingTime/StudentMeetingTime'
import { getStudents } from '../../api/api';
import './StudentNameInput.css'

const StudentNameInput = () => {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleInput(event) {
    const name = event.target.value;
    setStudentName(name);
  }


  useEffect(()=> {
    let mounted = true;
    if(mounted) {
      getStudents()
      .then(students => {
        setStudents(students);
      })
      .catch(error => {
        console.log(error);
      })
    }
    //in case while promise is resolving, user navigates away from page and component is no longer mounted
    //this will prevent the component from trying to set the state and causing errors  
    return () => {
      mounted = false;
    }
  }, []) //only make call to load students once, on first time component mounts

  return(
    <>
      <h1> Select student name </h1>
      <div className='name-input-container'>
        <select className='student-name-select' onChange={handleInput} value={studentName}>
          <option value='' >Select a student</option>
          {students.map( student => <option key={student} value={student}> { student } </option>)}
        </select>
      </div>
      {studentName !== '' ? <StudentMeetingTime student={studentName} /> : null }
    </>
  );
}

export default StudentNameInput;