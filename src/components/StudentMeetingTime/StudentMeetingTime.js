import { useState, useEffect } from 'react';

import { getStudentMeetings } from '../../api/api';
import { getPercentOfInstructionalTime } from '../../meetingTimes';

const StudentMeetingTime = (props) => {

  const { student } = props;

  const [timeInInstructionalMeetings, setTimeInInstructionalMeetings] = useState(0)

  useEffect(()=> {
    let mounted = true;
    if(mounted) {
      getStudentMeetings(student)
      .then(data => {
        const time = getPercentOfInstructionalTime(data);
        setTimeInInstructionalMeetings(time);
      })
      .catch(error => {
        console.log(error);
      })
    }
    
    return () => {
      mounted = false;
    }
  }, [student])

  return(
    <>
      <h2>Instructional Meeting Time for {student}</h2>
      <p>{student} has spent {timeInInstructionalMeetings}% of their time in instructional meetings.</p>
    </>
  )
}

export default StudentMeetingTime;