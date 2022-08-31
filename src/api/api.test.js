import axios from 'axios';
jest.mock('axios');

import { getStudents, getStudentMeetings } from './api';

describe('test api calls', () => {

  const mockStudentData = [
    {id: 1, name:'Sarah'},
    {id: 2, name:'Stan'}
  ]

  const mockData = {
    id: 1,
    student: 'Sarah'
  }

  it('calls get students correctly', async () => {
    axios.get.mockResolvedValueOnce({ data: mockStudentData });
    const students = await getStudents();
    expect(axios.get).toHaveBeenCalledTimes(1);
  })

  it('gets individual student correctly', async () => {
    axios.get.mockResolvedValueOnce({ data: mockData });
    const studentData = await getStudentMeetings();
    expect(axios.get).toHaveBeenCalledTimes(1);
  })

})
