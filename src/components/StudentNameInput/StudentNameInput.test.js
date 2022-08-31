import { render } from '@testing-library/react';
import StudentNameInput from './StudentNameInput';

describe('Student name input component displays correctly', () => {
  it('StudentNameInput is rendered without error', () => {
    
    expect(() => { render(<StudentNameInput/>) }).not.toThrowError();
  })
})