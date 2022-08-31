import { render, screen } from '@testing-library/react';
import StudentMeetingTime from './StudentMeetingTime';

describe('Student name input component displays correctly', () => {
  
  const props = {
    student: 'Sarah',
  };

  it('StudentMeetingTime is rendered without error', () => {
    expect(() => { render(<StudentMeetingTime props = {props}/>) }).not.toThrowError();
  })

  it('student name is correctly displayed in title', () => {
    render(<StudentMeetingTime student = {props.student}/>)
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Time Sarah spent in instructional meetings');
  })
})