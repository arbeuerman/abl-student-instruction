import React, { useEffect, useState} from 'react';

import { getStudents } from '../../api/api';
//src/api/api.js
// /Users/alexandrarodriguezbeuerman/Development/code/abl-student-instructional-time/src/api/api.js
// /Users/alexandrarodriguezbeuerman/Development/code/abl-student-instructional-time/src/components/StudentNameInput/StudentNameInput.js
import './StudentNameInput.css'

const StudentNameInput = () => {

  const [studentName, setStudentName] = useState('');

  function handleInput(event) {
    const name = event.target.value;
    setStudentName(name);
  }

  function handleSubmit(event){
    //make api call
    console.log(event.target)
    getStudents();
  }

  return(
    <>
      <h1> Select student name </h1>
      <div className='name-input-container'>
        <input 
          className='student-name-input'
          onChange={handleInput} 
          placeholder='e.g. Sarah' 
          type='text' 
          value={studentName}
        />
        <button className='name-submit-button' onClick={handleSubmit}> Submit </button>
      </div>
      
    </>
  );
}

export default StudentNameInput;