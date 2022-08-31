import axios from 'axios';

const url = 'https://crystal-pepsi.herokuapp.com/students';
const token =  '2444011b-7b70-4608-aa17-bdfb67359553';

const config = {
    headers: { Authorization: `${token}` }
};

export async function getStudents(){
  const response = await axios.get(url,config)
  return response.data;
}

export async function getStudentMeetings(studentName){
  const studentUrl = `${url}/${studentName}/meetings`;
  const response = await axios.get(studentUrl, config);
  return response.data;
}